
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 py-6 border-t bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>Data collected from various public sources including IDFA, USDA, Bureau of Labor Statistics, and market research firms.</p>
        <p className="mt-2">© {new Date().getFullYear()} Scoop of History - US Ice Cream Market Dataset</p>
      </div>
    </footer>
  );
};

export default Footer;
