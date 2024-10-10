import { Activity } from "../types/indx"

export type ActivityActions={
    type:'save-activity', payload:{newActivity:Activity}
}

type ActivityState={
    activities:Activity[]
}
export const initialState: ActivityState={
    activities:[]
}


export const activityReducer=(state:ActivityState=initialState,action:ActivityActions)=>{
    if(action.type==='save-activity'){
        //Este codigo maneja la logica para actualizar el state

    }
    return state
}