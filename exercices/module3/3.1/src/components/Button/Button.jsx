const Button=({table})=>{
    const handleClick=()=>{
        const valueNew=table.value+1;
        table.method(valueNew)
    }

    return(
        <button onClick={handleClick}>{table.text}</button>
    )
}

export default Button;