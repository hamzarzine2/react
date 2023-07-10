import Part from "component/part/Part";

const Content = (table)=>{
    console.log(table);
    return (
        <>
            <Part part={table.table[0].part} exercices={table.table[0].exercices} />
            <Part part={table.table[1].part} exercices={table.table[1].exercices} />
            <Part part={table.table[2].part} exercices={table.table[2].exercices} />
        </>


    );
}

export default Content;