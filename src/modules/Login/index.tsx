import { Button, Input } from '@rneui/themed';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useUserStore } from 'shared/store';
import { type z } from 'zod';
import { useGetTodos } from './hooks';
import { loginSchema } from './validators';

const Login: React.FC = () => {
  const defaultValues: z.infer<typeof loginSchema> = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(defaultValues);

  const login = useUserStore(state => state.login);

  const handleLogin = () => {
    const isValid = loginSchema.safeParse(values);

    if (!isValid.success) {
      console.log({ error: isValid.error });
    } else {
      console.log({ data: isValid.data });
      login();
    }
  };

  const handleChange = (name: 'email' | 'password', value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const todosQuery = useGetTodos();

  if (todosQuery.isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View>
      <Text>This is LoginPage</Text>
      <Input
        placeholder="Email"
        value={values.email}
        onChangeText={value => handleChange('email', value)}
      />
      <Input
        placeholder="Password"
        value={values.password}
        onChangeText={value => handleChange('password', value)}
      />
      <Button title="Login" onPress={handleLogin} />

      <Text>{JSON.stringify(todosQuery.data, null, 2)}</Text>
    </View>
  );
};

export default Login;
