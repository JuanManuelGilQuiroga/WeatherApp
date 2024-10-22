import { Cloudy } from "../assets/cloudyIcon"

export function Hourly ({hour, temperature}) {
    return (
        <div className="h-[100%] min-w-10 flex flex-col items-center justify-around">
            <p className="text-xs">{ hour === new Date().getHours() ? `NOW` : hour >= 12 ? `${hour-12}PM` : `${hour}AM`}</p>
            <Cloudy style="w-[60%]"/>
            <p className="">{temperature}°</p>
        </div>
    )
}