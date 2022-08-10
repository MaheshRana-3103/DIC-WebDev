import React, { useEffect, useState } from 'react'
import "./Signup.css";
const Signup = () => { 
  const [inputvalue,setinputvalue]=useState({
      name:'',
      email:'',
      password:'',
  }); 
  const [validate,setvalidate]=useState({
    name:'',
    email:'',
    password:'',
  });

   //handle submit updates
   function handleChange(event) {
    const { name, value } = event.target;
    setinputvalue({ ...inputvalue, [name]: value });
  }
  //validation

  const validationcheck=()=>{
    let errors=validate;
    if (!inputvalue.name.trim()) {
        errors.name = "User name is required";
    } else {
        errors.name = "";
    }

    const emailCond =
    /^\S+@\S+\.\S+$/;
    if (!inputvalue.email.trim()) {
    errors.email = "Email is required";
    } else if (!inputvalue.email.match(emailCond)) {
    errors.email = "Please enter a valid email address";
    } else {
    errors.email = "";
    }

    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputvalue.password;
    if (!password) {
      errors.password = "password is required";
    }
    else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    }
    else {
      errors.password = "";
    }

    setvalidate(errors);
  };
  useEffect(() => {
    validationcheck();
  }, [inputvalue]);

  const handleSubmit = (e) => {
    
  };

  return (
    <div>
     <section id="contact"class="contact"id="contact">
            <div class="contact-form">
                <form id="form" className="form-class" action="/"onSubmit={handleSubmit}>
                    <div>
                        <label>USERNAME</label><br/>
                        <input id="Name" 
                        placeholder="Enter your name" 
                        name="name" 
                        type="text"
                        onChange={(e) => handleChange(e)}
                        value={inputvalue.name}
                        ></input>
                        {validate.name && <p>{validate.name}</p>}
                    </div>
                    <div>
                        <label>EMAIL ADDRESS</label><br/>
                        <input id="Email"
                        placeholder="Enter your Email Address" 
                        name="email" 
                        type="text"
                        onChange={(e) => handleChange(e)}
                        value={inputvalue.email}
                        ></input>
                        {validate.email && <p>{validate.email}</p>}
                    </div>
                    <div>
                        <label>PASSWORD</label><br/>
                        <input id="Password"
                        placeholder="Enter Password" 
                        type="password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        value={inputvalue.password}
                        ></input>
                        {validate.password && <p>{validate.password}</p>}
                    </div>
                    <br/>
                    <button type="submit">SIGNUP</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Signup
