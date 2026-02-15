import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowDown, Briefcase } from 'lucide-react';
import './ManagerChange.css';

const ManagerChange = () => {
    const navigate = useNavigate();

    return (
        <div className="manager-container">
            <div className="screen-header-manager">
                <button className="back-btn" onClick={() => navigate('/notifications')}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <span>Manager Change Details</span>
            </div>

            <div className="manager-header-section">
                <h3>HDFC Flexi Cap Fund</h3>
                <p>Management Transition</p>
            </div>

            {/* Transition Visual */}
            <div className="transition-visual">
                <div className="manager-card-person">
                    <div className="role-label">Outgoing Manager</div>
                    <div className="avatar-lg bg-gray">PJ</div>
                    <div className="person-name">Prashant Jain</div>
                    <p className="person-stat">Tenure: 12 years</p>
                    <p className="person-stat">CAGR: 15.8%</p>
                </div>

                <div className="transition-arrow-wrapper">
                    <ArrowDown size={32} className="arrow-down-icon" />
                </div>

                <div className="manager-card-person">
                    <div className="role-label highlight">New Manager</div>
                    <div className="avatar-lg bg-blue">RJ</div>
                    <div className="person-name">Roshi Jain</div>
                    <p className="person-stat">Experience: 8 years</p>
                    <p className="person-stat">Previous: Deputy FM</p>
                </div>
            </div>

            {/* Track Record */}
            <div className="glass-panel info-card">
                <h3>Track Record:</h3>
                <p>• HDFC Mid Cap: 12.4% CAGR</p>
                <p>• Internal succession</p>
            </div>

            {/* Risk Assessment */}
            <div className="risk-assessment-box">
                <div className="risk-title">Risk Assessment: <span className="badge-medium">🟡 Medium</span></div>
                <ul className="risk-points">
                    <li>• Manager has experience</li>
                    <li>• First time as lead FM</li>
                    <li>• Institutional continuity <span className="check">✓</span></li>
                </ul>
            </div>

            {/* Skin in the Game */}
            <div className="skin-game-card">
                <h3><Briefcase size={16} /> AMC Skin-in-the-Game</h3>
                <p className="skin-main">✓ Senior management owns <span className="highlight-val">₹12 Cr</span> in this fund</p>
                <p className="skin-sub">Shows confidence in strategy</p>
            </div>

            {/* Recommendation */}
            <div className="recommendation-box-blue">
                <p className="rec-label">Our Recommendation</p>
                <p>HOLD for 6 months—monitor performance vs. benchmark</p>
            </div>

            {/* Alternatives */}
            <div className="alternatives-section">
                <h3>Alternative Funds (similar):</h3>
                <ul className="alt-list">
                    <li>Axis Flexi Cap (stable mgmt)</li>
                    <li>Parag Parikh Flexi Cap</li>
                </ul>
            </div>

            {/* Actions */}
            <div className="manager-actions">
                <button className="btn-primary-mgr">View Alternatives</button>
                <div className="secondary-mgr-actions">
                    <button className="btn-sec-mgr">Keep Current</button>
                    <button className="btn-sec-mgr">Remind in 3 months</button>
                </div>
            </div>
        </div>
    );
};

export default ManagerChange;
