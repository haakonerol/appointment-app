import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { doctorData } from "../helpers/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = () => {
  //   console.log(doctorData);

  const [show, setShow] = useState(false);
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map((doctor) => {
          const { id, name, img, dep } = doctor;
          return (
            <Col xs={6} md={4} lg={3} key={id}>
              <Image
                src={img}
                alt="doctor"
                className="img-thumbnail doctor-img"
                onClick={()=> setShow(true)}
              />
              <h5>{name}</h5>
              <p>{dep}</p>
            </Col>
          );
        })}
      </Row>
      <AddModal show={show} handleClose={()=>setShow(false)}/>
    </Container>
  );
};

export default Doctors;
