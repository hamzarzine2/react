import { useState,useContext } from "react";
import { opinionContext } from "../../context/OpinionContext";
import Button from "./Button";

const Opinion  =({value})=>{
    console.log(value.id);
    const opContext = useContext(opinionContext)

    const addVote =()=>{
        opContext.addVote(value.id)
    }

    return (
        <>
            <p>Opinion{value.name} == {value.total} </p>
            <Button method={addVote}/>
        </>
    )
}

export default Opinion