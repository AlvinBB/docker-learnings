import React,{Component} from 'react';

export default class ApiLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiData: {}
		}
	}
	componentDidMount() {
		fetch('https://www.haizi.space/api/test')
			.then(res => {
				console.log('res', res);
				return res.json();
			})
			.then(result => {
				console.log('result', result);
				this.setState({apiData: result});
			});
	}
	render() {
		const msg = this.state.apiData.data || '';
		return (
			<a
	          className="App-link"
	          href="https://ractjs.org"
	          target="_blank"
	          rel="noopener noreferrer"
	        >
          		{'Learn React 1.0.2 - ' + msg}
        	</a>
        );
	}
}