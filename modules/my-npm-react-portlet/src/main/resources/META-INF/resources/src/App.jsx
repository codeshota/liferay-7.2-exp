import React from 'react';
import ClayLink from '@clayui/link';

const App = () => {
	return (
		<div className="row">
			<ClayLink href="#link-styles" className="text-dark px-2">One(3)</ClayLink>
			<ClayLink href="#link-styles" className="text-dark px-2">Two(1)</ClayLink>
		</div>
	)
}

export default App;