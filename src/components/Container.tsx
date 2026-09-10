import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1720px] w-full mx-auto px-6 sm:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
};
