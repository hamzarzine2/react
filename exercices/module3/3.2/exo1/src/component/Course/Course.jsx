import Header from "component/header/header";
import Content from "component/content/content";
import Total from "component/total/Total";

const Course = ({course})=>{

    const total = course.parts.reduce((a,b)=>a + b.exercises,0);
    return(
        <>
        <Header key = {course.id} courseName={course.name}/>
        <Content table = {course.parts}/>
        <Total total={total}/>
        </>
    );
}

export default Course 