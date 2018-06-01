import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import List from './index.js';

storiesOf('List', module).add('default', () => <List>default</List>);
