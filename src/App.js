import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import Routes from './Routes';
import Page from './components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5F78ZNJ' });
  }, []);
  return (
    <Page>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Page>
  );
};

export default App;
