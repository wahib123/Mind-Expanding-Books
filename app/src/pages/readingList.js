import React, { useContext } from 'react';
import { Link } from 'gatsby';
import SideBar from '../components/sidebar';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bookcard from '../components/bookcard';
import { BookmarkContext } from '../context/globalState';

const ReadingList = () => {
  const { readingList } = useContext(BookmarkContext);

  return (
    <Layout>
      <SEO title="Reading list" />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto py-3 px-6 no-scrollbar">
          <h2>Your reading list</h2>
          <Link to="/">Go back to the homepage</Link>
          {readingList.bookIds.map((bookId) => <Bookcard book={readingList.books[bookId]} key={bookId} />)}
        </main>
      </div>
      {/* <div className="container">
        <div className="grid grid-cols-2">
          <div className="col-span-2">
            <SideBar />
          </div>
          <div className="col-span-10">
            <h2>Your reading list</h2>
            <Link to="/">Go back to the homepage</Link>
            {readingList.bookIds.map(bookId => {
              return <Bookcard book={readingList.books[bookId]} key={bookId} />
            })}
          </div>
        </div>
      </div> */}
      {/* <p>Reading List</p> */}
    </Layout>
  );
};

export default ReadingList;
