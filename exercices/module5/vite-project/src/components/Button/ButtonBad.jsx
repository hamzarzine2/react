import { useContext } from "react"
import { LikeContext } from "../../../context/likeContext"

export const ButtonBad =()=>{
    const likeContext = useContext(LikeContext);

    return(
        <>
        <input type="button" value="BAD" onClick={likeContext.addBad} />
        <p>value = {likeContext.countBad}</p>
        </>
    )
}