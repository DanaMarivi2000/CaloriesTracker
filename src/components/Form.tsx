import { categories } from "../data/db"
import { ChangeEvent, FormEvent, useState } from "react"
import { Activity } from "../types/indx"



const Form = () => {
    const [activity, setActivity]=useState<Activity>({
        category:1,
        name:'',
        calories:0
    })
   

    const handleSubmit=(e:ChangeEvent<HTMLSelectElement>|ChangeEvent<HTMLInputElement>)=>{
    const isNumberField=['category','categories'].includes(e.target.id) 
        setActivity({...activity,[e.target.id]: isNumberField?Number(e.target.value):e.target.value})
    }

    const isValidActivity=()=>{
        const {name, calories}=activity
        return name.trim()!=='' && calories>0
    }

    const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }
    return (
      <form className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={onSubmit}
      >
            
           <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white" value={activity.category} onChange={handleSubmit}>
                {categories.map(category=>(<option key={category.id} value={category.id}>{category.name}</option>))}

            </select>
    </div>
    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad: </label>
        <input id="name" type="text" className="border border-slate-300 p-2 rounded-lg" placeholder="Ej.Comida, Pesas, Ejercicio" value={activity.name} onChange={handleSubmit}/>
    </div>
    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias: </label>
        <input id="calories" type="number" className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. 300 o 500" value={activity.calories} onChange={handleSubmit}/>
    </div>
    <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10" value={activity.category===1?'Guardar Comida':'Guardar Ejercicio'} disabled={!isValidActivity()}/>
       </form>
  )
}

export default Form
