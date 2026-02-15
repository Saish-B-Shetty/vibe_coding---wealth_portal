import React from 'react';
import './Riskometer.css';

const Riskometer = ({ level }) => {
    // SEBI Risk Levels: 0=Low, 1=Low-Mod, 2=Mod, 3=Mod-High, 4=High, 5=Very High
    const levels = [
        { label: 'Low', color: '#22c55e' },
        { label: 'Low-Mod', color: '#84cc16' },
        { label: 'Moderate', color: '#eab308' },
        { label: 'Mod-High', color: '#f97316' },
        { label: 'High', color: '#ef4444' },
        { label: 'Very High', color: '#b91c1c' }
    ];

    const current = levels[level] || levels[2]; // Default to Moderate
    const rotation = -90 + (180 * (level / 5)); // Map 0-5 to -90deg to 90deg

    return (
        <div className="risk-widget">
            <div className="riskometer-arc">
                <div className="riskometer-needle" style={{ transform: `rotate(${rotation}deg)` }}></div>
            </div>
            <div className="risk-label" style={{ color: current.color }}>
                {current.label}
            </div>
        </div>
    );
};

export default Riskometer;
