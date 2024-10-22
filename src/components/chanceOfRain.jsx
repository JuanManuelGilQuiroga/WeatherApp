import { ProgressBar } from "./progressBar"
import { IconCircle } from "./iconCircle"
import RainyIcon from "../assets/rainy.svg"

export function ChanceForRain () {
    return (
        <div className="h-[23vh] rounded-2xl p-3 flex flex-col justify-between bg-second-purple">
            <div className="flex items-center">
                <IconCircle icon={RainyIcon}/>
                <p className="text-sm ml-2">Chance of rain</p>
            </div>
            <div className="h-[75%] flex flex-col gap-3">
                {[{time: "2024-10-01 19:00", chance_of_rain: 27},{time: "2024-10-01 20:00", chance_of_rain: 44},{time: "2024-10-01 21:00", chance_of_rain: 56},{time: "2024-10-01 22:00", chance_of_rain: 88},].map((hora, index) => {
                    return (<ProgressBar hour={hora.time} percent={hora.chance_of_rain}/>)
                })}
            </div>
        </div>
    )
}