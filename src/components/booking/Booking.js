import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Accommodation from "./Accommodation";
import "./Booking.css";

const storedUser = localStorage.getItem("loggedInUser");
const loggedInUser = JSON.parse(storedUser || '""');

function Booking() {
	const [booking, setBooking] = useState({
		startDate: new Date(),
		endDate: null,
		room: "",
		pets: [],
	});

	const [screen, setScreen] = useState({ rooms: [], totalAmonunt: 0 });

	// useEffect(()=>{

	// },[])

	async function handleChangeDates(event) {
		const [startDate, endDate] = event;
		setBooking({ ...booking, startDate, endDate });
		if (startDate && endDate) {
			const result = await axios.get(
				//	`http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/booking/search?startDate=${booking.startDate}&endDate=${booking.endDate}`
				`http://localhost:4000/api/booking/search?startDate=${startDate.toJSON()}&endDate=${endDate.toJSON()}`
			);
			setScreen({ ...screen, rooms: result.data.bookings });
		}
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
					/>
				))}
			</div>
		</div>
	);
}

export default Booking;
