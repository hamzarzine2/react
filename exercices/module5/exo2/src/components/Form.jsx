import { useState,useContext } from "react";
import { opinionContext } from "../../context/OpinionContext";
import Button from "./Button";
import uuid from 'react-uuid';

const Form  =()=>{
    const[input , setInput] = useState("")
    const opContext = useContext(opinionContext)
    const updateInput=(e)=>{
        console.log(e.target.value);
        setInput(e.target.value)
    }

    const addOne = (e)=>{
        e.preventDefault()
        console.log("on add");

        opContext.addOpinion({
            id : uuid(),
            name : input,
            total : 0
        })
    }

    return (
        <>
            <form onSubmit={addOne}>
                <input type="text" name="" id="" value={input} onChange={updateInput} />
                <button type="submit">add</button>
            </form>
        </>
    )
}

export default Form