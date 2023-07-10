import asta from "asta.jpg"

const Header = (courseName) => {
    console.log(courseName);
    return(
        <>
        <h1>{courseName.name}</h1>
        <img src={asta}></img>
        </>
    );
}

export default Header;