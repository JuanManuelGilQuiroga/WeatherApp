import { useState, useEffect } from 'react';
import { Header } from './components/header';
import { Measurements } from './components/measurements';
import { HourlyForecast } from './components/hourlyForecast';
import { DayForecast } from './components/dayForecast';
import { ChanceForRain } from './components/chanceOfRain';
import { SunTimes } from './components/sunTimes';
import { useQuery } from '@tanstack/react-query';
import { DayCard } from './components/dayCard';
import { Sunny } from './assets/sunnyIcon';
import { Cloudy } from './assets/cloudyIcon';
import { CloudyAndSunny } from './assets/cloudyAndSunnyIcon';

const dataQuery = async () => {
  const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=cb859b649e534b6a8df25611242210&q=Floridablanca&lang=es&days=10`);
  const data = await res.json();
  return data;
};

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: 'weather',
    queryFn: dataQuery,
  });
  const [dayPosition, setDayPosition] = useState("Today")
  const [dataDay, setDataDay] = useState(data ? data?.forecast?.forecastday[0] : null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el ancho de la ventana
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Agrega el evento de redimensionamiento
    window.addEventListener("resize", handleResize);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDayChange = (newDay) => {
    setDayPosition(newDay);
  };

  useEffect(() => {
    if(!isLoading && data){
      const newDataDay = data?.forecast?.forecastday[dayPosition === "Today" ? 0 : 1];
      setDataDay(newDataDay);
    }
  }, [dayPosition, data, isLoading]); 


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      {windowWidth > 500
      ?(<div className='h-full w-full px-10 flex flex-col justify-center items-center gap-5'>
        <CloudyAndSunny style={'w-[200px]'}/>
        <p className='text-3xl text-center font-semibold'>This design is only available for mobile :(</p>
      </div>)
      :(<>
        <Header section={dayPosition} handleSection={handleDayChange} country={data?.location.country} city={data?.location.name} temperature={data?.current.temp_c.toFixed(0)} date={data?.current.last_updated}/>
        <main className='mx-[5vw] gap-4 flex flex-col'>
          {dayPosition !== "10 days" ? 
            <>
              <Measurements 
              windMain={dataDay?.hour.at(-1)?.wind_kph % 1 !== 0 ? dataDay?.hour.at(-1)?.wind_kph.toFixed(2): dataDay?.hour.at(-1)?.wind_kph} 
              windSubordinate={(dataDay?.hour.at(-1)?.wind_kph - dataDay?.hour.at(-2)?.wind_kph) % 1 !== 0 ? (dataDay?.hour.at(-1)?.wind_kph -dataDay?.hour.at(-2)?.wind_kph).toFixed(2) : (dataDay?.hour.at(-1)?.wind_kph -dataDay?.hour.at(-2)?.wind_kph)} 
              rainMain={dataDay?.hour.at(-1)?.chance_of_rain % 1 !== 0 ? dataDay?.hour.at(-1)?.chance_of_rain.toFixed(2): dataDay?.hour.at(-1)?.chance_of_rain}
              rainSubordinate={(dataDay?.hour.at(-1)?.chance_of_rain - dataDay?.hour.at(-2)?.chance_of_rain) % 1 !== 0 ? (dataDay?.hour.at(-1)?.chance_of_rain -dataDay?.hour.at(-2)?.chance_of_rain).toFixed(2) : (dataDay?.hour.at(-1)?.chance_of_rain -dataDay?.hour.at(-2)?.chance_of_rain)} 
              pressureMain={dataDay?.hour.at(-1)?.pressure_mb % 1 !== 0 ? dataDay?.hour.at(-1)?.pressure_mb.toFixed(2): dataDay?.hour.at(-1)?.pressure_mb} 
              pressureSubordinate={(dataDay?.hour.at(-1)?.pressure_mb - dataDay?.hour.at(-2)?.pressure_mb) % 1 !== 0 ? (dataDay?.hour.at(-1)?.pressure_mb -dataDay?.hour.at(-2)?.pressure_mb).toFixed(2) : (dataDay?.hour.at(-1)?.pressure_mb - dataDay?.hour.at(-2)?.pressure_mb)} 
              uvMain={dataDay?.hour.at(-1)?.uv % 1 !== 0 ? dataDay?.hour.at(-1)?.uv.toFixed(2): dataDay?.hour.at(-1)?.uv} 
              uvSubordinate={(dataDay?.hour.at(-1)?.uv - dataDay?.hour.at(-2)?.uv) % 1 !== 0 ? (dataDay?.hour.at(-1)?.uv -dataDay?.hour.at(-2)?.uv).toFixed(2) : (dataDay?.hour.at(-1)?.uv - dataDay?.hour.at(-2)?.uv)} 
              />
              <HourlyForecast hourlyData={dataDay?.hour} day={dayPosition}/>
              <DayForecast dailyData={data?.forecast?.forecastday} />
              <ChanceForRain hourlyData={dataDay?.hour} day={dayPosition}/>
              <SunTimes sunrise={dataDay?.astro.sunrise} sunset={dataDay?.astro.sunset} />
            </>
            : data?.forecast?.forecastday.map((day, index) => {
              return (<DayCard day={day?.date} temperature={day?.day?.avgtemp_c}/>)
            })
          }
          
        </main>
      </>)}
    </>
  );
}

export default App;
