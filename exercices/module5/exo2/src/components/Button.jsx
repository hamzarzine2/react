const Button  = ({method}) =>{
    console.log(method);
    return (
        <>
            <input type="button" value="Vote" onClick={() => method()}/>
        </>
    )
}

export default Button