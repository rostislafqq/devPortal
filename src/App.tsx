import Header from "./components/header/header"
import MyStudyContainer from "./components/myStudy/myStudyContainer"
import './null.scss'
import { Navigate, Route, Routes } from 'react-router-dom';
import ComboboxContainer from "./components/comboboxSearch/comboboxContainer";
import GeolocationContainer from "./components/geolocation/geolocationContainer";

function App() {
  

  return (
    <Routes>
      <Route path='*' element={<Navigate to='/'/>}/>
      <Route path="/" element={<MyStudyContainer />} /> 
      <Route path="/geolacation" element={<GeolocationContainer />} /> 
      <Route path="/combobox" element={<ComboboxContainer />} />
    </Routes>
  )
}

export default App
