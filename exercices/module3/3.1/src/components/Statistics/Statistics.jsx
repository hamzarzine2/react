import Header from "components/Header/Header";
import Count from "components/Count/Count";
import Loading from "components/Loading/Loading";
import { useState } from "react";
const Statistics = ({ tableStats, positive, total }) => {
    const [Load,setLoad]=useState(true);
    setTimeout(()=>{setLoad(false)},3000)

  if (Load === true) {
    return (
      <>
        <Header text={"Statistics"} />
        <Loading />
      </>
    );
  }
  return (
    <>
      <Header text={"Statistics"} />
      <table>
        <tbody>
          {tableStats.map((value, i) => (
            <Count key={i} number={value.value} text={value.text} />
          ))}
          <Count number={total} text={"Total"} />
          <Count number={positive} text={"positive"} />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
