 "use client"

import { Person } from "@/types/Person"
import { useState } from "react"

 const Page = () => {

const [itemInput, setItemInput] = useState ('');
const [list, setList] = useState<Person[]> ([
  {label: "Homework", checked: false },
  {label: "Workout", checked: false }
]);

const handleAddButton = () => {
  if (itemInput.trim() === "" ) return;
  setList ([...list,{ label: itemInput, checked: false }])
  setItemInput ('');
}

const deleteItem = (index: number) => {
  setList (list.filter((item, key) => key !== index ));
}

const toggleItem = (index: number) => {
  let newList = [...list];
  for(let i in newList) {
    if(index === parseInt(i)) {
      newList[i].checked = !newList[i].checked;
    }
  }

  setList(newList);
}


  return(
    <>
    
    <div className = "w-full h-full flex items-center bg-gray-900 flex-col">
        <h1 className= "text-2xl lg:text-3xl mt-5 text-white">Lista de Tarefas</h1>

        <div className="flex w-[88%] max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-400">
        <input
        value = {itemInput}
        onChange = {e => setItemInput(e.target.value)} 
        type="text"
        placeholder="Escreva aqui"
        className= "w-2/3 h-11 border border-black p-3 text-xs md:text-md lg:text-xl text-black rounded-md mr-3"
        />
        <button onClick = {handleAddButton} className= "text-white md:text-xl lg:text-xl md:ml-6 lg:ml-6">Adicionar</button>
        </div>
        <p className = "text-white my-3">{list.length} itens na lista</p>
    
    <ul className="w-full h-auto min-h-screen max-w-lg list-disc pl-5 text-white">
    {list.map((item, index)=> (
      <li key={index}>
        <input onClick={() => toggleItem(index)} type="checkbox" checked = {item.checked} className= "w-6 h-6 mr-3" />
        {item.label} - <button onClick={() => deleteItem(index)} className="hover:underline text-blue-200">[ deletar ]</button></li>
    ))}
    </ul>

    </div>

    
    
    
    </>
  )
 }

 export default Page;