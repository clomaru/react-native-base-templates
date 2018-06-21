import * as React from 'react';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import ListItem from '../../atoms/ListItem/index';
import TextBox from '../../atoms/TextBox/index';

// TODO: itemは汎用性ないやろ
interface Props {
	children?: string;
	item?: any;
	onPress?: () => void;
}

const ListWithIcon: React.SFC<Props> = ({
	children,
	item,
	onPress,
	...props
}) => (
	<Wrapper onPress={onPress}>
		<StyledListItem>
			<Image
				style={{ width: 40, height: 40 }}
				source={{ url: item.owner.avatar_url }}
			/>
			oo{item.name}oo
			<Text>aa{item.owner.login}</Text>
		</StyledListItem>
	</Wrapper>
);
export default ListWithIcon;

const Wrapper = styled(TouchableOpacity)``;

const StyledListItem = styled(ListItem)`
	padding: 20px;
`;
