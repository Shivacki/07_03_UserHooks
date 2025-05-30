// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { DemoFetch } from './components/demo/demoFetch'
import { DemoUseLocalStorage } from './components/demo/demoUseLocalStorage'
import { DemoHover } from './components/demo/demoHover'
import { DemoViewportSize } from './components/demo/demoViewportSize'

function App() {

  return (
    <>
      <h1>User hooks (Пользовательские хуки)</h1>
      <div>
        <h2>Задание #1</h2>
        <DemoFetch/>
      </div>
      <hr/>
      <div>
        <h2>Задание #2</h2>
        <DemoUseLocalStorage/>
      </div>
      <hr/>
      <div>
        <h2>Задание #3</h2>
        <DemoHover/>
      </div>
      <hr/>
      <div>
        <h2>Задание #4</h2>
        <DemoViewportSize/>
      </div>
    </>
  )
}

export default App
