import { CloudyAndSunny } from "../assets/cloudyAndSunnyIcon"
import { Cloudy } from "../assets/cloudyIcon"
import { Sunny } from "../assets/sunnyIcon"

export function Hourly ({hour, temperature}) {
    return (
        <div className="h-[100%] min-w-10 flex flex-col items-center justify-around">
            <p className="text-xs">{ hour === new Date().getHours() ? `NOW` : hour >= 12 ? `${hour-12}PM` : `${hour}AM`}</p>
            {temperature > 15 ? temperature > 20 ? <Sunny style="w-[60%]"/> : <CloudyAndSunny style="w-[60%]"/> :  <Cloudy style="w-[80%]"/>}
            
            <p className="">{temperature}°</p>
        </div>
    )
}