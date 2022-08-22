import React, { FC } from "react";
import ClayLink from "@clayui/link";
import { IProps, ITag } from "./types";

const App: FC<IProps> = ({ data }: IProps) => {
	// console.log(data);
	return (
		<div className="row">
			{data.map((tag: ITag) => {
				return <ClayLink key={tag.name} href="#link-styles" className="text-dark px-2">
					{tag.name} ({tag.count})
				</ClayLink>
			})}
		</div>
	)
}

export default App;