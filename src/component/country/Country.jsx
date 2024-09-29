import { useEffect, useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountries}) => {
  const {name , flags , area,}=country;
    const [visited,setVisited]=useState(false);
    // const [countryLists ,setCountryLists]=useState([]);
   
    const handleVisited = ()=>{
        // setVisited(!visited);
        // localStorage.setItem("visited",JSON.stringify(visited))
    };
    // useEffect(()=>{
    //   const newData =JSON.parse(localStorage.getItem("visited"));
    //   setVisited(newData);
    // },[]);
   
    
    return(
        <div className={`country ${visited && "visited"}`}>
            <h3>Name :{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area :{area}</p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={()=>handleVisited()}>
              {visited? "visited" : "visit"}
               </button>
            {/* {visited && "i have visited this country"} */}
          {
            visited ? " I have visited this Country" :" I went to go "
          }
        </div>
    );
};

export default Country;