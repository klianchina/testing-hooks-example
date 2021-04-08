import React from 'react';
import Counter from './examples/counter';

function App() {
	return (
		<div
			style={{
				flex: 1,
				padding: 20,
				border: '1px solid',
				display: 'grid',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Counter />
		</div>
	)
}

export default App;
