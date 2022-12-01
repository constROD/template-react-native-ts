import Footer from '../Partials/Footer';
import Navbar from '../Partials/Navbar';

import { Button } from '@rneui/themed';
import React, { Suspense } from 'react';
import { Text, View } from 'react-native';
import { Outlet } from 'react-router-native';
import { useUserStore } from 'shared/store';

const PageLayout: React.FC = () => {
  const logout = useUserStore(state => state.logout);

  const handleLogout = () => logout();

  return (
    <View>
      <Navbar />
      <Suspense fallback={<Text>Loading...</Text>}>
        <Outlet />
      </Suspense>
      <Footer />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default PageLayout;
