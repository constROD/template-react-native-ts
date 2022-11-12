import React from 'react';
import { View } from 'react-native';

const RootLayout: React.FC<{ children: any }> = ({ children }) => {
  return <View>{children}</View>;
};

export default RootLayout;
