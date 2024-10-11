import { Activity } from "../types/indx"
import { categories } from "../data/db"
import { useMemo } from "react"

type ActivityListProps={
    activities:Activity[]
}

const ActivityList = ({activities}:ActivityListProps) => {
  
  const categoryName=useMemo(()=>(category:Activity['category'])=>categories.map(categoria=>categoria.id===category?categoria.name:''),[activities])
    return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activities.map(activity=>(
        <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
            <div className="space-y-2 relative">
                <p>
                    {categoryName(activity.category)}
                </p>
                <p className="text-2xl font-bold pt-5">{activity.name}</p>
                <p className="font-black text-4xl text-lime-500">{activity.calories}</p>
                <span>Calorías</span>
            </div>
            <div></div>
        </div>
      ))}
    </>
  )
}

export default ActivityList
