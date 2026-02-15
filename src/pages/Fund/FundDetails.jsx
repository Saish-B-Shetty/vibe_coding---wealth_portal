import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Info, Clock } from 'lucide-react';
import './FundDetails.css';

const FundDetails = () => {
    const navigate = useNavigate();
    const [showCoolingModal, setShowCoolingModal] = useState(false);

    return (
        <div className="fund-container">
            <div className="screen-header-fund">
                <button className="back-btn" onClick={() => navigate('/dashboard')}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <span>Fund Details</span>
            </div>

            {/* Herd-Bias Radar Warning */}
            <div className="hype-alert-banner">
                <div className="alert-header-row">
                    <div className="alert-title">
                        <AlertTriangle size={20} className="alert-icon" />
                        <span>HYPE ALERT</span>
                    </div>
                    <button className="btn-learn-tiny">Learn More</button>
                </div>

                <p className="alert-main-text">This fund has seen unusual retail inflows</p>
                <p className="alert-highlight">₹3,200 Cr invested this month (5x normal rate)</p>

                <div className="alert-insight">
                    <span className="brain-icon">🧠</span>
                    <span>Historical Pattern: High inflows often precede corrections (68% of cases)</span>
                </div>
            </div>

            {/* Fund Header */}
            <div className="fund-header-section">
                <h2 className="fund-name">ABC Infrastructure Fund</h2>
                <div className="fund-meta">
                    <span>NAV: ₹145.32</span>
                    <span className="positive-change">+₹2.34 (1.6%) ▲</span>
                </div>
            </div>

            {/* Returns Card */}
            <div className="glass-panel detail-card">
                <h3>Returns</h3>
                <div className="returns-grid">
                    <div className="return-item">
                        <span className="return-label">1Y</span>
                        <span className="return-val">28.5%</span>
                    </div>
                    <div className="return-item">
                        <span className="return-label">3Y</span>
                        <span className="return-val">18.2%</span>
                    </div>
                    <div className="return-item">
                        <span className="return-label">5Y</span>
                        <span className="return-val">12.4%</span>
                    </div>
                </div>
            </div>

            {/* Riskometer */}
            <div className="risk-section">
                <h3>Riskometer</h3>
                <div className="riskometer-track">
                    <div className="riskometer-fill"></div>
                    <div className="riskometer-pointer" style={{ left: '75%' }}></div>
                </div>
                <div className="risk-labels">
                    <span>Low</span>
                    <span>High</span>
                </div>
            </div>

            {/* Info Stats */}
            <div className="stats-list">
                <div className="stat-row">
                    <span>Expense Ratio</span>
                    <span>1.85%</span>
                </div>
                <div className="stat-row">
                    <span>Exit Load</span>
                    <span>1% if redeemed &lt; 1 yr</span>
                </div>
            </div>

            {/* Holdings */}
            <div className="glass-panel detail-card">
                <h3>Holdings: Top 10 Stocks</h3>
                <div className="holding-row">
                    <span>L&T</span>
                    <span className="holding-weight">12.3%</span>
                </div>
                <div className="holding-row">
                    <span>Adani Ports</span>
                    <span className="holding-weight">8.7%</span>
                </div>
                <div className="show-more-link">... Show More</div>
            </div>

            {/* Action Buttons */}
            <div className="action-footer">
                <button className="btn-primary-action" onClick={() => setShowCoolingModal(true)}>Start SIP</button>
                <div className="secondary-actions">
                    <button className="btn-secondary-action">Add to Watchlist</button>
                    <button className="btn-secondary-action">See Alternatives</button>
                </div>
            </div>

            {/* Cooling Period Modal */}
            {showCoolingModal && (
                <div className="modal-overlay">
                    <div className="cooling-modal glass-panel">
                        <div className="cooling-icon">🧠</div>
                        <h3>24-Hour Cooling Period</h3>
                        <p>Take time to think before investing in hyped funds.</p>
                        <div className="modal-actions">
                            <button className="btn-modal-primary" onClick={() => setShowCoolingModal(false)}>I Understand</button>
                            <button className="btn-modal-secondary" onClick={() => setShowCoolingModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FundDetails;
