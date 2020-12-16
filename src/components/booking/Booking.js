import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Accommodation from "./Accommodation";
import PetPicker from "./PetPicker";
import "./Booking.css";
import api from "../../api/HotelApi";

const storedUser = localStorage.getItem("loggedInUser");

function Booking() {
	const [pets, setPets] = useState([]);
	const [screen, setScreen] = useState({ rooms: [], totalAmonunt: 0 });
	const [booking, setBooking] = useState({
		startDate: new Date(),
		endDate: null,
		accommodation_id: "",
		pets: [],
		days: 0,
		valUnit: 0,
		errorMsg: "",
		payment: false,
		value: 0,
	});

	function handleAccommodation(event) {
		console.log(event.currentTarget.getAttribute("preco"));
		setBooking({
			...booking,
			accommodation_id: event.currentTarget.id,
			valUnit: parseInt(event.currentTarget.getAttribute("preco")),
		});
	}
	function handlePet(event) {
		setBooking({ ...booking, pets: [...booking.pets, event.currentTarget.id] });
	}
	useEffect(() => {
		async function fetchPets() {
			try {
				const response = await api.get("/pet/");
				setPets([...response.data.pets]);
			} catch (err) {
				console.error(err.response);
			}
		}
		fetchPets();
	}, [booking]);

	async function handleChangeDates(event) {
		const [startDate, endDate] = event;
		let days = 0;

		if (startDate && endDate) {
			const result = await api.get(
				`booking/search?startDate=${startDate.toJSON()}&endDate=${endDate.toJSON()}`
			);
			days = Math.ceil(
				Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
			);
			setScreen({ ...screen, rooms: result.data.bookings });
		} else {
			setScreen({ ...screen, rooms: [] });
		}
		setBooking({ ...booking, startDate, endDate, days });
	}

	async function submitBooking() {
		if (booking.pets === [] || !booking.days || !booking.valUnit) {
			setBooking({
				...booking,
				errorMsg: "Favor verificar as informações antes de continuar",
			});
		} else {
			setBooking({
				...booking,
				value: booking.days * booking.valUnit * booking.pets.length,
			});

			const result = await api.post(`booking`, booking);
		}
	}

	return (
		<div className="container">
			<div>
				<h3>Selecione o período:</h3>
				<DatePicker
					selected={booking.startDate}
					onChange={handleChangeDates}
					startDate={booking.startDate}
					endDate={booking.endDate}
					selectsRange
					inline
				/>
				<h3>Selecione os hóspedes:</h3>
				{pets.map((pet) => (
					<PetPicker
						key={pet._id}
						id={pet._id}
						name={pet.name}
						picture={pet.picture}
						checked={booking.pets.includes(pet._id) ? true : false}
						onClick={handlePet}
					/>
				))}
			</div>
			<div>
				<h3>Selecione uma opção de acomodação:</h3>
				{screen.rooms.map((el) => {
					return (
						<Accommodation
							key={el._id}
							value={el.value}
							type={el.type}
							name={el.name}
							qtd={el.capacity}
							checked={el._id === booking.accommodation_id ? true : false}
							id={el._id}
							onClick={handleAccommodation}
						/>
					);
				})}
				<div>
					<h3>Resumo da Reserva</h3>
					<p>Diárias: {booking.days}</p>
					<p>Valor da Diária: R$ {booking.valUnit.toFixed(2)}</p>
					<p>Quantidade de hóspedes: {booking.pets.length}</p>
					<p>
						Valor total da reserva: R${" "}
						{(booking.days * booking.valUnit * booking.pets.length).toFixed(2)}
					</p>
					<button
						className="botao-laranja"
						type="button"
						onClick={submitBooking}
					>
						Finalizar reserva
					</button>
					{booking.errorMsg}
				</div>
			</div>
		</div>
	);
}

export default Booking;
