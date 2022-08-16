import React from "react";

const City = ({ props }) => {
    const {city} = props;
   return (
     <div>
       <h1>{city.data.main.name}</h1>
       <h1></h1>
     </div>
   );
    
};

export default City;
