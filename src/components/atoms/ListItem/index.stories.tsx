import * as React from 'react';
import { storiesOf, module } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ListItem from './index';

storiesOf('ListItem', module).add('ListItem', () => (
	<ListItem>default</ListItem>
));
