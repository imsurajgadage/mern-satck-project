import React,{useState} from 'react'
import './Signup.module.css'
import {NavLink} from 'react-router-dom'

const Signup = () => {
    const [user,setUser]= useState({
        name: "",
        email: "",
        phone:"",
        work:"",
        password:"",
        cpassword:""
      });

      let name,value
      const handleInputs = (e) =>{
        name = e.target.name;
        value= e.target.value

        setUser({
            ...user, [name]:value
        })
      }
    return (
        <>
        <div className="signup-form">
    <form >
		<h2>Register</h2>
		<p className="hint-text">Create your account. It's free and only takes a minute.</p>
        <div className="form-group">
        	<input type="text" className="form-control" name="name" value={user.name} 
            onChange={handleInputs} placeholder="Your Name" required="required" autoComplete="off"/>
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" value={user.email} 
            onChange={handleInputs} required="required" autoComplete="off"/>
        </div>
        <div className="form-group">
        	<input type="number" className="form-control" name="phone" value={user.phone} 
            onChange={handleInputs} placeholder="Mobile Number" required="required" autoComplete="off"/>
        </div>
        <div className="form-group">
        	<input type="text" className="form-control" name="work" value={user.work} 
            onChange={handleInputs} placeholder="Profession" required="required" autoComplete="off"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" value={user.password} 
            onChange={handleInputs} placeholder="Password" required="required" autoComplete="off"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="cpassword" value={user.cpassword} 
            onChange={handleInputs} placeholder="Confirm Password" required="required" autoComplete="off"/>
        </div>        

		<div className="form-group">
            <button type="submit" name="signup" className="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div className="text-center">Already have an account? <NavLink to="/login">Sign in</NavLink></div>
</div>
        </>
    )
}

export default Signup
