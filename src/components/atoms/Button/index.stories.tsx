import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from './index.js';

storiesOf('Button', module).add('デフォルト', () => (
	<Button>デフォルト</Button>
));
