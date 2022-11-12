import AboutPage from 'pages/About';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import NotFoundPage from 'pages/NotFound';
import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';
import PageLayout from 'shared/components/Layouts/PageLayout';
import RootLayout from 'shared/components/Layouts/RootLayout';
import { ROUTES } from 'shared/constants/Routes';

const App = () => {
  return (
    <NativeRouter>
      <RootLayout>
        <Routes>
          <Route element={<AuthenticatedRoute />}>
            <Route element={<PageLayout />}>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            </Route>
          </Route>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </NativeRouter>
  );
};

export default App;
