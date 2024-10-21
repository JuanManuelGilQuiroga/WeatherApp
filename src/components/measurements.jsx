import { Measurement } from "./measurement"
import AirIcon from "../assets/air.svg"
import RainyIcon from "../assets/rainy.svg"
import WavesIcon from "../assets/waves.svg"
import LightIcon from "../assets/light_mode.svg"

export function Measurements ({windMain, windSubordinate, rainMain, rainSubordinate, pressureMain, pressureSubordinate, uvMain, uvSubordinate}) {
    return (
        <div className="w-[100%] h-[18vh] grid grid-cols-2 grid-rows-2 gap-4">
            <Measurement icon={AirIcon} title="Wind speed" main={`${windMain}km/h`} subordinate={`${windSubordinate} km/h`}/>
            <Measurement icon={RainyIcon} title="Rain chance" main={`${rainMain}%`} subordinate={`${rainSubordinate}%`}/>
            <Measurement icon={WavesIcon} title="Pressure" main={`${pressureMain} hpa`} subordinate={`${pressureSubordinate} hpa`}/>
            <Measurement icon={LightIcon} title="UV Index" main={uvMain} subordinate={uvSubordinate}/>
        </div>
    )
}