import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import './OverlapAnalysis.css';

const OverlapAnalysis = () => {
    const navigate = useNavigate();

    return (
        <div className="overlap-container">
            <div className="screen-header-overlap">
                <button className="back-btn" onClick={() => navigate('/portfolio')}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <span>Stock-Overlap Analysis</span>
            </div>

            {/* Summary Card */}
            <div className="summary-card glass-panel">
                <h3>Portfolio Summary</h3>
                <ul>
                    <li>• 5 funds holding 127 stocks</li>
                    <li>• <span className="highlight-warning">34% overlap detected ⚠️</span></li>
                    <li>• Target: &lt;30% for diversification</li>
                </ul>
            </div>

            {/* Overlaop Visualization */}
            <div className="section-block">
                <h3>Top Overlapping Stocks</h3>

                <div className="stock-bar-group">
                    <div className="stock-bar-wrapper">
                        <div className="stock-bar" style={{ width: '90%', background: '#ef4444' }}>
                            <span>HDFC Bank 12.3%</span>
                        </div>
                        <span className="stock-info">(4 of 5 funds)</span>
                    </div>

                    <div className="stock-bar-wrapper">
                        <div className="stock-bar" style={{ width: '70%', background: '#f97316' }}>
                            <span>Reliance Ind 9.8%</span>
                        </div>
                        <span className="stock-info">(3 of 5 funds)</span>
                    </div>

                    <div className="stock-bar-wrapper">
                        <div className="stock-bar" style={{ width: '65%', background: '#a855f7' }}>
                            <span>Infosys 8.4%</span>
                        </div>
                        <span className="stock-info">(4 of 5 funds)</span>
                    </div>
                </div>
            </div>

            {/* Overlap Matrix (Simplified CSS Grid) */}
            <div className="section-block">
                <h3>Fund Overlap Matrix</h3>
                <div className="matrix-grid">
                    <div className="matrix-header"></div>
                    <div className="matrix-header">F1</div>
                    <div className="matrix-header">F2</div>
                    <div className="matrix-header">F3</div>

                    <div className="matrix-header">F1</div>
                    <div className="matrix-cell">-</div>
                    <div className="matrix-cell">45%</div>
                    <div className="matrix-cell">32%</div>

                    <div className="matrix-header">F2</div>
                    <div className="matrix-cell">45%</div>
                    <div className="matrix-cell">-</div>
                    <div className="matrix-cell">28%</div>

                    <div className="matrix-header">F3</div>
                    <div className="matrix-cell">32%</div>
                    <div className="matrix-cell">28%</div>
                    <div className="matrix-cell">-</div>
                </div>
            </div>

            {/* Cost Impact */}
            <div className="cost-impact-card">
                <h3>💰 Cost Impact</h3>
                <p>Current BER: 1.24%</p>
                <p>If optimized: 0.87%</p>
                <p className="savings-highlight">Annual savings: ₹3,145</p>
            </div>

            {/* Recommendations */}
            <div className="section-block">
                <h3>Recommendations</h3>
                <div className="recommendation-box glass-panel">
                    <ul className="rec-list">
                        <li>Consolidate Fund 1 & Fund 4 <span className="warning-badge">(67% overlap)</span></li>
                        <li>Replace Fund 2 with Index Fund <span className="success-badge">(0.35% lower cost)</span></li>
                    </ul>
                </div>
            </div>

            <div className="action-buttons-overlap">
                <button className="btn-accept-rec">Accept Recommendations</button>
                <div className="secondary-btns-overlap">
                    <button className="btn-sec">Keep As Is</button>
                    <button className="btn-sec">Remind Me Later</button>
                </div>
            </div>
        </div>
    );
};

export default OverlapAnalysis;
