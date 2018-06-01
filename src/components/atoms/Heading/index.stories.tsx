import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Heading from './index.js';

// export default stories =>
// 	stories.add('デフォルト', () => <Heading type="h2">見出し</Heading>);

storiesOf('Heading', module)
	.add('h1', () => <Heading type="h1">見出し</Heading>)
	.add('h2', () => <Heading type="h2">見出し</Heading>)
	.add('h3', () => <Heading type="h3">見出し</Heading>);
