import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export interface IProps {
	elementId: string;
	data: any;
}

export default function ({ elementId, data }: IProps) {
	ReactDOM.render(<App
		elementId={elementId}
		data={data}
	/>,
		document.getElementById(elementId)
	);
}