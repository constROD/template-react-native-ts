import React, { ReactNode } from 'react';
import { View } from 'react-native';

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <View>{children}</View>;
};

export default RootLayout;
