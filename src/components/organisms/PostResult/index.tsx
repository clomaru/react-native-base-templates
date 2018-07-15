import * as React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import {
	compose,
	branch,
	renderComponent,
	withState,
	withHandlers,
  mapProps
} from 'recompose';

interface Props {
	isSuccess: boolean;
	zipCode: number;
	address: string;
	error: string;
}

// これ...propsをつけると伝達できるぞ!!!!!!!!!!!!!!
const checkedFetched = ({isSuccess, ...props}) => isSuccess;

const PostResultSuccess: React.SFC<Props> = ({
	zipCode,
	address,
	...props
}) => (
	<Wrapper {...props}>
		<Text>住所の取得に成功しました</Text>
		<Text>入力された値: {zipCode}</Text>
		<Text>取得された住所: {address}</Text>
	</Wrapper>
);

const PostResultFailed: React.SFC<Props> = ({ zipCode, error, ...props }) => (
	<Wrapper {...props}>
		<Text>住所の取得に失敗しました</Text>
		<Text>入力された値: {zipCode}</Text>
		{error && <Text>エラーメッセージ:{error}</Text>}
	</Wrapper>
);

const PostResultContainer = compose(
  mapProps((props)=>{
    return {
      isSuccess: props.isSuccess,
      zipCode: props.zipCode,
      address: props.address,
      error: props.error
    }
  })
	branch(
    checkedFetched,
		component => component,
		renderComponent(PostResultFailed)
	)
);


const PostResult = PostResultContainer(PostResultSuccess);
export default PostResult;

const Wrapper = styled.View`
	padding: 14px;
	border-radius: 4px;
`;

// import * as React from 'react';
// import styled from 'styled-components/native';
// import { Text, TouchableOpacity } from 'react-native';
//
// interface Props {
// 	isSuccess: boolean;
// 	zipCode: number;
// 	address: string;
// 	error: string;
// }
//
// const PostResult: React.SFC<Props> = ({
// 	isSuccess,
// 	zipCode,
// 	address,
// 	error,
// 	...props
// }) => {
// 	if (isSuccess == true) {
// 		return (
// 			<Wrapper {...props}>
// 				<Text>住所の取得に成功しました</Text>
// 				<Text>入力された値: {zipCode}</Text>
// 				<Text>取得された住所: {address}</Text>
// 			</Wrapper>
// 		);
// 	} else if (isSuccess == false) {
// 		return (
// 			<Wrapper {...props}>
// 				<Text>住所の取得に失敗しました</Text>
// 				<Text>入力された値: {zipCode}</Text>
// 				{error && <Text>エラーメッセージ:{error}</Text>}
// 			</Wrapper>
// 		);
// 	} else {
// 		return <Wrapper {...props} />;
// 	}
// };
//
// export default PostResult;
//
// const Wrapper = styled.View`
// 	padding: 14px;
// 	border-radius: 4px;
// `;
