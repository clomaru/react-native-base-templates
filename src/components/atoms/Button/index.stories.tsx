import * as React from 'react';
import { storiesOf, module } from '@storybook/react-native';
import Button from './index';

storiesOf('Button', module).add('Button', () => <Button>default</Button>);
