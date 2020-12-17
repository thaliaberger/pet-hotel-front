import React, { useEffect, useState } from "react";
import SimpleInput from "../form/SimpleInput";
import Btn from "../form/Btn";
import api from "../../api/HotelApi";
import { useHistory } from "react-router-dom";
import Loading from "../loading/Loading";

import "./Booking.css";

function BoookingPayment(props) {
	const history = useHistory();
	const { id } = props.match.params;
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState("");
	const [booking, setBooking] = useState({
		startDate: "",
		endDate: "",
		pets: [],
		value: "",
		booking_id: id,
	});
	const [state, setState] = useState({
		cardHoldName: "",
		cardNumber: "",
		expiryDate: "",
		cvc: "",
	});
	const [loading, setLoading] = useState(false);

	function handleChange(event) {
		setState({
			...state,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();

		if (
			!state.cardHoldName ||
			!state.cardNumber ||
			!state.cvc ||
			!state.expiryDate
		) {
			setErrors("Verifique os dados antes de continuar!");
		} else {
			setLoading(true);
			const result = await api.post("/payment", booking);
			history.push("/dashboard");
		}
	}

	useEffect(() => {
		async function fetchBooking() {
			try {
				const response = await api.get(`/booking/${id}`);
				console.log(response);
				setBooking(response.data.booking);
			} catch (err) {
				console.error(err);
			}
		}
		fetchBooking();
	}, [id, props.history]);

	return (
		<div>
			<h3>Dados da Reserva</h3>
			<div>
				<p>
					Período:{" "}
					{booking.startDate
						.toString()
						.substring(0, 10)
						.split("-")
						.reverse()
						.join("/")}{" "}
					a{" "}
					{booking.endDate
						.toString()
						.substring(0, 10)
						.split("-")
						.reverse()
						.join("/")}
				</p>
				<p>Hóspedes: {booking.pets.length} </p>
				<p>Valor: {booking.value}</p>
			</div>
			<h3>Dados do Cartão</h3>
			<form onSubmit={handleSubmit}>
				<SimpleInput
					name="cardHoldName"
					label="Nome do dono do cartão"
					type="text"
					value={state.cardHoldName}
					onChange={handleChange}
				/>
				<SimpleInput
					name="cardNumber"
					label="Número do cartão"
					type="number"
					value={state.cardNumber}
					onChange={handleChange}
				/>
				<SimpleInput
					name="expiryDate"
					label="Data de vencimento"
					type="text"
					value={state.expiryDate}
					onChange={handleChange}
				/>
				<SimpleInput
					name="cvc"
					label="CVC"
					type="number"
					value={state.cvc}
					onChange={handleChange}
				/>

				<Btn targetUrl="/dashboard" label="Voltar" color="azul" />
				<Btn type="submit" label="Efetuar o Pagamento" color="laranja" />
				{errors}
				{loading ? <Loading /> : <></>}
			</form>
		</div>
	);
}

export default BoookingPayment;
