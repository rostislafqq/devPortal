import { usePosition } from "../../hooks/usePosition";
import {useEffect,useState} from "react"
import Geolocation from "./geolocation";

const GeolocationContainer =()=>{
    const {lon,lat} = usePosition()
    const [town , setTown] = useState<string>('')

    useEffect(() => {
      if(lon&&lat){
      const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
      const token = "afbd72c870f0fbbe7b4b522d8230d9320fd4fa65";
      const query = { lat, lon ,count:1};
      const options:RequestInit = {
        method: "POST",
          mode: "cors",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + token
          },
          body: JSON.stringify(query)
      }
      fetch(url, options)
      .then(response => response.json())
      .then(result => {
        setTown(result.suggestions[0].data.city)
    })
      .catch(error => console.log("error", error));}
    }, [lon,lat])

    return(
        <>
            {!lon&&!lat?'Запрет доступа к геолокации':lon&&lat&&town? <Geolocation lon={lon} lat={lat} town={town} />:'Загрузка'}
        </>
    )
}

export default GeolocationContainer