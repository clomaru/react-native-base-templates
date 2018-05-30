import * as React from 'react';
import Heading from './index.js';

export default stories =>
	stories.add('デフォルト', () => <Heading type="h2">見出し</Heading>);
