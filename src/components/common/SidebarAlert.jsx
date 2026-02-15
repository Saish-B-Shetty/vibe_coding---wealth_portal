import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, X } from 'lucide-react';
import './SidebarAlert.css';

const SidebarAlert = ({ onClose }) => {
    const navigate = useNavigate();

    return (
        <div className="sidebar-alert">
            <div className="alert-header-side">
                <div className="alert-icon-wrapper">
                    <AlertTriangle size={14} />
                </div>
                <span className="alert-label">Urgent</span>
                <button className="btn-close-alert" onClick={(e) => { e.stopPropagation(); onClose(); }}>
                    <X size={12} />
                </button>
            </div>

            <p className="alert-msg">
                <strong>Fund Manager Change</strong> detected in your portfolio.
            </p>

            <button className="btn-check-now" onClick={() => navigate('/manager-change')}>
                Check Impact
            </button>
        </div>
    );
};

export default SidebarAlert;
