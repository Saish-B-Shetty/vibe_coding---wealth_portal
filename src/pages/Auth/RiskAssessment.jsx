import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Shield } from 'lucide-react';
import './RiskAssessment.css';

const RiskAssessment = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});

    const handleAnswer = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
        if (step < 5) {
            setStep(step + 1);
        } else {
            // Finish quiz
            navigate('/dashboard');
        }
    };

    const renderStep1_Age = () => (
        <div className="risk-content">
            <h2 className="question-title">What is your age group?</h2>
            <div className="options-grid">
                {['Under 25', '25 - 35', '36 - 45', '46 - 60', 'Above 60'].map((opt) => (
                    <div key={opt} className="option-card" onClick={() => handleAnswer(1, opt)}>
                        <span className="option-main-text">{opt}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderStep2_Income = () => (
        <div className="risk-content">
            <h2 className="question-title">What is your annual income range?</h2>
            <div className="options-grid">
                {['Below ₹5 Lakhs', '₹5 - 10 Lakhs', '₹10 - 25 Lakhs', '₹25 Lakhs +'].map((opt) => (
                    <div key={opt} className="option-card" onClick={() => handleAnswer(2, opt)}>
                        <span className="option-main-text">{opt}</span>
                    </div>
                ))}
            </div>
            <div className="privacy-note">
                <Shield size={16} />
                <span>We do not sell your data. This is used only to recommend suitable plans.</span>
            </div>
        </div>
    );

    const renderStep3_Scenario1 = () => (
        <div className="risk-content">
            <h2 className="question-title">Your ₹1,00,000 investment is currently worth ₹90,000 (down 10%). You have two choices:</h2>
            <div className="options-list">
                <div className="option-card glass-panel" onClick={() => handleAnswer(3, 'A')}>
                    <div className="option-text-wrapper">
                        <span className="option-main-text">Choice A: Guaranteed</span>
                        <span className="option-subtext">Get back ₹95,000 for sure (accept 5% loss, exit now)</span>
                    </div>
                </div>
                <div className="option-card glass-panel" onClick={() => handleAnswer(3, 'B')}>
                    <div className="option-text-wrapper">
                        <span className="option-main-text">Choice B: 50% Chance</span>
                        <span className="option-subtext">Recover to ₹1,00,000 (break-even) OR Drop further to ₹85,000 (15% total loss)</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderStep4_Scenario2 = () => (
        <div className="risk-content">
            <h2 className="question-title">Your equity portfolio drops 30% during a market crash (₹1L → ₹70k). Experts say recovery may take 2-3 years. Action?</h2>
            <div className="options-list">
                {[
                    { id: 'A', text: 'Exit immediately', subtext: 'I can\'t handle this kind of loss' },
                    { id: 'B', text: 'Shift to safer options', subtext: 'Move to debt/FD' },
                    { id: 'C', text: 'Hold and wait', subtext: 'Stop SIPs until recovery begins' },
                    { id: 'D', text: 'Continue SIPs', subtext: 'Same amount, trust the long-term plan' },
                    { id: 'E', text: 'Increase SIP amount', subtext: 'Accumulate more units at lower prices' }
                ].map((opt) => (
                    <div key={opt.id} className="option-card glass-panel" onClick={() => handleAnswer(4, opt.id)}>
                        <div className="option-text-wrapper">
                            <span className="option-main-text">{opt.text}</span>
                            <span className="option-subtext">{opt.subtext}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderStep5_Scenario3 = () => (
        <div className="risk-content">
            {/* Headlines question */}
            <h2 className="question-title">Headlines say '₹50,000 Cr pulled out of equity'. Your portfolio is down 12%. Your instinctive thought?</h2>
            <div className="options-list">
                {[
                    { id: 'A', text: 'Everyone\'s exiting', subtext: 'I should too before it gets worse' },
                    { id: 'B', text: 'Reduce exposure', subtext: 'Maybe they know something I don\'t' },
                    { id: 'C', text: 'Review but stick to plan', subtext: 'Unless fundamentals changed' },
                    { id: 'D', text: 'Buying opportunity', subtext: 'If others are selling, I\'ll buy' },
                    { id: 'E', text: 'Headlines don\'t drive me', subtext: 'Check allocation, rebalance if needed' }
                ].map((opt) => (
                    <div key={opt.id} className="option-card glass-panel" onClick={() => handleAnswer(5, opt.id)}>
                        <div className="option-text-wrapper">
                            <span className="option-main-text">{opt.text}</span>
                            <span className="option-subtext">{opt.subtext}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="risk-container">
            <div className="risk-header">
                <button className="back-btn" onClick={() => step > 1 ? setStep(step - 1) : navigate('/login')}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <span className="step-indicator">Question {step} of 5</span>
            </div>

            {step === 1 && renderStep1_Age()}
            {step === 2 && renderStep2_Income()}
            {step === 3 && renderStep3_Scenario1()}
            {step === 4 && renderStep4_Scenario2()}
            {step === 5 && renderStep5_Scenario3()}

            <div className="progress-section">
                <div className="progress-dots">
                    {[1, 2, 3, 4, 5].map(s => (
                        <span key={s} className={`dot ${s <= step ? 'active' : ''}`}></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RiskAssessment;
