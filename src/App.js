import React from "react";  
import NewForm from "./components/NewForm";
import Expenses from "./components/Expenses";

const App = () => {
  const expense = [
    {
      id: 1,
      name: "Adepoju Toyeeb",
      date: new Date (1999, 8, 14)

    },
    {
      id: 2,
      name: "daud Ekungba",
      date: new Date(1998, 2, 21)
    },
    {
      id: 3,
      name: "Abdussamad Yisau",
      date: new Date (1999, 6, 5)

    }
  ]
  return(
    <>
      <NewForm />
      <Expenses name= {expense[0].name} date = {expense[0].date}/>
      <Expenses name= {expense[1].name} date = {expense[1].date}/>
      <Expenses name= {expense[2].name} date = {expense[2].date}/>
    </>
    
  )
}

export default App