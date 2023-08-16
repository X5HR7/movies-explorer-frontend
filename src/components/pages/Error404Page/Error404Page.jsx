import React from 'react';
import './Error404Page.css';
import TextContent from './TextContent/TextContent';
import GoBackLink from './GoBackLink/GoBackLink';

const Error404Page = () => (
  <div className='error-page'>
    <TextContent />
    <GoBackLink />
  </div>
);

export default Error404Page;
