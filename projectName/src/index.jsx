import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './app/index.js';

import logSelfCheck from './shared/projectNameSelfCheck/index.js';

import BaseView from './pages/index.js';

logSelfCheck();

const rootElem = document.querySelector('#root');

if (!rootElem) {
  throw new Error('div with id="root" is not found!');
}

const root = createRoot(rootElem);

root.render(
  <StrictMode>
    <BaseView />
  </StrictMode>,
);
