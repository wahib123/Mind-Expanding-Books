/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from './header';
import './layout.css';
import Sidebar from './sidebar';

import {
  Menu, X, Book, Search,
} from 'lucide-react';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-purple-50 text-[#333333] ">
      <aside className="lg:w-80 flex flex-col overflow-scroll overflow-x-hidden no-scrollbar">
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          siteMetadata={data.site.siteMetadata.title}
        />
      </aside>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="flex-1 flex flex-col overflow-hidden no-scrollbar">
        <header className="bg-white shadow-sm hidden lg:block">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-4 flex justify-between items-center">
            <div className="flex items-center jus">
              <Book className="h-8 w-8 text-purple-900" />
              <h4
                id="main-title"
                className="text-2xl font-bold mb-0 md:hidden sm:hidden lg:block ml-2 w-full text-purple-900"
              >
                {data.site.siteMetadata.title}
              </h4>
            </div>
            {/* <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">Search books</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Search books"
                    type="search"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </header>
        {' '}
        {/* <div className="navbar">
        <Link
          to="/"
          style={{
            textDecorationColor: "none",
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
      </div> */}
        <div className="navbar lg:hidden bg-base-100  border-b border-[#a30da3]">
          <div className="flex-none lg:hidden ">
            <button onClick={toggleSidebar} className="p-4">
              <Menu size={24} />
              {/* {siteData.site.siteMetadata.title} */}
            </button>
          </div>
          <div className="flex-1 ">
            <h4
              className="text-2xl mb-0 font-bold text-purple-900"
              id="main-title "
            >
              <Link
                to="/"
                style={{
                  textDecorationColor: 'none',
                }}
              >
                {data.site.siteMetadata.title}
              </Link>
            </h4>
          </div>
        </div>
        {/* <header className="bg-[#FAFAFA] border-b border-[#D4AF37] p-4 ">
          <h4
            className="text-2xl font-bold text-[#1E3A8A]"
            id="main-title"
            style={{ margin: 16 }}
          >

          </h4>
        </header> */}
        <h4 id="main-title" className="m-0" />
        {/* <main>{children}</main> */}
        {children}
        <footer className="footer-text">
          ©
          {' '}
          {new Date().getFullYear()}
          , Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
