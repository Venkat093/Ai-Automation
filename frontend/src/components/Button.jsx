import React from 'react';
import { colors, borderRadius } from '../constants/theme';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseStyles = {
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: 'none',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  const variants = {
    primary: {
      background: colors.accentPrimary,
      color: colors.bgPrimary,
      borderRadius: borderRadius.md,
    },
    secondary: {
      background: 'transparent',
      color: colors.textPrimary,
      border: `2px solid ${colors.borderPrimary}`,
      borderRadius: borderRadius.md,
    },
    ghost: {
      background: 'transparent',
      color: colors.textSecondary,
      border: 'none',
      borderRadius: borderRadius.sm,
    },
  };

  const sizes = {
    sm: { padding: '12px 24px', fontSize: '14px', minHeight: '44px' },
    md: { padding: '16px 32px', fontSize: '16px', minHeight: '52px' },
    lg: { padding: '18px 36px', fontSize: '18px', minHeight: '56px' },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-${variant} ${className}`}
      style={{
        ...baseStyles,
        ...variants[variant],
        ...sizes[size],
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;