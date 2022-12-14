import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-native';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const AuthenticatedRoute: React.FC = () => {
  const location = useLocation();
  const { computed } = useUserStore(state => state);

  if (!computed.isSignedIn) return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;

  return <Outlet />;
};

export default AuthenticatedRoute;
