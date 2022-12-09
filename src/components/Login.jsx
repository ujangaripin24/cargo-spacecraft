import React from 'react';
import { IoLogInOutline, IoEyeOutline, IoDocumentTextOutline } from "react-icons/io5";

const Login = () => {
  return (
        <section className="hero has-background-grey-light is-fullheight">
          <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4">
                        <form className="box">
                            <div className='field'>
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
        </section>
    )
}

export default Login