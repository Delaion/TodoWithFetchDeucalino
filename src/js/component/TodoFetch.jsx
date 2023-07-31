import React, { useState } from "react";
const toDoFetch=()=>{
const [toDoList,setToDoList]=useState(["Prepare my Bags"]);
const {input,setInput}=useState("");
const handleSubmit=(e)=>{
    e.preventDefault();
    if(input != ""){
        setToDoList({...toDoList,input});
        setInput("");
    }
};
const deleteToDo=(i)=>{
    setToDoList(toDoList.filter((_,index)=>{
        return index !=i
    }))
}
return (
    <div className="container d-flex flex-column">
         <div>
            <h1>Deucalino´s to Dos</h1>
         </div>
         <form >
         <input  onChange={(e) => { setInput(e.target.value) }}  type="text" value={input} className="form-control" placeholder="Write here your To Do"/>
         <button onSubmit={handleSubmit} type="button" class="btn btn-success"> <i className="fa-solid fa-calendar-plus"></i></button>
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
    </form>
    </div>  
 );
};
export default toDoFetch;