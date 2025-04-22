import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helpers/data";
import { useState } from "react";

const Home = () => {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || [...appointmentData]
  );

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-warning">HOSPITAL</h1>
      <hr />
      <Doctors setAppointments={setAppointments} appointments={appointments} />
      <hr />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
