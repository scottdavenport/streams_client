import React from 'react';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '1057287172207-c31pc1g1u0kbj4rirnkepp2tbnij704n.apps.googleusercontent.com',
				scope: 'email',
			});
		});
	}

	render() {
		return <div>Google Auth</div>;
	}
}

export default GoogleAuth;
