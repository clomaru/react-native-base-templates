import * as React from "react";
import { Text, View } from "react-native";
import DetailTemplate from "../../components/templates/DetailTemplate/index";

interface Props {
  name: string;
  owner:
    | {
        avatar_url: string;
        login: string;
      }
    | undefined;
  source: string | undefined;
  stargazers_count: number;
  html_url: string | undefined;
  description: string | undefined;
  full_name: string;
  navigator: any;
}

const DetailPage: React.SFC<Props> = ({
  name,
  owner,
  stargazers_count,
  html_url,
  description,
  full_name,
  navigator,
  ...props
}) => {
  navigator.setTitle({
    title: full_name
  });
  return (
    <DetailTemplate
      name={name}
      source={owner.avatar_url}
      user={owner.login}
      star={stargazers_count}
      url={html_url}
      description={description}
      {...props}
    />
  );
};

export default DetailPage;
