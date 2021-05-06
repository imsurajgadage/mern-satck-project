import React from 'react'
import './Signup.module.css'

const Signup = () => {
    return (
        <>
        <div className="signup-form">
    <form >
		<h2>Register</h2>
		<p className="hint-text">Create your account. It's free and only takes a minute.</p>
        <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required" autoComplete="off"/></div>
				<div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" autoComplete="off"/></div>
			</div>        	
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required" autoComplete="off"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required" autoComplete="off"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" autoComplete="off"/>
        </div>        
        <div className="form-group">
			<label className="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div className="form-group">
            <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div className="text-center">Already have an account? <a href="#">Sign in</a></div>
</div>
        </>
    )
}

export default Signup
