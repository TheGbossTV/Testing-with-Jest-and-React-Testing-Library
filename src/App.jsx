import React, { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])

  const onAddUser = (userData) => {
    setUsers([...users, { ...userData, id: users.length + 1 }])
  }

  return (
    <div>
      <UserForm onAddUser={onAddUser} />
      <hr />
      <UserList users={users} />
    </div>
  )
}

export default App
