/**
 * @format
 */

import 'react-native';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import React from 'react';

it('renders correctly', () => {
  renderer.create(<App />);
});
