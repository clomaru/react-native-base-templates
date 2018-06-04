import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TodoList from './index.js';

const todos = ['1234', 'awbcd', 'あいうえお'];

storiesOf('TodoListContianer', module).add('default', () => (
	<TodoList todos={todos}>default</TodoList>
));
