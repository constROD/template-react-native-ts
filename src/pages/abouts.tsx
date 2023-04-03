import React from 'react';

const AsyncAbout = React.lazy(() => import('modules/abouts'));

const AboutPage: React.FC = () => {
  return <AsyncAbout />;
};

export default AboutPage;
