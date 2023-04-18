import { React, useEffect,useState } from "react";
import "./App.css";
import Currentcity from "./components/Currentcity";
import Header from "./components/Header";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [weather, setWeather] = useState({});
  const [searchValue, setSearchValue] = useState("Ottawa");
  const [warning, setWarningValue] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async (searchValue) => {
      //debugger;
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=9df8febe6b1c09bb47fa8cf1ef6c52e5`;

      try {
        const result = await axios(API);
        setWeather(result.data);
        setWarningValue(false);
        console.log("yes");
        setShow(false);
      } catch (error) {
        setWarningValue(true);
        setShow(true);
        console.log("hello");

      }
    };
    fetchData(searchValue);
  }, [searchValue]);
  return (
    <div className="App">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        warning={warning}
        setWarningValue={setWarningValue}
        show={show}
        setShow={setShow}
      />
      <Currentcity weather={weather} setWeather={setWeather} />
      <Footer />
    </div>
  );
}

export default App;
