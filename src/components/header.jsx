import { Cloudy } from "../assets/cloudyIcon"
import { MagnifyingGlassIcon } from "../assets/magnifyingGlassIcon"

export function Header ({section}) {
    console.log(section)
    return (
        <div className="w-[100vws] h-[53vh]">
            <div className="h-[45vh] w-full overflow-hidden relative flex flex-col justify-around rounded-b-[2.5rem]">
                <img src="../../public/headerImg.png" alt="" className="w-full object-cover absolute z-[-10] rounded-bl-[2.5rem]" />
                <div className="px-[5vw] h-[3vh] flex justify-between items-center mt-10">
                    <p className="text-white text-xl" >Kharkiv, Ukraine</p>
                    <MagnifyingGlassIcon style="h-[70%] text-white" />
                </div>
                <div className="px-[5vw] h-[35%] flex justify-between items-end text-white">
                    <div className="flex items-end">
                        <p className="text-8xl font-medium">3°</p>
                        <p className="ml-[-30px]">Feels like -2°</p>
                    </div>
                    <div className=" w-[20%] flex justify-center flex-col gap-3 mr-5">
                        <Cloudy style="h-[100%]" />
                        <p className="text-lg text-center">Cloudy</p>
                    </div>
                </div>
                <div className="mx-[5vw] flex justify-between items-end text-white">
                    <p>January 18, 16:14</p>
                    <div className="flex flex-col items-end font-medium">
                        <p>Day 3°</p>
                        <p>Night -1°</p>
                    </div>
                </div>
            </div>
            <div className="mx-[5vw] h-[8vh] flex justify-between items-center">
                {["Today","Tomorrow","10 days"].map((i, index) => {
                    console.log(i)
                    return (<div className={`flex justify-center items-center w-[100px] h-[50%] gap-5 rounded-xl ${section === i ? "bg-first-purple" : "bg-white"}`} ><p className={`text-center text-sm ${section === i ? ("text-text-purple") : ("")}`}>{i}</p></div>)
                })}
            </div>
        </div>
    )
}