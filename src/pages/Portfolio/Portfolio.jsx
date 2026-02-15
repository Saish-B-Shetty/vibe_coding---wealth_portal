import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Filter, AlertTriangle, PieChart } from 'lucide-react';
import Riskometer from '../../components/common/Riskometer';
import './Portfolio.css';

const Portfolio = () => {
    const navigate = useNavigate();

    return (
        <div className="portfolio-container">
            <div className="screen-header-portfolio">
                <button className="back-btn" onClick={() => navigate('/dashboard')}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <span>My Portfolio</span>
            </div>

            {/* Portfolio Summary Card */}
            <div className="portfolio-summary-card">
                <div className="label-text">Total Portfolio Value</div>
                <div className="portfolio-value">₹8,45,230</div>
                <div className="portfolio-change positive">
                    +₹2,340 (+0.28%) today <ArrowUpRight size={16} />
                </div>
            </div>

            {/* Allocation Chart (Placeholder) */}
            <div className="allocation-card glass-panel">
                <h3>Allocation</h3>
                <div className="chart-placeholder">
                    <div className="donut-chart">
                        <div className="center-hole"></div>
                    </div>
                </div>
                <div className="chart-legend">
                    <div className="legend-item"><span className="dot equity"></span> Equity 68%</div>
                    <div className="legend-item"><span className="dot debt"></span> Debt 22%</div>
                    <div className="legend-item"><span className="dot gold"></span> Gold 10%</div>
                </div>
            </div>

            {/* Health Check Alert */}
            <div className="health-alert-card">
                <div className="alert-header">
                    <AlertTriangle size={18} />
                    <span>Portfolio Health Check</span>
                </div>
                <p>You may have 34% overlap across funds</p>
                <button className="btn-xray" onClick={() => navigate('/overlap-analysis')}>
                    View X-Ray Report <ArrowUpRight size={16} />
                </button>
            </div>

            {/* Risk Analysis Section */}
            <div className="risk-analysis-section">
                {/* Card 1: Portfolio Risk */}
                <div className="risk-card glass-panel">
                    <div className="risk-header">
                        <h4>Portfolio Risk</h4>
                        <span className="info-icon">ⓘ</span>
                    </div>
                    <div className="risk-content">
                        <Riskometer level={4} />
                        <p className="risk-desc">Your portfolio is <strong>High Risk</strong> due to 68% Equity exposure.</p>
                    </div>
                </div>

                {/* Card 2: Personal Risk Profile */}
                <div className="risk-card glass-panel">
                    <div className="risk-header">
                        <h4>My Risk Profile</h4>
                        <button className="retake-quiz-btn">Retake Quiz</button>
                    </div>
                    <div className="risk-content">
                        <Riskometer level={2} />
                        <p className="risk-desc">Your profile is <strong>Moderate</strong> based on your assessment.</p>
                    </div>
                </div>
            </div>

            {/* Holdings List */}
            <div className="holdings-section">
                <div className="holdings-header">
                    <h3>Holdings (5)</h3>
                    <button className="filter-btn"><Filter size={16} /> Filter</button>
                </div>

                <div className="holding-card glass-panel">
                    <div className="holding-top">
                        <span className="fund-name">Axis Bluechip - Direct</span>
                    </div>
                    <div className="holding-mid">
                        <span>₹3,24,500</span>
                        <span className="units">2,456 units</span>
                    </div>
                    <div className="holding-bottom">
                        <div className="returns-col">
                            <span className="label">Returns</span>
                            <span className="val-green">+12.4%</span>
                        </div>
                        <div className="returns-col align-right">
                            <span className="label">Today</span>
                            <span className="val-green">+0.65%</span>
                        </div>
                    </div>
                </div>

                <div className="holding-card glass-panel">
                    <div className="holding-top">
                        <span className="fund-name">HDFC Hybrid Equity - Direct</span>
                    </div>
                    <div className="holding-mid">
                        <span>₹2,15,340</span>
                        <span className="units">8,934 units</span>
                    </div>
                    <div className="holding-bottom">
                        <div className="returns-col">
                            <span className="label">Returns</span>
                            <span className="val-green">+8.2%</span>
                        </div>
                        <div className="returns-col align-right">
                            <span className="label">Today</span>
                            <span className="val-green">+0.52%</span>
                        </div>
                    </div>
                </div>

                <div className="show-more">Show 3 more funds ▼</div>
            </div>
        </div>
    );
};

export default Portfolio;
