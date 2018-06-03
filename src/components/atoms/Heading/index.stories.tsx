import * as React from 'react';
import {View} from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Heading from './index.js';

storiesOf('Heading', module)
	.add('heading', () => (
		<View>
			<Heading type="h1">見出し1</Heading>
			<Heading type="h2">見出し2</Heading>
			<Heading type="h3">見出し3</Heading>
			<Heading type="h4">見出し4</Heading>
			<Heading type="h5">見出し5</Heading>
			<Heading type="h6">見出し6</Heading>
		</View>


	)
