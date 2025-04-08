import { JSX } from 'react';
import './App.css'
import { store, CounterStore } from './Store'
import { observer } from 'mobx-react-lite'

const Counter = observer((props: { counter: CounterStore }) => {
  const { add, reset, value } = props.counter;
  const { removeCounter } = store

  return <div className="counter">
    <span>
    <input value={value} onChange={(e) => add(e.target.value)}/>
      <button onClick={() => removeCounter(props.counter)}>X</button>
    </span>
    <button onClick={() => add(-100)}>-100</button>
    <button onClick={() => add(-1)}>-1</button>
    <button onClick={() => reset()}>0</button>
    <button onClick={() => add(+1)}>+1</button>
    <button onClick={() => add(+100)}>+100</button>
  </div>;
});

const App = (): JSX.Element => {
  const { counters, addCounter, canAddMoreCounters, sum } = store

  return <div className="app">
    <span className="counter all">{sum}</span>
    {counters.map((counter, i) => <Counter key={i} counter={counter} />)}
    {canAddMoreCounters && <button onClick={addCounter}>+</button>}
  </div>;
}

export default observer(App);