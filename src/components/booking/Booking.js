import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Accommodation from "./Accommodation";
import "./Booking.css";
import api from "../../api/HotelApi";

const storedUser = localStorage.getItem("loggedInUser");
const loggedInUser = JSON.parse(storedUser || '""');

function Booking() {
	const [pets, setPets] = useState({});
	const [booking, setBooking] = useState({
		startDate: new Date(),
		endDate: null,
		room: "",
		pets: [],
	});

	const [screen, setScreen] = useState({ rooms: [], totalAmonunt: 0 });

	useEffect(() => {
		async function fetchPets() {
			try {
				const response = await api.get("/pet");
				console.log(response);
				setPets({ ...response.data });
				console.log(pets);
			} catch (err) {
				console.error(err.response);
			}
		}
		fetchPets();
	}, []);

	async function handleChangeDates(event) {
		const [startDate, endDate] = event;
		setBooking({ ...booking, startDate, endDate });
		if (startDate && endDate) {
			const result = await api.get(
				`booking/search?startDate=${startDate.toJSON()}&endDate=${endDate.toJSON()}`
			);
			setScreen({ ...screen, rooms: result.data.bookings });
		}
	}

	function handleClickAcc(event) {
		setBooking({ ...booking, romm: event.currentTarget.id });
	}

	return (
		<div className="container">
			<div>
				<DatePicker
					selected={booking.startDate}
					onChange={handleChangeDates}
					startDate={booking.startDate}
					endDate={booking.endDate}
					selectsRange
					inline
				/>
			</div>
			<div>
				{screen.rooms.map((el) => (
					<Accommodation
						key={el._id}
						value={el.value}
						type={el.type}
						name={el.name}
						qtd={el.capacity}
						onClick={handleClickAcc}
						id={el._id}
					/>
				))}
			</div>
		</div>
	);
}

export default Booking;
