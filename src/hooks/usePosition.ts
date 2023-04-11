import { useEffect, useState } from 'react';
export const usePosition =()=>{
  const [lon,setLon] =useState<number>()
  const [lat,setLat] = useState<number>()
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      setLon(position.coords.longitude)
      setLat(position.coords.latitude)
  })
  },[])
  return({lon,lat})
}