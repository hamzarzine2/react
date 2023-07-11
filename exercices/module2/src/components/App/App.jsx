import Button from 'components/Button/Button'
import Display from 'components/Display/Display'
import { useState } from 'react'

const App = () => {
    const [ counter, changeCount ] = useState(JSON.parse(localStorage.getItem("counter")))
  
    const handleClick =(e)=> {
        const value = e.target.dataset.delta;      
          localStorage.setItem("counter", JSON.stringify(counter+parseInt(value)))
        changeCount(counter+parseInt(value));

    }
  
    return (
      <div>
        <Display counter={counter}/>
  
        <Button
          handleClick={handleClick}
          text='plus'
          delta={1}
        />
        <Button
          handleClick={handleClick}
          text='zero'
          delta={-counter}

        />     
        <Button
          handleClick={handleClick}
          text='minus'
          delta={-1}
        />           
      </div>
    )
  }

export default App