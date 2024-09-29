import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'


const Countries = () => {
    const [countries,setCountries] = useState([]);
    const [visitedCountreis, setVisitedCountries]=useState([]);

    useEffect(()=> {
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data));
    
    },[]);
    const handleVisitedCountries=(country)=>{
        const newState=[...visitedCountreis,country];
        setVisitedCountries(newState);
        localStorage.setItem("visitedCountries",JSON.stringify(newState));
    };
   useEffect(()=>{
    const oldData=JSON.parse(localStorage.getItem("visitedCountries"));
    // console.log(oldData);
    setVisitedCountries(oldData);
   },[])

    return (
        <div>
            <div>
               <h2>Visited Countries Lists :{visitedCountreis.length}</h2>
               <ul>
                {
                    visitedCountreis.map((vc)=> (
                        <li>{vc.name.common}</li>
                    ))
                }
               </ul>
            </div>
            <h2>Total Countries :{countries.length}</h2>
        <div className="countries-container">
        {
        countries.map((country)=>
          ( <Country key={country.cca3} country={country} 
          handleVisitedCountries={handleVisitedCountries}></Country>)
          )};
        </div>
        </div>
    );
};

export default Countries;


