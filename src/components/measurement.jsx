import { IconCircle } from "./iconCircle"

export function Measurement ({title, main, subordinate, icon}) {
    return (
        <div className="px-3 rounded-2xl relative flex items-center bg-second-purple">
            <IconCircle icon={icon} />
            <div className="ml-2 flex flex-col justify-evenly">
                <p className="text-sm">{title}</p>
                <p>{main}</p>
            </div>
            <div className="absolute bottom-0.5 right-3">
                <p className="text-xs">{subordinate}</p>
            </div>
        </div>
    )
}