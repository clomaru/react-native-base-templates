import * as React from "react";
import styled from "styled-components/native";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { View, Image } from "react-native";
import Txt from "../../atoms/Txt/index";
import Heading from "../../atoms/Heading/index";

interface Props {
  name?: string;
  user?: string;
  source?: string;
  star: number;
  url: string;
  description: string;
}

const Card: React.SFC<Props> = ({
  name,
  user,
  source,
  star,
  url,
  description,
  ...props
}) => (
  <Wrapper>
    <Heading type="h2">{name}</Heading>
    <UserInfo>
      <StyledImage source={{ url: source }} />
      <Txt>{user}</Txt>
    </UserInfo>
    <Txt>★: {star}</Txt>
    <Txt size={20}>{description}</Txt>
    <Txt />
    <Txt>url: {url}</Txt>
  </Wrapper>
);
export default Card;

const Wrapper = styled.View`
  width: 95%;
  height: 70%;
  background: papayawhip;
  margin: 0 auto;
  margin-top: 50px;
  padding: 15px;
  border: 2px solid papayawhip;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const UserInfo = styled.View`
  margin: 5px 0px;
  flex-direction: row;
`;

interface StyledProps {
  source?: any;
}

const StyledImage = styledComponentsTS<StyledProps>(styledComponents(Image))`
	margin-right: 5px;
	width: 25px;
	height: 25px;
	border-radius: 10;
`;
