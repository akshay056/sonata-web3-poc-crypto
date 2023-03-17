import "./Modal.css";
import Transaction from './Transaction';

const Modal = ({ open, onClose, rowInfo }) => {

    if (!open) return null

    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => e.stopPropagation()} className='modal-content ' >
                <h5>Send Crypto </h5>
                <p>{console.log("the data inside modal", rowInfo[0])}</p>
                <div>  </div>
                <p > <b>Emp Id:</b> {rowInfo[0]}</p>
                <p > <b>Name:</b> {rowInfo[1]}</p>
                <Transaction rowInfo={rowInfo} />
                <button onClick={onClose} className='close-modal'>close</button>
            </div>
        </div>
    )
}

export default Modal