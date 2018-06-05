import * as React from 'react';
import { storiesOf, module } from '@storybook/react-native';
import TodoList from './index.js';

const todos = ['1234', 'awbcd', 'あいうえお'];

storiesOf('TodoListContianer', module).add('default', () => (
	<TodoList todos={todos}>default</TodoList>
));
