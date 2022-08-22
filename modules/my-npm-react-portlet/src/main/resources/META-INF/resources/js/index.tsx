import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IProps } from "./types";

export default function ({ elementId, data }: IProps) {
	ReactDOM.render(<App
		elementId={elementId}
		data={data}
	/>,
		document.getElementById(elementId)
	);
}