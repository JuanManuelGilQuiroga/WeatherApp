import { ProgressBar } from "./progressBar"
import RainyIcon from "../assets/rainy.svg"

export function ChanceForRain () {
    return (
        <div className="h-[18vh] rounded-2xl p-3 flex flex-col justify-between bg-second-purple">
            <div className="flex items-center">
                <IconCircle icon={RainyIcon}/>
                <p className="text-sm ml-2">Chance of rain</p>
            </div>
            <div className="h-[65%] flex flex-col gap-3">
                {[{time: "2024-10-01 00:00", chance_of_rain: 100},{time: "2024-10-01 00:00", chance_of_rain: 100},{time: "2024-10-01 00:00", chance_of_rain: 100},{time: "2024-10-01 00:00", chance_of_rain: 100},].map((hora, index) => {
                    return (<ProgressBar hour={hora.time} percent={hora.chance_of_rain}/>)
                })}
            </div>
        </div>
    )
}