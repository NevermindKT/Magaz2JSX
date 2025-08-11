import ReactDOM from "react-dom";
import "../../CSS/modalOverlay.css"

export default function Modal({ children, onClose }) {
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById("portal-root")
    );
}
