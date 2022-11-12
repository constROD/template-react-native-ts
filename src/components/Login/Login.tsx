import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useUserStore(state => state.login);

  const handleLogin = () => {
    const response = login();

    if (!response) return navigate(ROUTES.HOME);
  };

  return (
    <View>
      <Text>This is LoginPage</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
