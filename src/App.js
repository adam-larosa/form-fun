import { useState } from 'react'
import TheForm from './TheForm'
import TheDisplay from './TheDisplay'

function App() {
	const [ names ] = useState( [ { name: 'baxter' } ] ) 
	return (
		<div>
			<TheForm />
			<TheDisplay names={ names } />
		</div>
	);
}

export default App;
