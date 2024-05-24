import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
    <div className="footer-content">
        {/* Facebook Icon */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
        </a>
        {/* YouTube Icon */}
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                <path d="M10 9l5 3l-5 3z" />
            </svg>
        </a>
        {/* Instagram Icon */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
            </svg>
        </a>
    </div>
    <div className="footer-links">
        <p>Info      Support       News</p>
        <p>Terms of Use       Privacy Policy </p>
        <div className="footer-bottom">
            <p>©2024 Fernando Kumul</p>
        </div>
    </div>
</footer>

    
    );
};

export default Footer;
