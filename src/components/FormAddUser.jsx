import React from 'react'
import {IoDocumentTextOutline} from 'react-icons/io5'

function FormAddUser() {
  return (
    <div>
        <h1 className="title">Prodduct List</h1>
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