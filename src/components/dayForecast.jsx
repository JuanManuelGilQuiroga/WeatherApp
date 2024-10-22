import { useEffect, useState } from "react"
import RainyIcon from "../assets/rainy.svg"
import { ForecastChart } from "./forecastChart"
import { IconCircle } from "./iconCircle"

export function DayForecast ({dailyData}) {
    const [finalData, setFinalData] = useState({})
    
    const getCurrentDailyData = (data) => {
        let finalData = [];
        let labels = [];
        for(let i = 0; i < 7; i++){
            finalData.push(data[i]?.day?.avgtemp_c)
            labels.push(data[i]?.date)
        }
        return {data: finalData, labels: labels}
    }
    
    useEffect(() => {
        if (dailyData && dailyData.length > 0) {
            const filteredData = getCurrentDailyData(dailyData);
            setFinalData(filteredData);
        }
    }, [dailyData]);

    return (
        <div className="h-[18vh] rounded-2xl p-3 flex flex-col justify-between bg-second-purple">
            <div className="flex items-center">
                <IconCircle icon={RainyIcon}/>
                <p className="text-sm ml-2">Day forecast</p>
            </div>
            <div className="w-[90%] h-[90%] flex justify-center items-center">
                <ForecastChart data={finalData?.data} labelsPositions={finalData?.labels}/>
            </div>
        </div>
    )
}