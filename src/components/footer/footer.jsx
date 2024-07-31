import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-300 py-4 shadow-top">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sanjay pk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
