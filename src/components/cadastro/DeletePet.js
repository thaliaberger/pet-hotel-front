import React, { useEffect } from "react";
import api from "../../api/HotelApi";

function DeletePet(props) {
  const { id } = props.match.params;

  useEffect(() => {
    async function deletePet() {
      try {
        await api.delete(`/pet/${id}`);
        props.history.push("/dashboard");
      } catch (err) {
        console.error(err);
      }
    }

    deletePet();
  }, [id, props.history]);

  return <div>Deleting...</div>;
}

export default DeletePet;
