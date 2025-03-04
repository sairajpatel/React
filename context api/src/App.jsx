
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UsercontextProvider from './Context/usercontexProvider'


function App() {


  return (
    <UsercontextProvider>
    <h1>Hello worlds</h1>
    <Login/>
    <Profile/>
    </UsercontextProvider>
  )
}

export default App
