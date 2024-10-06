import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BookFeed from '../components/feed';

function myFunction(setMaximumBooksToShow, maximumBooksToShow) {
  if (
    document.documentElement.clientHeight
      + document.documentElement.scrollTop
    >= document.documentElement.scrollHeight
  ) {
    setMaximumBooksToShow(maximumBooksToShow + 12);
  }
}

export default ({ data }) => {
  const [maximumBooksToShow, setMaximumBooksToShow] = useState(12);

  useEffect(() => {
    window.document.onscroll = () => myFunction(setMaximumBooksToShow, maximumBooksToShow);
  });

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto py-3 px-6 ">
          <BookFeed data={data} limit={maximumBooksToShow} />
        </main>
      </div>
      {/* <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
        </div>
        <div className="col-span-9">
          <BookFeed data={data} limit={maximumBooksToShow} />
        </div>
      </div> */}
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allBooksJson(sort: { fields: [rating], order: DESC }) {
      edges {
        node {
          id
          title
          url
          rating
          author
          year
          category
          description
          image_url
          amazon_url
        }
      }
    }
  }
`;
