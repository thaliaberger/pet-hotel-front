import React, { useEffect } from "react";
import api from "../../api/HotelApi";

function BookingDelete(props) {
	const { id } = props.match.params;

	useEffect(() => {
		async function deleteBooking() {
			try {
				await api.delete(`/booking/${id}`);
				props.history.push("/dashboard");
			} catch (err) {
				console.error(err);
			}
		}
		deleteBooking();
	}, [id, props.history]);

	return <div>Deleting...</div>;
}

export default BookingDelete;
