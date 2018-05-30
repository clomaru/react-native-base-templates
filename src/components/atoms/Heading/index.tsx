import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

interface Props {
	className: string;
	children: string;
	type: number;
}

export const HeadingPresenter: React.SFC<Props> = ({
	className,
	children,
	type,
	...props
}) => (
	<Wrapper className={className} type={type} {...props}>
		{children}
	</Wrapper>
);

export const HeadingContainer: React.SFC<Props> = ({ presenter, ...props }) => {
	return presenter({ ...props });
};

const Heading: React.SFC<Props> = props => (
	<HeadingContainer
		presenter={presenterProps => <HeadingPresenter {...presenterProps} />}
		{...props}
	/>
);

export default Heading;

const Wrapper = styled.Text`
	font-size: ${p => tagSize[p.type]};
`;

const tagSize = {
	h1: '40px',
	h2: '36px',
	h3: '32px',
	h4: '28px',
	h5: '24px',
	h6: '20px'
};
