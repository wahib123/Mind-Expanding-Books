/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';

import GlobalState from './src/context/globalState';
import './src/styles/global.css';

const wrapRootElement = ({ element }) => <GlobalState>{element}</GlobalState>;

export default wrapRootElement;
