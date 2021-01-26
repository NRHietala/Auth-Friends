import e from 'cors'
import React, { useState } from 'react'

const initialFormValues = {
  id:Date.now(),
  name:"",
  age:null,
  email:""
}

const Login = props => {
  const [ formValues, setFormValues ] = useState(initialFormValues)

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

  }


  return (
    <div>
      <h2>Sign In!</h2>
      <form className="formGroup" onSubmit={handleSubmit}>
        <input
        className="formInput"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
        value={formValues.username}
        />
      </form>
    </div>
  )
}

export default Login
