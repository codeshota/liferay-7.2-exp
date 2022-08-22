import React, { FC } from "react";
import ClayLink from "@clayui/link";
import { IProps } from "./index";

const App: FC<IProps> = (props: IProps) => {
	console.log(props);
	return (
		<div className="row">
			<ClayLink href="#link-styles" className="text-dark px-2">one(4)</ClayLink>
			<ClayLink href="#link-styles" className="text-dark px-2">two(2)</ClayLink>
			<ClayLink href="#link-styles" className="text-dark px-2">three(3)</ClayLink>
			<ClayLink href="#link-styles" className="text-dark px-2">four(1)</ClayLink>
		</div>
	)
}

export default App;