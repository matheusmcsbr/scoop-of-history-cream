
import React from 'react';
import { Ice } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm py-4 px-6 border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Ice className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Scoop of History
          </h1>
        </div>
        <div className="text-sm text-muted-foreground">
          US Ice Cream Market Historical Data
        </div>
      </div>
    </header>
  );
};

export default Header;
