import * as React from 'react';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import Button from '../../atoms/Button/index';
import ListItem from '../../atoms/ListItem/index';
import { View } from 'react-native';

interface Props {
	children?: string;
	onPress?: any;
}

interface StyledProps {
	onPress?: any;
}

// TODO: FlatListにしたっら？
// TODO: {...props}がどんなときに必要なのかがわからん
export const List: React.SFC<Props> = ({ children, onPress, ...props }) => (
	<Wrapper {...props}>
		<StyleListItem>{children}</StyleListItem>
		<StyleButton onPress={onPress} {...props}>
			Delete
		</StyleButton>
	</Wrapper>
);

export default List;

const Wrapper = styled.View`
	flex-direction: row;
	background-color: #fff;
	padding: 10px;
	justify-content: space-between;
`;

const StyleListItem = styled(ListItem)``;

const StyleButton = styledComponentsTS<StyledProps>(styledComponents(Button))`
	background-color: #e65100;
`;
