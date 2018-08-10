import * as React from "react";
import styled from "styled-components/native";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { Text } from "react-native";

enum TagSize {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6"
}

interface Props {
  children?: React.ReactNode;
  tagSizeTypes?: TagSize;
}

const Heading: React.SFC<Props> = ({ children, tagSizeTypes, ...props }) => (
  <Wrapper type={tagSizeTypes} {...props}>
    {children}
  </Wrapper>
);

export default Heading;

interface StyledProps {
  type?: TagSize;
}

const Wrapper = styledComponentsTS<StyledProps>(styledComponents(Text))`
	font-size: ${p => tagSize[p.type]};
`;

const tagSize = {
  h1: "40px",
  h2: "36px",
  h3: "32px",
  h4: "28px",
  h5: "24px",
  h6: "20px"
};
