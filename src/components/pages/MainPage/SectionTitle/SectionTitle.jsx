import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, sectionName }) => {
  return (
    <h2 className={`section-title ${sectionName}__title`}>
      {title}
    </h2>
  );
};

export default SectionTitle;
