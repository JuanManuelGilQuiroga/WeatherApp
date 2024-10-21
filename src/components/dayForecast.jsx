import RainyIcon from "../assets/rainy.svg"
import { ForecastChart } from "./forecastChart"

export function DayForecast () {
    return (
        <div className="h-[18vh] rounded-2xl p-3 flex flex-col justify-between bg-second-purple">
            <div className="flex items-center">
                <IconCircle icon={RainyIcon}/>
                <p className="text-sm ml-2">Day forecast</p>
            </div>
            <div className="h-[65%] mx-2">
                {/*<ForecastChart/>*/}
            </div>
        </div>
    )
}