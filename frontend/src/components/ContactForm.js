import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { SocialIcon } from 'react-social-icons';
import './ContactForm.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const contactRef = collection(db, 'contacts');
            await addDoc(contactRef, {
                name: name,
                email: email,
                message: message,
                timestamp: new Date()
            });

            console.log('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending message: ', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-form-container" id="contact">
            <div className="form-wrapper">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
            <div className="get-connected">
                <p>Get connected with me through</p>
            </div>
            <div className="social-icons">
                <a href={`https://wa.me/916382547207?text=Hi%20there,%20I%20found%20your%20website%20and%20I%20would%20like%20to%20chat.%20`} target="_blank" rel="noopener noreferrer">
                    <SocialIcon network="whatsapp" />
                </a>
                <SocialIcon url="https://www.instagram.com/being_divakar/" />
                <SocialIcon url="https://www.linkedin.com/in/divakar-g-469351263/" />
                <SocialIcon url="https://x.com/Divakar3501" />
            </div>
           
        </div>
    );
};

export default ContactForm;
