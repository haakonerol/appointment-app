import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) => {
    //  setAppointments(appointments?.filter((appo) => appo.id !== id));

    const newAppo = appointments?.filter((appo) => appo.id !== id);
    setAppointments(newAppo);
    localStorage.setItem("appointments", JSON.stringify(newAppo));
  };

  const handleToggle = (id) => {
    //  setAppointments(
    //    appointments?.map((appo) =>
    //      appo.id == id ? { ...appo, consulted: !appo.consulted } : appo
    //    )
    //  );
    const newAppo = appointments?.map((appo) =>
      appo.id == id ? { ...appo, consulted: !appo.consulted } : appo
    );
    setAppointments(newAppo)
    localStorage.setItem("appointments", JSON.stringify(newAppo))
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {appointments?.length ? (
        appointments.map(({ id, patient, day, consulted, doctor }) => (
          <Row
            key={id}
            className={
              "appointments justify-content-between align-items-center mx-auto" +
              (consulted ? " consulted" : "")
            }
          >
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>Date: {new Date(day).toLocaleDateString()}</h5>
              <h5>Time: {new Date(day).toLocaleTimeString()}</h5>
            </Col>
            <Col className="text-end">
              <TiTick
                type="button"
                className="display-3 text-success"
                onClick={() => handleToggle(id)}
              />
              <MdDeleteForever
                type="button"
                className="display-3 text-secondary"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        ))
      ) : (
        <img src="./img/appointment.jpg" alt="No appointments" width="60%" />
      )}
    </Container>
  );
};

export default AppointmentList;
