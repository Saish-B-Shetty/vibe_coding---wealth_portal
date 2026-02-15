import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Compass, X, ArrowRight, ChevronRight, PlayCircle } from 'lucide-react';
import PortfolioGrowthChart from '../../components/dashboard/PortfolioGrowthChart';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [showFeatureCard, setShowFeatureCard] = useState(true);

    return (
        <div className="dashboard-container">
            {/* Welcome Section */}
            <div className="welcome-card">
                <div className="welcome-header">
                    <span className="wave-emoji">👋</span>
                    <div>
                        <h3>Welcome back, Saish</h3>
                        <p className="welcome-subtitle">Your portfolio grew by 12% this month</p>
                    </div>
                </div>
                <div className="welcome-actions">
                    <button className="btn-tour-primary">Show Me Around</button>
                    <button className="btn-tour-secondary">Skip Tour</button>
                </div>
            </div>

            {/* Financial Goals */}
            <div className="section-header">
                <h3>Your Financial Goals</h3>
            </div>
            <div className="goal-card glass-panel" onClick={() => navigate('/goals')}>
                <div className="goal-header">
                    <span className="goal-icon">🎓</span>
                    <span className="goal-name">Daughter's MBA</span>
                </div>
                <div className="progress-track">
                    <div className="progress-fill" style={{ width: '0%' }}></div>
                </div>
                <div className="goal-stats">
                    <span>₹0 of ₹1.04 Cr</span>
                    <span className="goal-status">Status: Ready to start <ArrowRight size={14} /></span>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="section-header">
                <h3>Quick Actions</h3>
            </div>
            <div className="quick-actions-grid">
                <div className="action-card glass-panel" onClick={() => navigate('/explore')}>
                    <div className="action-icon-wrapper"><Search size={24} /></div>
                    <span>SIP</span>
                </div>
                {/* Import removed */}
                <div className="action-card glass-panel" onClick={() => navigate('/explore')}>
                    <div className="action-icon-wrapper"><TrendingUp size={24} /></div>
                    <span>Invest</span>
                </div>
                <div className="action-card glass-panel" onClick={() => navigate('/fund-details')}>
                    <div className="action-icon-wrapper"><Compass size={24} /></div>
                    <span>Explore</span>
                </div>
            </div>

            {/* Feature Card: Smart Tax Optimizer */}
            {showFeatureCard && (
                <div className="feature-card-gradient">
                    <button className="close-feature-btn" onClick={() => setShowFeatureCard(false)}><X size={16} /></button>
                    <div className="feature-content">
                        <h3 className="feature-title">💡 NEW: Smart Tax Optimizer</h3>
                        <p className="feature-desc">Save up to ₹15,625 in taxes annually with automated LTCG harvesting</p>
                        <button className="btn-feature-cta" onClick={() => navigate('/tax-harvesting')}>Learn More</button>
                    </div>
                </div>
            )}

            {/* Market Snapshot */}
            <div className="market-snapshot glass-panel">
                <div className="section-header-compact">
                    <h3>📊 Market Snapshot</h3>
                </div>
                <div className="market-row">
                    <span>Sensex</span>
                    <span className="market-val positive">75,234 <span className="market-change">(+0.45%) ▲</span></span>
                </div>
                <div className="market-row">
                    <span>Nifty 50</span>
                    <span className="market-val positive">22,789 <span className="market-change">(+0.38%) ▲</span></span>
                </div>
            </div>

            {/* Learn Section */}
            <div className="learn-strip">
                <div className="learn-content">
                    <PlayCircle size={20} className="learn-icon" />
                    <span>Learn: What is SIP? (2 min)</span>
                </div>
                <ChevronRight size={20} />
            </div>
        </div>
    );
};

export default Dashboard;
