import Header from "components/Header/Header";
import Count from "components/Count/Count";
const Statistics = ({ tableStats, positive, total }) => {
  console.log(tableStats);

  if (total === 0) {
    return (
      <>
        <Header text={"Statistics"} />
        <p>No feedback given</p>
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
