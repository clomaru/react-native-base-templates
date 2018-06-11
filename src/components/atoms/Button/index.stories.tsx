import * as React from 'react';
import { storiesOf, module } from '@storybook/react-native';
import Button from './index.js';

storiesOf('Button', module).add('default', () => <Button>default</Button>);
