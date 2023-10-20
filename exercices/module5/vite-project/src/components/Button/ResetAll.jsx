import { useContext } from "react"
import { LikeContext } from "../../../context/likeContext"

export const ResetALL =()=>{
    const likeContext = useContext(LikeContext);

    return(
        <>
        <input type="button" value="ResetALL" onClick={likeContext.resetAll} />
        </>
    )
}