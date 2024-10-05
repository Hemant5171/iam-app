import React from 'react';
import './Header.css'; // For styling the header

const Header = ({ onUploadClick }) => {
    return (
        <header className="header">
            <div className="menu">
                <span className="menu-item">🏠 Home</span>
                <span className="menu-item">📄 Documents</span>
                <span className="menu-item" onClick={onUploadClick}>⬆️ Upload</span>
                <span className="menu-item">⚙️ Settings</span>
            </div>
        </header>
    );
}

export default Header;
