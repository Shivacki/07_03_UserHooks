// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { DemoFetch } from './demoFetch'
import { DemoUseLocalStorage } from './demoUseLocalStorage'

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
    </>
  )
}

export default App
