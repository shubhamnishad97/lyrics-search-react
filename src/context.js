import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component{
	state = {
		track_list: [
			{ track: { track_name: 'yo yo' } },
			{ track: { track_name: 'sonu nigam' } }
		],
		heading: 'Top 10 Tracks'
	} 

	render() {
		return (
			<Context.Provider>
			 {this.props.children}
			</Context.Provider>
			);
	}
}

export const Consumer = Context.Consumer;