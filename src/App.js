import { useState } from 'react'
import TheForm from './TheForm'
import TheDisplay from './TheDisplay'

const anArrayOfNameObjects = [ 
	{ name: 'baxter' } 
]

function App() {
	
	const [ namesArray, setNames ] = useState( anArrayOfNameObjects )

	const addNameToArray = newObj => {
		// when changing state, you always change to "a copy of"
		const newArray = [ ...namesArray ]
		// modify the new copy
		newArray.push( newObj )
		//change state to the new copy
		setNames( newArray )

		// same as above but one-liner
		// setNames( [ ...namesArray, newObj ] )
	}

	const removeFromArray = doomedID => {
		setNames( namesArray.filter( nObj => nObj.id !== doomedID ))
	}

	const updateExistingObj = freshObj => {
		// tbc...  ;) 
	}
	
	return (
		<div>
			<TheForm addNameToArray={ addNameToArray } />
			<TheDisplay names={ namesArray } />
		</div>
	);
}

export default App;
