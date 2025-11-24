import React, { useState } from 'react';
import { HashRouter, Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Gamepad2, Gift, UserPlus, BookOpen, Ticket } from 'lucide-react';

const NavLink = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 border-l-2 ${
        isActive 
          ? 'border-neon-blue text-neon-blue bg-neon-blue/5' 
          : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
      }`}
    >
      <Icon size={18} />
      <span className="font-mono text-sm tracking-wider">{children}</span>
    </Link>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neon-dark text-white selection:bg-neon-purple selection:text-white flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-neon-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                {/* Updated Logo for Shufflers.io */}
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="font-black text-black text-xl italic">S</span>
                </div>
                <span className="font-black text-xl tracking-tight text-white italic">
                  SHUFFLERS<span className="text-gray-500">.IO</span>
                </span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/review" icon={BookOpen}>REVIEW</NavLink>
                <NavLink to="/games" icon={Gamepad2}>GAMES</NavLink>
                <NavLink to="/lottery" icon={Ticket}>LOTTERY</NavLink>
                <NavLink to="/promos" icon={Gift}>PROMOS</NavLink>
                <NavLink to="/register" icon={UserPlus}>JOIN</NavLink>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <NavLink to="/review" icon={BookOpen}>REVIEW</NavLink>
              <NavLink to="/games" icon={Gamepad2}>GAMES</NavLink>
              <NavLink to="/lottery" icon={Ticket}>LOTTERY</NavLink>
              <NavLink to="/promos" icon={Gift}>PROMOS</NavLink>
              <NavLink to="/register" icon={UserPlus}>JOIN</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-mono text-sm">
            © 2024 SHUFFLERS.IO COMMUNITY. UNOFFICIAL PORTAL.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Discord</a>
            <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};