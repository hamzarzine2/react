import { LikeProvider } from "../context/likeContext"
import App from "./App"

const AppLoader =()=>{
    return(
        <LikeProvider >
            <App />
        </LikeProvider>
    )
}

export default AppLoader