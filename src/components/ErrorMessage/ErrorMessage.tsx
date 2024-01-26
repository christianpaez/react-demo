import React from 'react'
import './ErrorMessage.css'

interface ErrorMessageProps {
    message?: string
}

const ErrorMessage = ({ message = "API Failed, please try again..." }: ErrorMessageProps) => (
    <div className="error-badge">
        {message}
    </div>
);

export default ErrorMessage;
