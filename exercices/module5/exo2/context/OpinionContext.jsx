import React ,{useState} from "react";
import uuid from 'react-uuid';

const opinionContext = React.createContext(null);

const OpinionProvider=(props)=>{
    const opinionBase =[
        {
            id : uuid(),
            name : "A",
            total : 0
        },
        {
            id : uuid(),
            name : "B",
            total : 0
        }
    ]
    const [opinionTable,setOpinion] = useState(opinionBase)
    

    const getAllOpinion = ()=>{
        return opinionTable
    }

    const addOpinion=(opinion) =>{
        setOpinion(opinionTable.concat(opinion))
    }

    const addVote =(id)=>{
        const opinionToUpdate = opinionTable.find((opinion) => opinion.id === id);
        if (opinionToUpdate) {
            opinionToUpdate.total += 1;
            setOpinion([...opinionTable]);
            console.log(opinionTable);
  }

    }

    return(
        <opinionContext.Provider value={{getAllOpinion,addOpinion,addVote}}>
            {props.children}
        </opinionContext.Provider>
    )
}

export {opinionContext,OpinionProvider}