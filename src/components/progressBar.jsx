export function ProgressBar ({hour, percent}) {
    return (
        <div className="w-[100%] flex justify-between items-center">
            <p className="w-[50px] text-end">{hour >= 12 ? `${hour-12} PM` : `${hour} AM`}</p>
            <div className="h-[100%] w-[60%] rounded-full bg-white"> 
                <div className="h-[100%] bg-fourth-purple rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
            <p className="w-[42px]">{`${percent}%`}</p>
        </div>
    )
}