import React, {useState, useEffect} from 'react';
import { IoLogInOutline, IoEyeOutline, IoDocumentTextOutline, IoRocketOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from "../features/authSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSuccess, isLoading, message} = useSelector(
        (state) => state.auth
    );

    useEffect(()=>{
        if(user || isSuccess){
            navigate("/dashboard");
        }
        dispatch(reset());
    },[user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({email, password})); 
    };
    
  return (
        <section className="hero has-background-grey-light is-fullheight">
          <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4">
                        <div className='box'>
                        <header class="card-header">
                        <p className="card-header-title">
                        <IoRocketOutline/> Login Form
                        </p>
                        <button className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </header>
                        <form onSubmit={Auth} className="box">
                            {
                                isError && <div class="notification is-danger">
                                <strong>{message} </strong>
                                </div>
                            }
                            <div className='field mt-3'>
                                <label className="label"><IoDocumentTextOutline/> Email</label>
                                <div className="control">
                                <input 
                                    className="input"
                                    type="text" 
                                    value={email} 
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="Text input"/>
                            </div>
                            </div>
                            <div className='field'>
                            <label className="label"><IoEyeOutline/> Password</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="password"
                                    value={password} 
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder="*****"/>
                            </div>
                            </div>
                            <div className='field'>
                                <button type="submit" className="button is-success is-fullwidth"><IoLogInOutline/> 
                                    {isLoading ? 'Harap tunggu...' : 'Masuk'}
                                </button>
                            </div>
                        </form>        
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}

export default Login