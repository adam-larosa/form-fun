
import { useState } from 'react'

export default function TheForm({ addNameToArray }) {


    const [ name, setName ] = useState( '' )


    const handleName = e => {
        setName( e.target.value )
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newObj = { name: name }
        // the JavaScript object shorthand: const newObj = { name: name }

        addNameToArray( newObj )
        e.target.reset()
        setName( '' )
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            {/* every input that the user gives info to, 
                should have its own state */}
            <input onChange={ handleName } name="name" />
            {/* the input also needs, an onChange listener, that will
                allow the state to be changed */}



            <input type="submit" />
        </form>
    )
}