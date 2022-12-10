import React from 'react'
import {IoDocumentTextOutline, IoLogInOutline, IoLogoDropbox} from "react-icons/io5";

function FormEditProduct() {
  return (
    <div>
        <h1 className="title"><IoLogoDropbox/> Edit Product List</h1>
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
                                <label className="label"><IoDocumentTextOutline/> Price</label>
                                <div className="control">
                                <input className="input" type="text" placeholder="Text input"/>
                            </div>
                            </div>

                            <div className='field mt-3'>
                                <label className="label"><IoDocumentTextOutline/> Image</label>
                                <div className="control">
                                <input className="file" type="text" placeholder="Text input"/>
                            </div>
                            </div>
                            
                            <div className='field mt-3'>
                                <label className="label"><IoDocumentTextOutline/> Stock</label>
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

export default FormEditProduct