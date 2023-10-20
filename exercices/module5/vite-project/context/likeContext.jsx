import React,{ useState } from "react";

const LikeContext = React.createContext(null);

const LikeProvider = ({children}) => {
    const [countGood , setCountGood] = useState(0);
    const [countBad , setCountBad] = useState(0);
    const [okCount, setOkCount] = useState(0);


    const addGood = () => {
        setCountGood(countGood + 1);
    }
    const addBad = () => {
        setCountBad(countBad + 1);
    }

    const addOk = () => {
        setOkCount(okCount + 1);
    }

    const resetAll=(    )=>{
        setOkCount(0);
        setCountGood(0);
        setCountBad(0   );
    }

    return (
        <LikeContext.Provider value={{countGood, countBad, okCount, addGood, addBad, addOk,resetAll}}>
            {children}
        </LikeContext.Provider>
    )
};

export {LikeProvider, LikeContext};