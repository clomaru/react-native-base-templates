import * as React from 'react';
import { storiesOf, module } from '@storybook/react-native';
import TextBox from './index';

storiesOf('TextBox', module).add('TextBox', () => (
	<TextBox placeholder="default">default</TextBox>
));
