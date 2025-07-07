import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../../CSS/toast.css"

function ToastPortal({ message, duration = 3000 }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    return ReactDOM.createPortal(
        <div className="toast">{message}</div>,
        document.getElementById("portal-root")
    );
}

export default ToastPortal;
