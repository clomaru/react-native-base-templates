import * as React from 'react';

export function containPresenter(Container: any, Presenter: any) {
	return (props: any) => (
		<Container
			presenter={(presenterProps: any) => <Presenter {...presenterProps} />}
			{...props}
		/>
	);
}
