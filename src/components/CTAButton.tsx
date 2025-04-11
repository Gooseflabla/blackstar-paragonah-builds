
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const CTAButton = ({ children, className = '', href, onClick }: CTAButtonProps) => {
  const buttonContent = (
    <>
      <span>{children}</span>
      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium 
          bg-black text-white hover:bg-gray-800 transition-colors group ${className}`}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Button 
      onClick={onClick} 
      className={`group bg-black hover:bg-gray-800 text-white ${className}`}
    >
      {buttonContent}
    </Button>
  );
};

export default CTAButton;
