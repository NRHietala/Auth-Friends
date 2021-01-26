import React, { useState } from 'react'
import axios from 'axios';

const initialFormValues = {
  username:"",
  password:""
}

const Login = props => {
  const [ formValues, setFormValues ] = useState(initialFormValues)

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name] : e.target.value
    })
  }

  const login = e => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/api/login", formValues)
    .then(res => {
      window.localStorage.setItem("token", res.data.payload)
      props.history.push("/protected")
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <div>
      <h2>Sign In!</h2>
      <form className="formGroup" onSubmit={login}>
        <label className="formLabel">
        <input
        className="formInput"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
        value={formValues.username}
        />
        </label>
        <label className="formLabel">
        <input
        className="formInput"
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
        value={formValues.password}
        />
        </label>
        <button>Sign In!</button>
      </form>
    </div>
  )
}

export default Login
