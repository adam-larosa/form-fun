import { Children } from 'react'
export default function TheDisplay({ names }) {
    const nameElements = Children.toArray( names.map( ({ name }) => {
        return <div>{ name }</div>
    } ) )
    return (
        <div>
            { nameElements }
        </div>
    )
}