import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header glass-panel">
            {/* Mobile Menu Button - Left */}
            <div className="header-left md:hidden">
                <button className="menu-btn">
                    <Menu size={24} color="var(--color-text-primary)" />
                </button>
            </div>

            {/* Right Side Actions - Removed per user request */}
            {/* <div className="header-right">...</div> */}
        </header>
    );
};

export default Header;
