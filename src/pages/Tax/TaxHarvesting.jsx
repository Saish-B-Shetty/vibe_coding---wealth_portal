import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import './TaxHarvesting.css';

const TaxHarvesting = () => {
    const navigate = useNavigate();

    return (
        <div className="tax-container">
            <div className="screen-header-tax">
                <button className="back-btn" onClick={() => navigate('/dashboard')}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <span>Tax Harvesting Alert</span>
            </div>

            <div className="tax-hero-section">
                <h3>💰 Opportunity to Save Taxes</h3>
            </div>

            {/* LTCG Limit Card */}
            <div className="limit-card glass-panel">
                <h3>LTCG Tax-Free Limit</h3>
                <div className="limit-track">
                    <div className="limit-fill" style={{ width: '76%' }}>76%</div>
                </div>
                <div className="limit-stats">
                    <span>Used: ₹95,000</span>
                    <span>Remaining: ₹30,000</span>
                </div>
                <div className="limit-deadline">
                    Deadline: March 31, 2026
                </div>
            </div>

            {/* Recommended Action */}
            <div className="recommendation-panel">
                <p className="rec-title">Recommended Action</p>
                <p className="rec-desc">Book <span className="highlight-val">₹30,000</span> more in gains before March 31 to maximize tax benefit.</p>
                <p className="potential-save">Potential Tax Saved: ₹3,750</p>
            </div>

            {/* Harvesting Heatmap */}
            <div className="heatmap-card">
                <div className="heatmap-header">
                    <h3>🔍 Harvesting Heatmap</h3>
                    <p>Best Units to Sell (FIFO):</p>
                </div>

                <div className="heatmap-item">
                    <div className="heatmap-label">Axis Bluechip</div>
                    <div className="heatmap-details">
                        <p>250 units • Bought Jan 2023</p>
                        <p>Gain: ₹4,625 • Tax: ₹0</p>
                        <p>STT: ₹462 (included)</p>
                        <div className="net-benefit">
                            Net benefit: ₹4,163 <Check size={16} />
                        </div>
                    </div>
                </div>

                <button className="btn-view-full">View Full Heatmap <ArrowRight size={16} /></button>
            </div>

            {/* Educational Note */}
            <div className="edu-note">
                <p className="edu-title">What happens after harvest?</p>
                <ul className="edu-list">
                    <li>• Units sold today</li>
                    <li>• Money reinvested in same fund</li>
                    <li>• Cost basis reset (future gains calculated from new price)</li>
                </ul>
            </div>

            {/* Actions */}
            <div className="tax-actions">
                <button className="btn-execute-harvest">Execute Harvest</button>
                <div className="secondary-tax-actions">
                    <button className="btn-sec-tax">Remind Me Later</button>
                    <button className="btn-sec-tax">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default TaxHarvesting;
