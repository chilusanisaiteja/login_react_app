import './Login.css';
import axios from 'axios';
import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login,setlogin]=useState(true);

    const histroy = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
       try{ await axios.post("http://localhost:8080/",{
            email,password
        }).then(res=>{
            if(res.data==="exist"){
              histroy("/home",{state:{id:"User"}});
            }
            else{
                setlogin(false);
                alert("User have not signed up");
            }
        });
    }
    catch(e){
        alert("wrong details");
        console.log(e);
        }
      };

      const handleSubmit2 = async(event) => {
        event.preventDefault();
       try{ await axios.post("http://localhost:8080/signup",{
            name:name,
            email:email,
            password:password
        }).then(res=>{
            if(res.data ==="exist"){
                setlogin(true);
            }
            else{
                histroy("/home",{state:{id:name}});
            }
        }
        )
    }
    catch(e){
        console.log(e);
        }
      };
  
  return  login?(
    <div className="loginform">
    <form onSubmit={handleSubmit} className="form">
    <h1>Login Page</h1>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
      <button className="signup" onClick={(e)=>{e.preventDefault();
        setlogin(false);}}>sign up</button>
    </form>
    </div>
  ):( <div className="signupform">
    <form onSubmit={handleSubmit2} className="form">
    <h1>SIGNUP</h1>
    <label>
    Name:
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">SignUp</button>
    </form>
    </div>
  )
}

export default Login
