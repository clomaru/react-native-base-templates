import * as React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
	isSuccess: boolean;
	zipCode: number;
	address: string;
	error: string;
}

const PostResult: React.SFC<Props> = ({
	isSuccess,
	zipCode,
	address,
	error,
	...props
}) => {
	if (isSuccess) {
		return (
			<Wrapper {...props}>
				<Text>住所の取得に成功しました</Text>
				<Text>入力された値: {zipCode}</Text>
				<Text>取得された住所: {address}</Text>
			</Wrapper>
		);
	} else {
    return (
      <Wrapper {...props}>
        <Text>住所の取得に失敗しました</Text>
        <Text>入力された値: {zipCode}</Text>
        {error && <Text>エラーメッセージ:{error}</Text>}
      </Wrapper>;

    )
	}
};

export default PostResult;

const Wrapper = styled.View`
	padding: 14px;
	border-radius: 4px;
`;
