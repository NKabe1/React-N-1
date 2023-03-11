import {useState} from "react";


function App() {
const [firstNumber, setFirstNumber] = useState("");
const [secondNumber, setSecondNumber] = useState("");
const [operator, setOperator] = useState("sum");
const [result, setResult] = useState("");

const finalResult = (event) => {
  const {value} = event.target;
  if (value === "sum") {
    setOperator("sum");
    setResult(Number(firstNumber) + Number(secondNumber))
  } else if (value === "subtract") {
    setOperator("subtract");
    setResult(Number(firstNumber) - Number(secondNumber))
  } else if (value === "multiply") {
    setOperator("multiply");
    setResult(Number(firstNumber) * Number(secondNumber))
  } else if (value === "divide") {
    setOperator("divide");
    setResult(Number(firstNumber) / Number(secondNumber))
  } 
}

const inputChange = (event) => {
  const {name, value} = event.target;
  if (name === "first") {
    setFirstNumber(value);
    if (operator === "sum") {
      setResult(Number(value) + Number(secondNumber));
    } else if (operator === "subtract") {
      setResult(Number(value) - Number(secondNumber));
    } else if (operator === "multiply") {
      setResult(Number(value) * Number(secondNumber));
    } else if (operator === "divide") {
      setResult(Number(value) / Number(secondNumber));
    }
  }

  else if (name === "second") {
    setSecondNumber(value);
    if (operator === "sum") {
      setResult(Number(firstNumber) + Number(value));
    } else if (operator === "subtract") {
      setResult(Number(firstNumber) - Number(value));
    } else if (operator === "multiply") {
      setResult(Number(firstNumber) * Number(value));
    } else if (operator === "divide") {
      setResult(Number(firstNumber) / Number(value));
    }
  }

}


  return (
    <>
    <input type="number" placeholder="პირველი რიცხვი" name="first" onChange={inputChange}/>
    <select name="operator" onChange={finalResult}>
      <option value="sum">მიმატება</option>
      <option value="subtract">გამოკლება</option>
      <option value="multiply">გამრავლება</option>
      <option value="divide">გაყოფა</option>
    </select>
    <input type="number" placeholder="მეორე რიცხვი" name="second" onChange={inputChange}/>
    <div>შედეგი: {result}</div>
    </>
  );
}

export default App;
