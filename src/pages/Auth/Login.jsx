import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Smartphone } from 'lucide-react';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="login-wrapper">
                {/* Left Side - Branding & Value Prop */}
                <div className="login-left">
                    <div className="brand-header">
                        <div className="logo-placeholder-sm">W</div>
                        <span className="brand-name">WealthApp</span>
                    </div>

                    <div className="left-content">
                        <h1 className="hero-title">Invest for your future,<br />today.</h1>
                        <p className="hero-subtitle">
                            Join 12.4L+ Indians trusting us with over ₹1,247 Cr+ in assets.
                            Zero commission. Unbiased advice.
                        </p>

                        <div className="trust-badges">
                            <div className="trust-item">
                                <span className="sc-icon">🔒</span>
                                <div>
                                    <p className="sc-title">Bank Grade Security</p>
                                    <p className="sc-desc">256-bit encryption</p>
                                </div>
                            </div>
                            <div className="trust-item">
                                <span className="sc-icon">📜</span>
                                <div>
                                    <p className="sc-title">SEBI Registered</p>
                                    <p className="sc-desc">RIA No. INA00001234</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="login-right">
                    <div className="login-form-container">
                        <div className="form-header">
                            <h2>Welcome Back</h2>
                            <p>Login to manage your portfolio</p>
                        </div>

                        <div className="auth-buttons">
                            <button className="btn-auth google-btn" onClick={() => navigate('/risk-assessment')}>
                                <span className="google-icon">G</span>
                                <span>Continue with Google</span>
                            </button>

                            <div className="divider">
                                <span>OR</span>
                            </div>

                            <button className="btn-auth" onClick={() => navigate('/risk-assessment')}>
                                <Smartphone size={20} />
                                <span>Continue with Mobile Number</span>
                            </button>

                            <button className="btn-auth" onClick={() => navigate('/risk-assessment')}>
                                <Mail size={20} />
                                <span>Continue with Email</span>
                            </button>
                        </div>

                        <p className="terms-text">
                            By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
