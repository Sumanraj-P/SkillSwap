// src/components/auth/SignInForm.jsx
import React from "react";
import { motion } from "framer-motion";

export const SignInForm = () => {
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
        Welcome Back
      </motion.h2>

      <form>
        <motion.div
          className="input-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="neomorphic-input"
            placeholder="Enter your password"
            required
          />
        </motion.div>

        <motion.div
          className="remember-forgot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="remember">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#" className="forgot-link">
            Forgot password?
          </a>
        </motion.div>

        <motion.button
          type="submit"
          className="neomorphic-button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Sign In
        </motion.button>
      </form>

      <motion.div
        className="social-login"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <p>Or sign in with</p>
        <div className="social-icons">
          <button className="social-btn">
            <i className="fab fa-google"></i>
          </button>
          <button className="social-btn">
            <i className="fab fa-github"></i>
          </button>
          <button className="social-btn">
            <i className="fab fa-apple"></i>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
