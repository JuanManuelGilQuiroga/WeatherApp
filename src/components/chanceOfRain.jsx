import { ProgressBar } from "./progressBar"
import { IconCircle } from "./iconCircle"
import RainyIcon from "../assets/rainy.svg"
import { useEffect, useState } from "react"

export function ChanceForRain ({hourlyData, day}) {
    const [finalData, setFinalData] = useState([])
    
    const getCurrentHourlyData = (data) => {
        if(day == "Today"){
            let finalData = [];
            for(let i = 0; i < data.length; i++){
                if(new Date().getHours() <= new Date(data[i].time).getHours()){
                    finalData.push(data[i])
                }
            }
            return finalData
        } else {
            return data
        }
    }
    
    useEffect(() => {
        if (hourlyData && hourlyData.length > 0) {
            const filteredData = getCurrentHourlyData(hourlyData);
            setFinalData(filteredData);
        }
    }, [hourlyData]);

    return (
        <div className="h-[23vh] rounded-2xl p-3 flex flex-col justify-between bg-second-purple">
            <div className="flex items-center">
                <IconCircle icon={RainyIcon}/>
                <p className="text-sm ml-2">Chance of rain</p>
            </div>
            <div className="h-[75%] flex flex-col gap-3 overflow-y-scroll overflow-hidden">
                {finalData.map((forecast, index) => {
                    return (<ProgressBar hour={new Date(forecast.time).getHours()} percent={forecast.chance_of_rain}/>)
                })}
            </div>
        </div>
    )
}