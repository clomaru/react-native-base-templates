import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TextBox from './index.js';

storiesOf('TextBox', module).add('default', () => (
	<TextBox placeholder="default">default</TextBox>
));
