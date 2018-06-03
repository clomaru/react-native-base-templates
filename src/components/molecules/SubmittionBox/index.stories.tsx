import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SubmittionBox from './index.js';

storiesOf('SubmittionBox', module).add('default', () => (
	<SubmittionBox>default</SubmittionBox>
));
