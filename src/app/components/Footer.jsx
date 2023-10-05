import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#333f3a] border-l-transparent border-r-transparent text-emerald-100">
      <div className="container p-12 flex justify-between">
        <span><Link href={"/"} className='text-2xl md:text-3xl text-white font-semibold'>
          JOETECK
          <h3 className='text-[24px] font-light'>IT CONSULT</h3>
        </Link></span>
        <p className="text-emerald-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
