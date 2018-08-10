// import * as React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators, Dispatch } from "redux";
// import { Text, View } from "react-native";
// import DetailTemplate from "../../components/templates/DetailTemplate/index";
//
// // const mapStateToProps = (state: State) => ({});
//
// interface Props {
//   name?: string;
//   source?: string;
//   stargazers_count: number;
//   html_url: string;
//   description: string;
// }
//
// interface State {}
//
// // @(connect() as any)
// // TODO:componentにしよう
// export default class DetailPage extends React.Component<Props, State> {
//   constructor(props: any) {
//     super(props);
//     // TODO:この方法遅延があるからあんま良くなくね知らんけど
//     this.props.navigator.setTitle({
//       title: props.full_name
//     });
//   }
//   render() {
//     console.log("============");
//     console.log(this.props);
//     console.log("============");
//     return (
//       <DetailTemplate
//         name={this.props.name}
//         source={this.props.owner.avatar_url}
//         user={this.props.owner.login}
//         star={this.props.stargazers_count}
//         url={this.props.html_url}
//         description={this.props.description}
//         {...this.props}
//       />
//     );
//   }
// }

import * as React from "react";
import { Text, View } from "react-native";
import DetailTemplate from "../../components/templates/DetailTemplate/index";

interface Props {
  name?: string;
  owner?: {
    avatar_url: string;
    login: string;
  };
  source?: string;
  stargazers_count?: number;
  html_url?: string;
  description?: string;
  full_name?: string;
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
