import { Cloudy } from "../assets/cloudyIcon"
import { MagnifyingGlassIcon } from "../assets/magnifyingGlassIcon"

export function Header () {
    return (
        <div className="w-[100vws]">
            <div className="h-[45vh] w-full overflow-hidden relative flex flex-col justify-around">
                <img src="../../public/headerImg.png" alt="" className="w-full object-cover absolute z-[-10] rounded-br-[2.5rem] rounded-bl-[2.5rem]" />
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
        </div>
    )
}