import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  };
  
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="https://cdn.poehali.dev/files/483e56cc-6903-4eb5-b598-69f37329fdc6.jpg" 
        alt="Логотип туристического клуба 'Солянка'" 
        className={`${dimensions[size]} rounded-full`}
      />
    </Link>
  );
};

export default Logo;
