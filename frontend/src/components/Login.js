import React,{useState} from 'react'
import { NavLink ,useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const loginUser = async (e) =>{
    e.preventDefault()
    const res = await fetch('/signin',{
          method : "POST",
          headers:{
            "Content-Type": "application/json"
          },body: JSON.stringify({
            email,
            password    
          })
    });

    const data = res.json()
    if(data.status === 400 || !data){
      window.alert('Invalid Credentials')
    }else{
      window.alert('Login Successful')
      history.push('/')
    }
  }
    return (
        <>
            <form method='POST'>
  
  <div class="form-outline mb-4">
    <input name="email" type="email" id="form1Example1" class="form-control" 
    value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off"/>
    <label class="form-label" for="form1Example1">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <input name="password" type="password" id="form1Example2" class="form-control" 
    value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off"/>
    <label class="form-label" for="form1Example2">Password</label>
  </div>

  
  <div class="row mb-4">
    <div class="col">
      <NavLink to="/signup">Already User</NavLink>
    </div>
  </div>

  <button type="submit" name="submit" class="btn btn-primary form-submit"
  onClick={loginUser} >Sign in</button>
</form>
        </>
    )
}

export default Login
