/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import $ from 'jquery';

import ContentPage from './components/ContentPage';
import WorkPage from './components/WorkPage';
import IdeasPage from './components/IdeasPage';
import ClientsPage from './components/ClientsPage';
import AboutPage from './components/AboutPage';
import CareersPage from './components/CareersPage';
import NewsPage from './components/NewsPage';
import MediaPage from './components/MediaPage';
import ContactPage from './components/ContactPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import PostTemplateOne from './components/PostTemplateOne';

import TestPage from './components/TestPage';

const router = new Router(on => {

  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/login', async () => <LoginPage />);
  on('/register', async () => <RegisterPage />);
  on('/work', async () => <WorkPage />);
  on('/ideas', async () => <IdeasPage />);
  on('/clients', async () => <ClientsPage />);
  on('/about', async () => <AboutPage />);
  on('/careers', async () => <CareersPage />);
  on('/contact', async () => <ContactPage />);
  on('/news', async () => <NewsPage />);
  
  on('/work/:id', async (req) => <PostTemplateOne />);


  on('/', async () => <TestPage />);

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );

});

export default router;
