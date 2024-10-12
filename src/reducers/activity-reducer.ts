import { Activity } from "../types/indx"

export type ActivityActions=
    {type:'save-activity', payload:{newActivity:Activity}}|
    {type:'set-activeId', payload:{id:Activity['id']}}

type ActivityState={
    activities:Activity[]
    activeId:Activity['id']
}
export const initialState: ActivityState={
    activities:[],
    activeId:''
}


export const activityReducer=(state:ActivityState=initialState,action:ActivityActions)=>{
    if(action.type==='save-activity'){
        //Este codigo maneja la logica para actualizar el state

        return {
            ...state,
            activities:[...state.activities, action.payload.newActivity]
        }
    }

    if(action.type=='set-activeId'){
        return {
            ...state,
            activeId:action.payload.id
        }
    }
    return state
}