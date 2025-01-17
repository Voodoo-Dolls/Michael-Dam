import * as React from 'react';

interface EmailTemplateProps {
    emailData: {
        name: string,
        message: string,
        email: string
    }
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ emailData }) => {
    const { name, message, email } = emailData
    return (
        <div>
            <h1>{name} says,</h1>
            <p>{message}</p>
            <p>Email: {email}</p>
        </div>
    );
}

