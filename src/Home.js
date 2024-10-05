import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Left-side menu */}
      <nav className="left-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/document">Account Configuration</Link></li>
          <li><Link to="/body">Account Reconciliation</Link></li>
          <li><Link to="#">Settings</Link></li>
        </ul>
      </nav>

      {/* Main content area */}
      <div className="main-content">
        <h1>CyberArk Wrapper</h1>
        <p>Select an option from the left menu to navigate.</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 CyberArk Wrapper. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
