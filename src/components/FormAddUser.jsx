import React from "react";
import {IoDocumentTextOutline, IoLogInOutline, IoLogoDropbox} from "react-icons/io5";

function FormAddUser() {
  return (
    <div>
        <h1 className="title"><IoLogoDropbox/> Product List</h1>
        <div className="card has-shadow">
            <div className="card-content">
                <div className="content">
                        <form>
                            <div className='field mt-3'>
                                <label className="label"><IoDocumentTextOutline/> Name</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Text input"/>
                            </div>
                            </div>

                            <div className='field mt-3'>
                                <label className="label"><IoDocumentTextOutline/> Email</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Text input"/>
                            </div>
                            </div>
                            
                            <div className='field mt-3'>
                                <label className="label"><IoDocumentTextOutline/> Password</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Text input"/>
                            </div>
                            </div>
                            
                            <div className='field mt-3'>
                                <label className="label"><IoDocumentTextOutline/> Conf Password</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Text input"/>
                            </div>
                            </div>
                            
                            <div className='field mt-3'>
                                <label className="label"><IoDocumentTextOutline/> Role</label>
                                <div className="select is-fullwidth">
                                <select>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
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
  )
}

export default FormAddUser