import { Routes, Route } from 'react-router'
import './App.css'
import AddUser from './pages/AddUser'
import UserList from './pages/UserList'
import EditUser from './pages/EditUser'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AddUser/>}/>
        <Route path='/userList' element={<UserList/>}/>
        <Route path='/editUser' element={<EditUser/>}/>
      </Routes>
    </>
  )
}

export default App
