import { IconCircle } from "./iconCircle"
import ClockIcon from "../assets/history_toggle_off.svg"
import { Hourly } from "./hourly"
import { useEffect, useState } from "react"

export function HourlyForecast ({hourlyData}) {
    const [finalData, setFinalData] = useState([])
    
    const getCurrentHourlyData = (data) => {
        let finalData = [];
        for(let i = 0; i < data.length; i++){
            if(new Date().getHours() <= new Date(data[i].time).getHours()){
                finalData.push(data[i])
            }
        }
        return finalData
    }
    
    useEffect(() => {
        if (hourlyData && hourlyData.length > 0) {
            const filteredData = getCurrentHourlyData(hourlyData);
            setFinalData(filteredData);
        }
    }, [hourlyData]);
    console.log(finalData)
    console.log(hourlyData)
    
    return (
        <div className="h-[18vh] rounded-2xl p-3 flex flex-col justify-between bg-second-purple">
            <div className="flex items-center">
                <IconCircle icon={ClockIcon}/>
                <p className="text-sm ml-2">Hourly forecast</p>
            </div>
            <div className="h-[65%] mx-2 flex gap-[1.1rem] overflow-hidden overflow-x-scroll">
                {finalData.map((forecast, index) => {
                    return (<Hourly temperature={forecast.temp_c.toFixed(0)} hour={new Date(forecast.time).getHours()}/>)
                })}
            </div>
        </div>
    )
}