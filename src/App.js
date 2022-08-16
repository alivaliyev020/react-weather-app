import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";
function App() {
  const key = "e8de9e66ce5363e71f00a95b11d5e341";
  const [search, setSearch] = useState(" ");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  return (
    <div className="App">
      <section className="flex justify-center mt-10">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Şəhər adi yazin"
          className="border-2 transition duration-500 placeholder-red-400 focus:placeholder-transparent border-black-400 w-4/12 py-2 text-center text-red-400 bg-transparent rounded-md focus:outline-none "
        />
      </section>
          <City city={city} />
    </div>
  );
}

export default App;
