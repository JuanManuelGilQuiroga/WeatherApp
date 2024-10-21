export function IconCircle ({icon, position}) {
    return (
        <div className={`w-[28px] h-[28px] rounded-full flex justify-center items-center bg-white ${position}`}><img src={icon} /></div>
    )
}