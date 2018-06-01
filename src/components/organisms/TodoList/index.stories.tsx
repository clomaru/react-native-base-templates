import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TodoListContianer from './index.js';

storiesOf('TodoListContianer', module).add('default', () => (
	<TodoListContianer>default</TodoListContianer>
));
