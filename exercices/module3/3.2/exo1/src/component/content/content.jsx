import Part from "component/part/Part";

const Content = ({table})=>{
    return (
        <>
          {table.map((value)=> <Part key={value.id} part={value}/>)}
        </>


    );
}

export default Content;