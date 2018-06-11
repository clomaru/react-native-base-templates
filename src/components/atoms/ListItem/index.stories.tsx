import * as React from 'react';
import { storiesOf, module } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ListItem from './index.js';

storiesOf('ListItem', module).add('default', () => (
	<ListItem>default</ListItem>
));
