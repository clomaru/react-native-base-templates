import * as React from "react";
import styled from "styled-components/native";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Heading from "../../atoms/Heading/index";
import Txt from "../../atoms/Txt/index";
import ListItem from "../../atoms/ListItem/index";
import TextBox from "../../atoms/TextBox/index";

interface Props {
  name?: string;
  user?: string;
  source?: string;
  onPress?: () => void;
}

const ListWithIcon: React.SFC<Props> = ({
  name,
  user,
  source,
  onPress,
  ...props
}) => (
  <Wrapper onPress={onPress}>
    <StyledListItem>
      <StyledImage source={{ url: source }} />
      <ListWithIconBody>
        <Heading type="h5">{name}</Heading>
        <Txt size={15}>{user}</Txt>
      </ListWithIconBody>
    </StyledListItem>
  </Wrapper>
);
export default ListWithIcon;

const Wrapper = styled(TouchableOpacity)`
  width: 350px;
  height: 100px;
  background: papayawhip;
  margin: 5px auto;
  border: 2px solid papayawhip;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
`;

const StyledListItem = styled(ListItem)`
  padding: 20px;
`;

const ListWithIconBody = styled.View`
  margin-left: 30px;
`;

interface StyledProps {
  source?: any;
}

const StyledImage = styledComponentsTS<StyledProps>(styledComponents(Image))`
	width: 40px;
	height: 40px;
`;
