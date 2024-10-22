import { useState, useEffect } from 'react';
import { Header } from './components/header';
import { Measurements } from './components/measurements';
import { HourlyForecast } from './components/hourlyForecast';
import { DayForecast } from './components/dayForecast';
import { ChanceForRain } from './components/chanceOfRain';
import { SunTimes } from './components/sunTimes';
import { useQuery } from '@tanstack/react-query';

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

  const handleDayChange = (newDay) => {
    setDayPosition(newDay);
  };

  useEffect(() => {
    if(!isLoading && data){
      const newDataDay = data?.forecast?.forecastday[dayPosition === "Today" ? 0 : 1];
      setDataDay(newDataDay);
    }
  }, [dayPosition, data, isLoading]); 
  console.log(dataDay?.hour)


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <Header section={dayPosition} handleSection={handleDayChange} country={data?.location.country} city={data?.location.name} temperature={data?.current.temp_c} date={data?.current.last_updated}/>
      <main className='mx-[5vw] gap-4 flex flex-col'>
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
        <HourlyForecast hourlyData={dataDay?.hour} />
        <DayForecast dailyData={data.forecast.forecastday} />
        <ChanceForRain chance={data.forecast.forecastday[0].day.daily_chance_of_rain} />
        <SunTimes sunrise={dataDay?.astro.sunrise} sunset={dataDay?.astro.sunset} />
      </main>
    </>
  );
}

export default App;
