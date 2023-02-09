import { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import "./scss/app.scss"
import AppRouter from "./components/AppRouter"
import Header from "./components/Header"
import { observer } from 'mobx-react-lite'
import { Context } from './index'
import { check } from './http/userAPI'

const App = observer(() => {
  const {user} = useContext(Context)

  useEffect(() => {
    check().then(data => {
        user.setUser(data)
        user.setIsUser(data.id)
        user.setIsAuth(true)
    })
}, [user])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
})

export default App;
