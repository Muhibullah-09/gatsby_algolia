import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#091C29',
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
      <div className="flex items-center w-10/12  mx-auto py-3">
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl  font-serif text-white flex-1 cursor-pointer"
        >
            <div className='flex flex-row items-center' >
            <img src='https://cdn4.iconfinder.com/data/icons/business-finance-vol-12-2/512/10-512.png' style={{height:25}} />
            <h1 >
            {' '}{content.nav.logo}
            {/* <span className="h-3 w-3 bg-red-400 inline-block ml-2  rounded-full"></span> */}
          </h1>
            </div>
         
        </ScrollLink>

        <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="mr-4 cursor-pointer" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
