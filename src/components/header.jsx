import { CloudyAndSunny } from "../assets/cloudyAndSunnyIcon"
import { Cloudy } from "../assets/cloudyIcon"
import { MagnifyingGlassIcon } from "../assets/magnifyingGlassIcon"
import { Sunny } from "../assets/sunnyIcon"

export function Header ({section, handleSection, country, city, temperature, date}) {
    let mesesAño = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    }

    return (
        <div className="w-[100vws] h-[53vh]">
            <div className="h-[45vh] w-full overflow-hidden relative flex flex-col justify-around rounded-b-[2.5rem]">
                <img src="../../public/headerImg.png" alt="" className="w-full object-cover absolute z-[-10] rounded-bl-[2.5rem]" />
                <div className="px-[5vw] h-[3vh] flex justify-between items-center mt-10">
                    <p className="text-white text-xl" >{country}, {city}</p>
                    <MagnifyingGlassIcon style="h-[70%] text-white" />
                </div>
                <div className="px-[5vw] h-[38%] flex justify-between items-end text-white">
                    <div className="flex items-end">
                        <p className="text-8xl font-medium">{temperature}°</p>
                        <p className="ml-[-30px]">Feels like -2°</p>
                    </div>
                    <div className="h-[100%] w-[20%] mr-5 relative">
                        {temperature > 15 ? temperature > 20 ? <Sunny style="h-[50%] absolute left-[-2rem] top-3"/> : <CloudyAndSunny style="h-[50%] absolute left-[-2rem] top-3"/> : <Cloudy style="h-[55%] absolute left-[-2rem] top-3" /> }
                        <p className="max-w-24 text-lg text-center break-words leading-none absolute bottom-3 left-[-1rem]">{temperature > 15 ? temperature > 20 ? "Sunny" : "Cloudy And Sunny" : "Cloudy" }</p>
                    </div>
                </div>
                <div className="mx-[5vw] flex justify-between items-end text-white">
                    <p>{mesesAño[new Date(date).getMonth()]} {new Date(date).getDate()}, {date.split(" ")[1]}</p>
                    <div className="flex flex-col items-end font-medium">
                        <p>Day 3°</p>
                        <p>Night -1°</p>
                    </div>
                </div>
            </div>
            <div className="mx-[5vw] h-[8vh] flex justify-between items-center">
                {["Today","Tomorrow","10 days"].map((i, index) => {
                    return (<div onClick={() => handleSection(i)} className={`flex justify-center items-center w-[100px] h-[50%] gap-5 rounded-xl ${section === i ? "bg-first-purple" : "bg-white"}`} ><p className={`text-center text-sm ${section === i ? ("text-text-purple") : ("")}`}>{i}</p></div>)
                })}
            </div>
        </div>
    )
}