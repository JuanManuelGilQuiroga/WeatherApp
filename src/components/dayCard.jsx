import { CloudyAndSunny } from "../assets/cloudyAndSunnyIcon"
import { Cloudy } from "../assets/cloudyIcon"
import ExpandIcon from "../assets/expand_more.svg"
import { IconCircle } from "./iconCircle"
import { Sunny } from "../assets/sunnyIcon"

export function DayCard ({day, temperature}) {
    return (
        <div className="p-3 rounded-2xl w-[100%] h-[12vh] bg-second-purple flex justify-between relative">
            <div className="ml-2 w-[40%] flex flex-col justify-center gap-2">
                <p>{day}</p>
                <p>{temperature > 15 ? temperature > 20 ? "Sunny" : "Cloudy And Sunny" : "Cloudy" }</p>
            </div>
            <div className="w-[30%] flex justify-between mr-10 items-center">
                <div className="w-10 text-center border-l-[60%] border-gray-400">
                    <p>3°</p>
                    <p>-2°</p>
                </div>
                {temperature > 15 ? temperature > 20 ? <Sunny style="w-[50%]"/> : <CloudyAndSunny style="w-[50%]"/> :  <Cloudy style="w-[80%]"/>}
            </div>
            <IconCircle icon={ExpandIcon} position="absolute top-3 right-3" />
        </div>
    )
}