import React from 'react';

const AsyncAbout = React.lazy(() => import('modules/about'));

const AboutPage: React.FC = () => {
  return <AsyncAbout />;
};

export default AboutPage;
