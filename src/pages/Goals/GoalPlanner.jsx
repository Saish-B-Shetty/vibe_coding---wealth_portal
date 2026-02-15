import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Target, TrendingUp } from 'lucide-react';
import './GoalPlanner.css';

const GoalPlanner = () => {
    const navigate = useNavigate();
    const [targetAmount, setTargetAmount] = useState(3000000);
    const [years, setYears] = useState(12);
    const [inflationRate, setInflationRate] = useState(6); // Default 6%

    // Calculate future value: FV = PV * (1 + r)^n
    const inflationDecimal = inflationRate / 100;
    const futureValue = targetAmount * Math.pow(1 + inflationDecimal, years);

    // Simple SIP calculation (assuming 12% returns)
    // PMT = FV * r / ((1 + r)^n - 1) * (1/(1+r)) - roughly
    const investmentRate = 0.12 / 12;
    const months = years * 12;
    const sipAmount = (futureValue * investmentRate) / (Math.pow(1 + investmentRate, months) - 1);

    return (
        <div className="goal-container">
            <div className="screen-header-goal">
                <button className="back-btn" onClick={() => navigate('/dashboard')}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <span>Set Your First Goal</span>
            </div>

            <div className="input-group">
                <label>🎓 Goal Name</label>
                <input type="text" className="input-field" defaultValue="Daughter's MBA" />
            </div>

            <div className="input-group">
                <label>💰 Target Amount (today's cost)</label>
                <input
                    type="text"
                    className="input-field"
                    value={`₹ ${targetAmount.toLocaleString('en-IN')}`}
                    onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        setTargetAmount(Number(val));
                    }}
                />
            </div>

            <div className="input-group">
                <label>📅 Years to Goal: <span className="highlight-text">{years} years</span></label>
                <input
                    type="range"
                    className="slider"
                    min="1"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                />
            </div>

            <div className="input-group">
                <label>📈 Inflation Rate: <span className="highlight-text">{inflationRate}%</span></label>
                <input
                    type="range"
                    className="slider"
                    min="1"
                    max="15"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                />
                <div className="inflation-reference">
                    <p className="ref-title">Typical Inflation Rates:</p>
                    <ul>
                        <li><span>🎓 Education:</span> 11% – 12%</li>
                        <li><span>🏥 Medical:</span> 11.5% – 14%</li>
                        <li><span>✈️ Travel:</span> 8% – 10%</li>
                        <li><span>🏠 Real Estate:</span> 6% – 8%</li>
                    </ul>
                </div>
            </div>

            {/* Projection Card */}
            <div className="projection-card">
                <div className="projection-header">
                    <Target size={20} />
                    <span>Real-Cost Projection</span>
                </div>
                <p className="inflation-note">With {inflationRate}% inflation, you'll need:</p>

                <div className="projection-amount">
                    ₹{Math.round(futureValue).toLocaleString('en-IN')}
                </div>
                <div className="projection-year">in {new Date().getFullYear() + years}</div>

                <div className="sip-breakdown">
                    <div className="sip-row">
                        <span className="sip-label">Monthly SIP Required</span>
                        <span className="sip-value">₹{Math.round(sipAmount).toLocaleString('en-IN')}</span>
                    </div>

                    <div className="confidence-section">
                        <span>Confidence: 78%</span>
                        <div className="confidence-dots">
                            <span className="dot filled"></span>
                            <span className="dot filled"></span>
                            <span className="dot filled"></span>
                            <span className="dot filled"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </div>

            <button className="btn-create-goal" onClick={() => navigate('/portfolio')}>
                Create Goal <TrendingUp size={18} />
            </button>
        </div>
    );
};

export default GoalPlanner;
