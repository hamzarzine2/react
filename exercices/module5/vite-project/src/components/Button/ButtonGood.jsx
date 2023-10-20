import { useContext } from "react"
import { LikeContext } from "../../../context/likeContext"

export const ButtonGood =()=>{
    const likeContext = useContext(LikeContext);

    return(
        <>
        <input type="button" value="like" onClick={likeContext.addGood} />
        <p>value = {likeContext.countGood}</p>
        </>
    )
}