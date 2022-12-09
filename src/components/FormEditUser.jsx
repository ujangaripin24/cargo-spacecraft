import React from 'react'
import { IoLogInOutline, IoDocumentTextOutline } from 'react-icons/io5'

function FormEditUser() {
  return (
    <div>
        <h1 className="title">Edit User List</h1>
        <div className="card is-shadowless">
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
                                <div className="select is-primary">
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

export default FormEditUser