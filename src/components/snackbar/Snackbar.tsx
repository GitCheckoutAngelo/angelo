import {  } from 'react'
import './Snackbar.css'
import { useSnackbar } from '../../contexts/SnackbarContext'

const Snackbar = () => {
    const snackbar = useSnackbar();
    const displayClass = snackbar?.isDisplayed ? "display" : "close";
    const removeClass = snackbar?.message?.length ? "" : "remove";

    return (
        <div className={`snackbar ${displayClass} ${removeClass}`}>
            <div className="label">
                {snackbar?.isSuccessful ? <i className="bx bx-check-circle" /> : <i className="bx bx-x-circle" />}
                <p>{snackbar?.message}</p>
            </div>
            <button className="close-btn" onClick={snackbar?.close}>
                <i className="bx bx-x" />
            </button>
        </div>
    )
}

export default Snackbar