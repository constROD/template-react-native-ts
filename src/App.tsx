import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageLayout, RootLayout } from 'modules/layouts';
import { PrivateRoute } from 'modules/partials';
import AboutPage from 'pages/about';
import HomePage from 'pages/homes';
import LoginPage from 'pages/login';
import NotFoundPage from 'pages/not-found';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { ROUTES } from 'shared/constants/commons';

const App = () => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retryDelay: 1250,
            staleTime: 1000 * 60 * 10,
          },
        },
      })
  );
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NativeRouter>
          <RootLayout>
            <Routes>
              <Route element={<PrivateRoute />}>
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
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
