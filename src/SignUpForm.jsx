// src/components/auth/SignUpForm.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const SignUpForm = () => {
  return (
    <motion.div
      className="glass-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="form-title"
      >
        Create Account
      </motion.h2>
      
      <form>
        <motion.div 
          className="input-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="neomorphic-input"
            placeholder="Enter your full name"
            required
          />
        </motion.div>
        
        <motion.div 
          className="input-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="neomorphic-input"
            placeholder="Enter your email"
            required
          />
        </motion.div>
        
        <motion.div 
          className="input-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="neomorphic-input"
            placeholder="Create a password"
            required
          />
        </motion.div>
        
        <motion.div 
          className="input-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="neomorphic-input"
            placeholder="Confirm your password"
            required
          />
        </motion.div>
        
        <motion.div 
          className="terms"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
        </motion.div>
        
        <motion.button
          type="submit"
          className="neomorphic-button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Sign Up
        </motion.button>
      </form>
    </motion.div>
  );
};