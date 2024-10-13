import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-blue-950 text-white p-4'>
      <div className='container mx-auto flex justify-center space-x-6'>
        <a
          href='https://twitter.com/ehvenga'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-green-500 transition-colors duration-200'
        >
          <Twitter size={24} />
        </a>
        <a
          href='https://linkedin.com/ehvenga'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-green-500 transition-colors duration-200'
        >
          <Linkedin size={24} />
        </a>
        <a
          href='https://github.com/ehvenga'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-green-500 transition-colors duration-200'
        >
          <Github size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
