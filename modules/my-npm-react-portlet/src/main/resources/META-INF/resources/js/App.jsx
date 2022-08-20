import React from 'react';
import ClayLink from '@clayui/link';

const App = () => {
	return (
		<div className="row">
			<ClayLink href="#link-styles" className="text-dark px-2">one(2)</ClayLink>
			<ClayLink href="#link-styles" className="text-dark px-2">two(1)</ClayLink>
			<ClayLink href="#link-styles" className="text-dark px-2">three(1)</ClayLink>
			<ClayLink href="#link-styles" className="text-dark px-2">four(1)</ClayLink>
		</div>
	)
}

export default App;