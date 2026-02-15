import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, DollarSign, Flame } from 'lucide-react';
import './Notifications.css';

const Notifications = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    const notifications = [
        {
            id: 1,
            type: 'manager',
            icon: User,
            title: 'Fund Manager Change',
            body: 'HDFC Flexi Cap Fund\nPrashant Jain → Roshi Jain\nRisk: 🟡 Medium',
            time: '2 hours ago',
            action: 'View Details',
            path: '/manager-change',
            category: 'Portfolio',
            iconColor: '#3b82f6'
        },
        {
            id: 2,
            type: 'tax',
            icon: DollarSign,
            title: 'Tax Harvesting',
            body: 'Harvest ₹30K more LTCG before March 31\nPotential saving: ₹3,750',
            time: '1 day ago',
            action: 'Take Action',
            path: '/tax-harvesting',
            category: 'Opportunities',
            iconColor: '#10b981',
            primaryAction: true
        },
        {
            id: 3,
            type: 'hype',
            icon: Flame,
            title: 'Hype Alert',
            body: 'Infrastructure funds seeing ↑450% inflows\nWait 2-4 weeks before investing',
            time: '3 days ago',
            action: 'Learn More',
            path: '/fund-details', // Linking to fund details which has the alert
            category: 'Opportunities',
            iconColor: '#f59e0b'
        }
    ];

    const filteredNotifs = filter === 'All'
        ? notifications
        : notifications.filter(n => n.category === filter);

    return (
        <div className="notif-container">
            <div className="screen-header-notif">
                <button className="back-btn" onClick={() => navigate('/dashboard')}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <span>Notifications</span>
            </div>

            {/* Filters */}
            <div className="filter-tabs">
                {['All', 'Portfolio', 'Opportunities'].map(f => (
                    <button
                        key={f}
                        className={`filter-tab ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="notif-list">
                {filteredNotifs.map(notif => (
                    <div key={notif.id} className="notif-item glass-panel" onClick={() => navigate(notif.path)}>
                        <div className="notif-icon-wrapper" style={{ color: notif.iconColor, background: `${notif.iconColor}1a` }}>
                            <notif.icon size={20} />
                        </div>
                        <div className="notif-content">
                            <div className="notif-title">{notif.title}</div>
                            <div className="notif-body">
                                {notif.body.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                            <div className="notif-footer">
                                <span className="notif-time">{notif.time}</span>
                                <button className={`btn-notif-action ${notif.primaryAction ? 'primary' : ''}`}>
                                    {notif.action}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="load-more">
                <button className="btn-load">Load More Notifications</button>
            </div>
        </div>
    );
};

export default Notifications;
