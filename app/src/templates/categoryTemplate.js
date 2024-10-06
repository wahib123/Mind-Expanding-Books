import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SideBar from '../components/sidebar';
import CategoryDescription from '../components/categorydescription';
import BookFeed from '../components/feed';

const basicTemplate = (props) => {
  const { pageContext } = props;
  const { categoryName, data, image } = pageContext;

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto py-3 px-6 no-scrollbar">
          <CategoryDescription
            categoryName={categoryName}
            categoryImage={image}
          />
          <BookFeed data={data} categoryName={categoryName} />
        </main>
      </div>
      {/* <div className="container">
        <div className="grid grid-cols-2">
          <div className="col-span-2">
            <SideBar />

            <div className="col-span-10">
              <CategoryDescription
                categoryName={categoryName}
                categoryImage={image}
              />
              <BookFeed data={data} categoryName={categoryName} />
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};
export default basicTemplate;
