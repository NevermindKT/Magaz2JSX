import React from "react";
import ReactDOM from "react-dom";
import "../../CSS/confirmDialog.css";

function ConfirmDialog({ message, onConfirm, onCancel }) {
    return ReactDOM.createPortal(
        <div className="confirm-overlay">
            <div className="confirm-box">
                <p>{message}</p>
                <div className="buttons">
                    <button onClick={onConfirm}>Да</button>
                    <button onClick={onCancel}>Нет</button>
                </div>
            </div>
        </div>,
        document.getElementById("portal-root")
    );
}

export default ConfirmDialog;