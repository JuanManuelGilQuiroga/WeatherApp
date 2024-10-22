import { Measurement } from "./measurement"
import SunriseIcon from "../assets/nights_stay.svg"
import SunsetIcon from "../assets/routine.svg"

export function SunTimes ({sunrise, sunset}) {
    return (
        <div className="w-[100%] h-[7.5vh] grid grid-cols-2 grid-rows-1 gap-5">
            <Measurement icon={SunriseIcon} main={sunrise} subordinate={`4h ago`} title={`Sunrise`} />
            <Measurement icon={SunsetIcon} main={sunset} subordinate={`in 9h`} title={`Sunset`} />
        </div>
    )
}