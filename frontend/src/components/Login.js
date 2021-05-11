import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <form>
  
  <div class="form-outline mb-4">
    <input name="email" type="email" id="form1Example1" class="form-control" autoComplete="off"/>
    <label class="form-label" for="form1Example1">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <input name="password" type="password" id="form1Example2" class="form-control" autoComplete="off"/>
    <label class="form-label" for="form1Example2">Password</label>
  </div>

  
  <div class="row mb-4">
    <div class="col">
      <NavLink to="/signup">Already User</NavLink>
    </div>
  </div>

  <button type="submit" name="submit" class="btn btn-lg btn-primary btn-block">Sign in</button>
</form>
        </>
    )
}

export default Login
