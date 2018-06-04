import * as React from 'react';
import TodoAppPage from './components/pages/TodoAppPage';

export interface Props {}
export interface State {}

export default class App extends React.Component<Props, State> {
	public render(): JSX.Element {
		return <TodoAppPage />;
	}
}
