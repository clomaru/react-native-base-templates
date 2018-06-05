import * as React from 'react';
import { storiesOf, module } from '@storybook/react-native';
import TextBox from './index.js';

storiesOf('TextBox', module).add('default', () => (
	<TextBox placeholder="default">default</TextBox>
));
