import { useState, useContext, useEffect } from 'react'
import "./scss/app.scss"
import AppRouter from "./components/AppRouter"
import Header from "./components/Header"
import { observer } from 'mobx-react-lite'
import { Context } from './index'
import { check } from './http/userAPI'

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000)
  }, [])

  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
})

export default App;
