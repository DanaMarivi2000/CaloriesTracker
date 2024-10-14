type CalorieDisplayProps={
    calories:number
    text:string
}


const CalorieDisplay = ({calories, text}:CalorieDisplayProps) => {
  return (
    <>
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-6xl text-orange">{calories}</span>
        {text}
      </p>
      
    </>
  )
}

export default CalorieDisplay
