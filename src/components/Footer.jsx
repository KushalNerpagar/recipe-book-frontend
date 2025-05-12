import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='w-full h-[150px] flex flex-col justify-center items-center space-y-3 p-4'>
      <p className='text-black font-semibold mt-7 text-orange-400'>- Reach Out To Me Via -</p>
      <div className='flex space-x-5 mt-2'>
        <a href='https://github.com/kushalnerpagar/' target='_blank' rel='noopener noreferrer' className='text-gray-600 text-2xl hover:text-orange-400 transition duration-300'>
          <FaGithub aria-label='GitHub' />
        </a>
        <p>|</p>
        <a href='https://linkedin.com/in/kushalnerpagar/' target='_blank' rel='noopener noreferrer' className='text-gray-600 text-2xl hover:text-orange-400 transition duration-300'>
          <FaLinkedin aria-label='LinkedIn' />
        </a>
        <p>|</p>
        <a href='https://x.com/Kushal_Nerpagar' target='_blank' rel='noopener noreferrer' className='text-gray-600 text-2xl hover:text-orange-400 transition duration-300'>
          <FaXTwitter aria-label='Twitter' />
        </a>
        <p>|</p>
        <a href='https://www.instagram.com/_kushal_nerpagar_/?next=%2Faccounts%2Fpassword%2Freset%2F' target='_blank' rel='noopener noreferrer' className='text-gray-600 text-2xl hover:text-orange-400 transition duration-300'>
          <FaInstagram aria-label='Instagram' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
