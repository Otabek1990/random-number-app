import React,{useState} from 'react';
import "./randomNumber.css";

const RandomNums = (props) => {
	const [num, setNum] = useState(0)
	const [min, setMin] = useState(0)
	const [max, setMax] = useState(0)

const takeAverage=(x,y)=>{

	const raqam=Math.floor(Math.random()*(y-x+1)+x)
	min!==0 && max!==0 && setNum(raqam)
}
const takeNum=()=>{
	min!==0  && max!==0 && takeAverage(Number(min),Number(max))

}
console.log(num)


  return (
    <div className="container">
    <h2>Random Number 
    between <span className="span">a</span> and <span className="span">b : </span>
<br/>
  <span className="span"><h3>Result - {num}</h3></span></h2>
    <button onClick={takeNum}>Take Num</button>
    <br/>
    <br/>
    <span className="span">a</span>
    <input 
    onChange={(e)=>setMin(e.target.value)}
    type="number"
    />
    <br/>
    <br/>
        <span className="span">b</span>

 <input 
    onChange={(e)=>setMax(e.target.value)}
    type="number"
    />
    

    </div>
  )
}

export default RandomNums;