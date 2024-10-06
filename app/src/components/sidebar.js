import React, { useContext, useState } from 'react';
import {
  StaticQuery, graphql, Link, useStaticQuery,
} from 'gatsby';
import '../styles/sidebar.css';
import { Menu, X } from 'lucide-react';
import { BookmarkContext } from '../context/globalState';

const slugify = require('slugify');

export default ({ isOpen, toggleSidebar, siteMetadata }) => {
  const { readingList } = useContext(BookmarkContext);

  return (
    <StaticQuery
      query={graphql`
        query CategoryQuery {
          allCategoriesJson {
            edges {
              node {
                id
                name
                emoji
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className=" h-screen ">
          <div
            className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:flex
        fixed inset-y-0 left-0 z-30 w-80 bg-purple-100 text-purple-800 transition-transform duration-300 ease-in-out shadow-lg
        transition-transform duration-300 ease-in-out
        lg:relative lg:inset-y-auto
      `}
          >
            <div className="flex flex-col h-full w-full ">
              <div className="lg:hidden flex justify-between w-full items-center p-4">
                <h2 className="text-2xl font-bold align-middle mb-0">
                  Categories
                </h2>
                <button onClick={toggleSidebar}>
                  <X size={24} />
                </button>
              </div>
              <div className="overflow-y-scroll">
                <h2 className="text-2xl font-bold align-middle mb-0 px-3 pt-4 hidden lg:block">
                  Categories
                </h2>
                <ul className="menu w-full ml-0 p-0 lg:mt-3">
                  <li className="text-lg mb-2 md:hidden sm:hidden lg:block">
                    <Link
                      to="/readingList"
                      className="focus:!text-purple-800 active:!text-purple-800 active:!bg-transparent"
                    >
                      🔖 Reading List (
                      {readingList.bookIds.length}
                      )
                    </Link>
                  </li>
                  {data.allCategoriesJson.edges.map((x, index) => (
                    <li key={index} className="mb-2">
                      <Link
                        activeClassName="active-category"
                        to={`/${slugify(x.node.name)}`}
                        className=" focus:!text-purple-800  hover:bg-purple-200 hover:text-purple-900 active:!text-purple-800 rounded transition-colors duration-200 transition-colors active:!bg-transparent"
                      >
                        {x.node.emoji}
                        {' '}
                        {x.node.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};
