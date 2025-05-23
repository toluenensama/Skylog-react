import bgImg from "../assets/weather/rain.jpg"
export function ImageBackground() {

    return (
        <div className="fixed min-h-screen inset-0 z-0 pointer-events-none overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${bgImg})`}}>

        </div>
    )
}