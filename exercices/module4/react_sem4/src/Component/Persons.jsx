
const persons = (props) => {
    return (
        <div>
            <ul>
                {props.persons.map((person,i) => <li key={i}>{person.name + '   ' + person.number}</li>)}
            </ul>
        </div>
    )
}

export default persons