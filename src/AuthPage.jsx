import React from 'react';
import { ParticleBackground } from './ParticleBackground';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { BrandingSide } from './BrandingSide';
import './AuthPage.css';

export const AuthPage = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);

  return (
    <div className="auth-page">
      <ParticleBackground />
      <BrandingSide />
      <div className="auth-container">
        <div className="glow-ring"></div>
        <div className="auth-toggle">
          <button
            className={`toggle-btn ${isSignIn ? 'active' : ''}`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`toggle-btn ${!isSignIn ? 'active' : ''}`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
          <div
            className="sliding-indicator"
            style={{ transform: `translateX(${isSignIn ? '0' : '100%'})` }}
          ></div>
        </div>
        {isSignIn ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};
