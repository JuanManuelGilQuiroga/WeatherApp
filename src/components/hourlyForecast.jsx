import { IconCircle } from "./iconCircle"
import ClockIcon from "../assets/history_toggle_off.svg"
import { Hourly } from "./hourly"

export function HourlyForecast () {
    return (
        <div className="h-[18vh] rounded-2xl p-3 flex flex-col justify-between bg-second-purple">
            <div className="flex items-center">
                <IconCircle icon={ClockIcon}/>
                <p className="text-sm ml-2">Hourly forecast</p>
            </div>
            <div className="h-[65%] mx-2 flex gap-10 overflow-hidden overflow-x-scroll">
                {[1,2,3,4,5,6,7].map((forecast, index) => {
                    return (<Hourly/>)
                })}
            </div>
        </div>
    )
}