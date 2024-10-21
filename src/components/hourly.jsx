import { Cloudy } from "../assets/cloudyIcon"

export function Hourly () {
    return (
        <div className="h-[100%] flex flex-col items-center justify-around">
            <p className="text-sm">Now</p>
            <Cloudy style="w-[80%]"/>
            <p className="text-lg">10°</p>
        </div>
    )
}