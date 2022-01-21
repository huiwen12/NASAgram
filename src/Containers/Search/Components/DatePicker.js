import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const MakeDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
      selected={startDate} 
      onChange={(date) => setStartDate(date)}

      // submit on click --> add a submit button with function
    />
  );
};


export default MakeDatePicker