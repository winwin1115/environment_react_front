import React from 'react';

import {
  TopView,
  EmossionView,
  ReductionView,
  CompanyListView,
  CompanyView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <TopView {...params} />,
  },
  {
    path: '/emossion',
    renderer: (params = {}) => <EmossionView {...params} />,
  },
  {
    path: '/reduction',
    renderer: (params = {}) => <ReductionView {...params} />,
  },
  {
    path: '/companylist',
    renderer: (params = {}) => <CompanyListView {...params} />,
  },
  {
    path: '/company/:id',
    renderer: (params = {}) => <CompanyView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
