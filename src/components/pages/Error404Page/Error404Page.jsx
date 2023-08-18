import React from 'react';
import './Error404Page.css';
import TextContent from './TextContent/TextContent';
import GoBackLink from './GoBackLink/GoBackLink';

const Error404Page = () => (
  <main className='main'>
    <section className='error-page'>
      <TextContent />
      <GoBackLink />
    </section>
  </main>
);

export default Error404Page;
