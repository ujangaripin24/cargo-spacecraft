import React from 'react';
import { IoLogInOutline, IoEyeOutline, IoDocumentTextOutline, IoRocketOutline } from "react-icons/io5";

const Login = () => {
  return (
        <section className="hero has-background-grey-light is-fullheight">
          <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4">
                        <div className='box'>
                        <header class="card-header">
                        <p class="card-header-title">
                        <IoRocketOutline/> Login Form
                        </p>
                        <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </header>
                        <form>
                            <div className='field mt-3'>
                                <label className="label"><IoDocumentTextOutline/> Email</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Text input"/>
                            </div>
                            </div>
                            <div className='field'>
                            <label className="label"><IoEyeOutline/> Password</label>
                            <div className="control">
                                <input className="input" type="password" placeholder="*****"/>
                            </div>
                            </div>
                            <div className='field'>
                                <button className="button is-success is-fullwidth"><IoLogInOutline/> Masuk</button>
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