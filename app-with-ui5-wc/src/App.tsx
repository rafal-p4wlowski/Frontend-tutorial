import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@ui5/webcomponents-react';
import { BulletChart } from '@ui5/webcomponents-react-charts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button design='Emphasized' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <BulletChart
        dataset={[
          {
            name: 'January',
            sessions: 300,
            users: 100,
            volume: 350
          },
          {
            name: 'February',
            sessions: 330,
            users: 90,
            volume: 370
          },
          {
            name: 'March',
            sessions: 404,
            users: 0,
            volume: 446
          },
          {
            name: 'April',
            sessions: 80,
            users: 0,
            volume: 250
          },
          {
            name: 'May',
            sessions: 300,
            users: 0,
            volume: 450
          },
          {
            name: 'June',
            sessions: 330,
            users: 0,
            volume: 500
          },
          {
            name: 'July',
            sessions: 300,
            users: 65,
            volume: 300
          },
          {
            name: 'August',
            sessions: 180,
            users: 12,
            volume: 104
          },
          {
            name: 'September',
            sessions: 360,
            users: 99,
            volume: 300
          },
          {
            name: 'October',
            sessions: 500,
            users: 120,
            volume: 200
          },
          {
            name: 'November',
            sessions: 404,
            users: 130,
            volume: 600
          },
          {
            name: 'December',
            sessions: 80,
            users: 100,
            volume: 320
          }
        ]}
        dimensions={[
          {
            accessor: 'name',
            formatter: function Xs() { }
          }
        ]}
        layout="vertical"
        measures={[
          {
            accessor: 'users',
            formatter: function Xs() { },
            label: 'Number of users',
            type: 'additional',
            width: 10
          },
          {
            accessor: 'sessions',
            opacity: 0.5,
            type: 'primary',
            width: 10
          },
          {
            accessor: 'volume',
            type: 'comparison',
            width: 10
          }
        ]}
        onClick={function Xs() { }}
        onDataPointClick={function Xs() { }}
        onLegendClick={function Xs() { }}
      />
    </>
  )
}

export default App
