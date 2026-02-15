import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, CreditCard, Bell, Shield, LogOut, ChevronRight, FileText, HelpCircle } from 'lucide-react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <h2 className="screen-header-profile">Account & Settings</h2>

            <div className="profile-grid">
                {/* Left Column - Main Info */}
                <div className="profile-left">
                    {/* User Card */}
                    <div className="user-profile-card">
                        <div className="profile-avatar">
                            <span>SS</span>
                        </div>
                        <div className="profile-info">
                            <h3>Saish Shetty</h3>
                            <p className="user-uci">UCI: 12345678</p>
                        </div>
                        <div className="kyc-badge">
                            <span>KYC Verified</span>
                        </div>
                    </div>

                    {/* Personal Details (Masked) */}
                    <div className="details-section">
                        <h3>Personal Details</h3>
                        <div className="detail-row">
                            <span className="detail-label">Mobile</span>
                            <span className="detail-val">+91 98******12</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Email</span>
                            <span className="detail-val">sa*******@gmail.com</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">PAN</span>
                            <span className="detail-val">ABC*****1F</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Date of Birth</span>
                            <span className="detail-val">**/**/1990</span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Menu Actions */}
                <div className="profile-right">
                    <div className="menu-group">
                        <div className="menu-item">
                            <div className="menu-icon"><CreditCard size={20} /></div>
                            <div className="menu-content">
                                <h4>Bank Accounts</h4>
                                <p>HDFC Bank - **** 1234</p>
                            </div>
                            <ChevronRight size={16} className="chevron" />
                        </div>
                        <div className="menu-item">
                            <div className="menu-icon"><FileText size={20} /></div>
                            <div className="menu-content">
                                <h4>Reports & Statements</h4>
                                <p>Tax P&L, Capital Gains</p>
                            </div>
                            <ChevronRight size={16} className="chevron" />
                        </div>
                        <div className="menu-item">
                            <div className="menu-icon"><User size={20} /></div>
                            <div className="menu-content">
                                <h4>Nominees</h4>
                                <p>1 Nominee Added</p>
                            </div>
                            <ChevronRight size={16} className="chevron" />
                        </div>
                    </div>

                    <div className="menu-group">
                        <div className="menu-item">
                            <div className="menu-icon"><Shield size={20} /></div>
                            <div className="menu-content">
                                <h4>Security</h4>
                                <p>Change Password, PIN</p>
                            </div>
                            <ChevronRight size={16} className="chevron" />
                        </div>
                        <div className="menu-item">
                            <div className="menu-icon"><Bell size={20} /></div>
                            <div className="menu-content">
                                <h4>Notifications</h4>
                                <p>Manage alerts</p>
                            </div>
                            <ChevronRight size={16} className="chevron" />
                        </div>
                    </div>

                    <div className="menu-group logout-group">
                        <div className="menu-item logout-item" onClick={() => navigate('/login')}>
                            <div className="menu-icon"><LogOut size={20} /></div>
                            <div className="menu-content">
                                <h4>Logout</h4>
                            </div>
                        </div>
                    </div>

                    <div className="app-version">
                        Version 2.4.1 • Build 10023
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
