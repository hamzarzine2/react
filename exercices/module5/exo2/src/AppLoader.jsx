import { OpinionProvider } from "../context/OpinionContext"
import App from "./App"

const AppLoader  = ()=>{

    return(
        <OpinionProvider >
            <App/>
        </OpinionProvider>
            
    )
}

export default AppLoader