import { makeAutoObservable, reaction, autorun } from "mobx"

export class CounterStore {
  constructor(public value = 0) {
    makeAutoObservable(this)
  }

  reset = (): void => {
    this.value = 0
  }

  add = (value: string | number): number => {
    if (!isNaN(+value)) this.value += +value
    return this.value
  }
}

export class Store {
  counters: CounterStore[] = [new CounterStore()]

  constructor() {
    makeAutoObservable(this)
  }

  get canAddMoreCounters(): boolean {
    return this.counters.length < 1000
  }

  get sum(): number {
    return this.counters.reduce((p, c) => p + c.value, 0)
  }

  get toString(): string {
    return this.counters.map(c => c.value).join(';')
  }

  fromString(value: string): void {
    this.counters = value.split(';').map(v => !isNaN(+v) ? new CounterStore(+v) : new CounterStore())
  }

  addCounter = (): void => {
    if (!this.canAddMoreCounters) return
    this.counters.push(new CounterStore())
  }

  removeCounter = (counter: CounterStore): void => {
    this.counters = this.counters.filter(c => c !== counter)
  }
}

export const store = new Store()

const urlParams = new URLSearchParams(window.location.search)
store.fromString(urlParams.get('value') || localStorage.getItem('store') || '')

reaction(
  () => store.toString,
  (value) => {
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('value', value)
    window.history.replaceState({}, '', `?${urlParams.toString()}`)
  }
)

autorun(() => {
  localStorage.setItem('store', store.toString)
})

declare global { interface Window { store: Store; } }
window.store = store