import React from 'react';
function App() {
  let stringVar = "Welcome to Practical Activity 3";
  let numberVar = 44;
  let booleanVar = true;
  let arrayStr =["React", "Variable", "JSX"];
  let objectVar ={name: "Alex", age: 30, role:"Developer"}

  // add a condition statement
  if(Math.random()> 0.5){
    stringVar= "Welcome to React Practical Exercise 3"
  }
  return (
    <div>
      <h1>{stringVar}</h1>
      <p>Age: {numberVar}</p>
      <p>Is Active: {booleanVar ? "Yes": "No"}</p>

      <div>
        <h3>Tags:</h3>
        <ul>
          {arrayStr.map((item, index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>User profile:</h3>
        <p>Name: {objectVar.name}</p>
        <p>Age: {objectVar.age}</p>
        <p>Role: {objectVar.role}</p>
      </div>

    </div>
  );
    
}

export default App;
