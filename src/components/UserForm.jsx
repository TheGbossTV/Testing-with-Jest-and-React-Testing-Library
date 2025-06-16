import React, { useState } from 'react'

const UserForm = ({ onAddUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddUser({ name, email })
    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id='name' type="text" name='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id='email' type="email" name='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type='submit'>Add User</button>
    </form>
  )
}

export default UserForm 