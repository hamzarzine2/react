import { useContext } from "react"
import { LikeContext } from "../../../context/likeContext"

export const ButtonOK =()=>{
    const likeContext = useContext(LikeContext);

    return(
        <>
        <input type="button" value="OK" onClick={likeContext.addOk} />
        <p>value = {likeContext.okCount}</p>
        </>
    )
}