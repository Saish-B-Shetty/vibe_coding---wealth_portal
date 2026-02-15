import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Target, Briefcase, Search, User } from 'lucide-react';
import SidebarAlert from './SidebarAlert';
import './Navbar.css';

const Navbar = () => {
    const navItems = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'Goals', icon: Target, path: '/goals' },
        { name: 'Portfolio', icon: Briefcase, path: '/portfolio' },
        { name: 'Explore', icon: Search, path: '/explore' },
        { name: 'Profile', icon: User, path: '/profile' },
    ];

    const [showAlert, setShowAlert] = React.useState(true);

    return (
        <nav className="navbar glass-panel">
            <div className="nav-content-wrapper" style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                {/* Brand Logo for Desktop Sidebar */}
                <div className="sidebar-brand">
                    <div className="logo-placeholder-sm">W</div>
                    <span className="brand-name">WealthApp</span>
                </div>

                <ul className="nav-list">
                    {navItems.map((item) => (
                        <li key={item.name} className="nav-item">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                <item.icon className="nav-icon" size={24} />
                                <span className="nav-label">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {showAlert && (
                    <div className="desktop-alert-container" style={{ marginTop: 'auto' }}>
                        <SidebarAlert onClose={() => setShowAlert(false)} />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
