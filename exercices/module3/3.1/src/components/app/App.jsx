import Button from "components/Button/Button";
import { useState } from "react";
import Header from "components/Header/Header";
import Statistics from "components/Statistics/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const table = [
    { text: "good", value: good, method: setGood },
    { text: "neutral", value: neutral, method: setNeutral },
    { text: "bad", value: bad, method: setBad },
  ];
  const tableStat=[{
    text : "good",value : good
  },{
    text : "neutral",value : neutral
  },{
    text : "bad",value : bad
  }]

  const total=good+bad+neutral;
  const positive= (100/total)*good ;

  return (
    <div>
      <Header text={"Give Feedback"} />
      {table.map((value, i) => (
        <Button key={i} table={value} />
      ))}
        <Statistics tableStats = {tableStat} total={total} positive={positive}/>


    </div>
  );
};

export default App;
