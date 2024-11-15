import React, { StrictMode } from 'react';

import { Main, TestSection, Footer } from '../../../widgets/index.js';

export default function BaseView() {
  return (
    <>
      <Main>
        <TestSection />
      </Main>
      <Footer />
    </>
  );
}
