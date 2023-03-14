import React, { useState } from 'react';
import "./Modal.css";
//import FormInput from './FormInput';
import Transaction from './Transaction';

const Modal = ({open, onClose, rowInfo}) => {
    
    if(!open) return null

    return(
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => e.stopPropagation()} className='modal-content ' >
                
                <h5>Send Crypto </h5>
                <p>{console.log("the data inside modal",rowInfo[0])}</p>

                {/* <div className='imgC'>
                    <img  src={`${rowInfo[1]}`} alt='nft image' />
                </div> */}
                <div>  </div>
                <p > <b>Name:</b> {rowInfo[0]}</p>
                {/* <p> <b>Description:</b> {rowInfo[2]}</p> */}
                
                {/* <FormInput address={rowInfo[1]}/> */}
                <Transaction/>
                
                <button onClick={onClose} className='close-modal'>close</button>
            </div>

        </div>
    )

}

export default Modal