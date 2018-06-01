import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import Welcome from './Welcome';

// import Heading from '../../src/components/atoms/Heading/index.tsx';
import Button from '../../lib/components/atoms/Button/index';
import Heading from '../../lib/components/atoms/Heading/index';

storiesOf('Welcome', module).add('to Storybook', () => (
	<Welcome showApp={linkTo('Button')} />
));

storiesOf('Heading', module)
	.add('h1', () => <Heading type="h1">見出し</Heading>)
	.add('h2', () => <Heading type="h2">見出し</Heading>)
	.add('h3', () => <Heading type="h3">見出し</Heading>);

storiesOf('Button', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('with text', () => (
		<Button onPress={action('clicked-text')}>
			<Text>Hello Button</Text>
		</Button>
	))
	.add('with some emoji', () => (
		<Button onPress={action('clicked-emoji')}>
			<Text>😀 😎 👍 💯</Text>
		</Button>
	));
