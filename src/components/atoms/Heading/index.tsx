import * as React from 'react';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { Text } from 'react-native';
import { containPresenter } from '../../utils/HoC';

enum TagSize {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6
}

interface Props {
	children?: React.ReactNode;
	tagSizeTypes?: TagSize;
	presenter?: any;
}

const HeadingPresenter: React.SFC<Props> = ({
	children,
	tagSizeTypes,
	...props
}) => (
	<Wrapper types={tagSizeTypes} {...props}>
		{children}
	</Wrapper>
);

const HeadingContainer: React.SFC<Props> = ({
	presenter,
	tagSizeTypes = TagSize.h2,
	children,
	...props
}) => {
	return presenter({ tagSizeTypes, children, ...props });
};

const Heading = containPresenter(HeadingContainer, HeadingPresenter);
export default Heading;

interface StyledProps {
	types?: TagSize;
}

const Wrapper = styledComponentsTS<StyledProps>(styledComponents(Text))`
  font-size: ${p => tagSize[p.types]};
`;

const tagSize = {
	h1: '40px',
	h2: '36px',
	h3: '32px',
	h4: '28px',
	h5: '24px',
	h6: '20px'
};
