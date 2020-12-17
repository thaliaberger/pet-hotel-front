import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api/HotelApi";
import Btn from "../form/Btn";

function Agendamentos() {
  const [state, setState] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await api.get("/booking");
        setState([...response.data.bookings]);
      } catch (err) {
        console.error(err.response);
      }
    }
    fetchBookings();
  }, [history]);

  return (
    <div className="agendamentos">
      <h2>Meus Agendamentos</h2>

      {!state ? (
        <p>Nenhum Agendamento</p>
      ) : (
        state.map((el) => (
          <div key={el._id}>
            <p>
              Período:{" "}
              {el.startDate
                .toString()
                .substring(0, 10)
                .split("-")
                .reverse()
                .join("/")}{" "}
              a{" "}
              {el.endDate
                .toString()
                .substring(0, 10)
                .split("-")
                .reverse()
                .join("/")}
            </p>
            <p>Hóspedes: {el.pets.length} </p>
            {el.payment ? (
              <p>Reserva confirmada</p>
            ) : (
              <div className="payment-btn">
                <Btn
                  targetUrl="/payment"
                  label="Efetuar pagamento"
                  color="laranja"
                />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Agendamentos;
