import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Btn from "../form/Btn";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  console.log(startDate);
  console.log(endDate);

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <h4>Você selecionou:</h4>
      <p>{`Início: ${startDate}`} </p>
      <p>{`${endDate}` === "null" ? "" : `Fim: ${endDate}`}</p>

      <Btn type="submit" color="azul" label="Agendar" />
    </div>
  );
}

export default Calendar;
