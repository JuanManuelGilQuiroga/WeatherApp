export function ProgressBar ({hour, percent}) {

    const hours = new Date(hour).getHours()

    return (
        <div className="w-[100%] flex justify-between items-center">
            <p>{hours >= 12 ? `${hours-12} PM` : `${hours} AM`}</p>
            <div className="h-[100%] w-[70%] rounded-full bg-white"> 
                <div className="h-[100%] bg-fourth-purple rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
            <p>{`${percent}%`}</p>
        </div>
    )
}