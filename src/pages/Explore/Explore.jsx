import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Star, TrendingUp } from 'lucide-react';
import Riskometer from '../../components/common/Riskometer';
import './Explore.css';

const Explore = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['Equity', 'Debt', 'Hybrid', 'Solution Oriented', 'Others'];

    const funds = [
        {
            id: 1,
            name: 'Aditya Birla Sun Life Digital India Fund',
            category: 'Equity',
            rating: 5,
            return3y: '28.4%',
            risk: 5, // Very High
            nav: '145.32',
            minSip: '500'
        },
        {
            id: 2,
            name: 'ICICI Prudential Bluechip Fund',
            category: 'Equity',
            rating: 4,
            return3y: '15.2%',
            risk: 4, // High
            nav: '89.45',
            minSip: '100'
        },
        {
            id: 3,
            name: 'HDFC Short Term Debt Fund',
            category: 'Debt',
            rating: 4,
            return3y: '7.8%',
            risk: 2, // Moderate
            nav: '28.90',
            minSip: '1000'
        },
        {
            id: 4,
            name: 'SBI Equity Hybrid Fund',
            category: 'Hybrid',
            rating: 5,
            return3y: '18.5%',
            risk: 4, // High
            nav: '234.12',
            minSip: '500'
        },
        {
            id: 5,
            name: 'Kotak Gold Fund',
            category: 'Gold',
            rating: 3,
            return3y: '11.2%',
            risk: 3, // Mod-High
            nav: '18.45',
            minSip: '100'
        },
        {
            id: 6,
            name: 'Axis Liquid Fund',
            category: 'Debt',
            rating: 4,
            return3y: '5.2%',
            risk: 1, // Low-Mod
            nav: '1005.20',
            minSip: '1000'
        }
    ];

    const filteredFunds = activeCategory === 'All'
        ? funds
        : funds.filter(f => f.category === activeCategory);

    return (
        <div className="explore-container">
            <div className="explore-header">
                <h2>Explore Funds</h2>
                <div className="search-bar glass-panel">
                    <Search size={20} className="search-icon" />
                    <input type="text" placeholder="Search mutual funds, stocks..." />
                </div>
            </div>

            {/* New Categories Section */}
            <div className="categories-section">
                <div className="section-title-cat">
                    <h3>Categories</h3>
                    <p>Select fund categories for you to start investing</p>
                </div>

                <div className="categories-grid">
                    {['Equity', 'Debt', 'Hybrid', 'Solution Oriented', 'Others'].map(cat => (
                        <div
                            key={cat}
                            className={`category-banner glass-panel ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat === activeCategory ? 'All' : cat)}
                        >
                            <span>{cat}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-title">
                <h3>Top Rated Funds</h3>
                <button className="filter-btn-sm"><Filter size={14} /> Filter</button>
            </div>

            <div className="funds-list">
                {filteredFunds.map(fund => (
                    <div key={fund.id} className="fund-card glass-panel" onClick={() => navigate('/fund-details')}>
                        <div className="fund-info">
                            <div className="fund-badges">
                                <span className="badge-cat">{fund.category}</span>
                                <span className="badge-rating">{fund.rating} <Star size={10} fill="white" /></span>
                            </div>
                            <h4 className="fund-title">{fund.name}</h4>
                            <div className="fund-metrics">
                                <div>
                                    <span className="metric-label">3Y Return</span>
                                    <span className="metric-val positive">{fund.return3y}</span>
                                </div>
                                <div>
                                    <span className="metric-label">Min SIP</span>
                                    <span className="metric-val">₹{fund.minSip}</span>
                                </div>
                            </div>
                        </div>

                        <div className="fund-risk">
                            <Riskometer level={fund.risk} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="collections-section">
                <h3>Curated Collections</h3>
                <div className="collection-grid">
                    <div className="collection-card col-blue">
                        <TrendingUp size={24} />
                        <span>High Return</span>
                    </div>
                    <div className="collection-card col-green">
                        <span>Tax Savers</span>
                    </div>
                    <div className="collection-card col-purple">
                        <span>Top 50</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
