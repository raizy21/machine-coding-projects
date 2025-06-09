import { useState, useEffect } from "react"; // useState and useEffect are react hooks
import { countries, states, cities } from "./Data.js"; // importing data from Data.js

const DropDowns = () => {
  // states to store the list of countries, states, cities and selections
  const [country, setCountry] = useState([]); // list of countries
  const [state, setState] = useState([]); // list of states based on selected country
  const [city, setCity] = useState([]); // list of cities based on selected state
  const [selectedCountry, setSelectedCountry] = useState(""); // selected country
  const [selectedState, setSelectedState] = useState(""); // selected state
  const [selectedCity, setSelectedCity] = useState(""); // selected city

  // load the list of countries when the component mounts
  useEffect(() => {
    setCountry(countries);
  }, []);

  // handle country selection and filter the states accordingly
  const handleSelectCountry = (id) => {
    setSelectedCountry(id);
    setState(states.filter((x) => x.countryId === id));
    setCity([]);
    setSelectedState("");
    setSelectedCity("");
  };

  // handle state selection and filter the cities accordingly
  const handleSelectState = (id) => {
    setSelectedState(id);
    setCity(cities.filter((x) => x.stateId === id));
    setSelectedCity("");
  };

  return (
    <div className="dropdown-wrapper">
      {/* country dropdown */}
      <div className="dropdown-container">
        <label>country</label>
        <select
          value={selectedCountry}
          onChange={(e) => handleSelectCountry(e.target.value)}
        >
          <option value="" disabled>
            select country
          </option>
          {country.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* state dropdown   */}
      <div className="dropdown-container">
        <label>state</label>
        <select
          value={selectedState}
          onChange={(e) => handleSelectState(e.target.value)}
        >
          <option value="" disabled>
            select state
          </option>
          {state.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* city dropdown */}
      <div className="dropdown-container">
        <label>city</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="" disabled>
            select city
          </option>
          {city.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDowns;
