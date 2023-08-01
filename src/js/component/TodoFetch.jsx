
import React, { useState } from "react";
const toDoFetch=()=>{
const [toDoList,setToDoList]=useState(["Prepare my Bags", "Clean my room","Say Good bye to the dogs", "Go to Girona"]);
const [input,setInput]=useState("");
function addToDo (){
    setToDoList(toDoList.concat(input));
}
const handleSubmit=(e)=>{
    e.preventDefault();
    if(input !== ""){
        setToDoList({...toDoList, input});
        setInput("");
    }
};
const deleteToDo=(i)=>{
    setToDoList(toDoList.filter((_,index)=>{
        return index !== i
    }))
}
return (
    <div className="container d-flex flex-column">
         <div>
            <h1>Deucalino´s to Dos</h1>
         </div>
         <form >
         <div className="input-group mb-3">
  <input onChange={event => { setInput(event.target.value) }}  value={input}  onSubmit={handleSubmit} type="text" className="form-control" placeholder="Write your task"/>
  <button onClick={addToDo} type="button" class="btn btn-success"> <i className="fa-solid fa-calendar-plus"></i></button>
</div>
       
     <div  className="p-3 mb-2 bg-primary">
     <ul className="list-group">
        {toDoList.map((toDo,index)=>(
            <li key={index} className="list-group-item d-flex justify-content-between">
                <div class="alert alert-info" role="alert">
                {toDo}
                <button onClick={()=>{deleteToDo(index)}} className="btn btn-outline-success" type="button">
                <i className="fa-solid fa-calendar-plus"></i>
                </button>
                </div>
            </li>
        ))}
    </ul>
    </div>   
   
    </form>
    </div>  
 );
};
export default toDoFetch;