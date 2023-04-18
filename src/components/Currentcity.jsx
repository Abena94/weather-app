import { React} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import moment from 'moment';


export default function Currentcity({ weather, setWeather}) {

  return (
    <>
    { Object.keys(weather).length &&
    <Container className="justify-content-center mt-2" fluid="md">
      <Row className="mt-5">
        <Col>{weather?.name},{weather?.sys?.country}</Col>
      </Row>
      <Row className="mt-5">
        <Col> <Image fluid src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`}  roundedCircle width={80} height={80} alt="weatherIcon"/> </Col>
        <Col>{weather?.main?.temp}F</Col>
      </Row>
      <Row className="mt-5">
        <Col>{weather?.weather[0]?.description}</Col>
      </Row>
      <Row className="mt-5">
        <Col>Day:{moment().format('dddd')} Date: {moment().format('LL')}</Col>
      </Row>
      <Row className="mt-5">
        <Col>Sunset:{new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString('en-IN')}</Col>
        <Col>Temp Max:{weather?.main?.temp_max}</Col>
        <Col>Pressure:{weather?.main?.pressure}</Col>
        <Col>Wind Deg:{weather?.wind?.deg}</Col>
      </Row>
      <Row className="mt-5">
        <Col>Sunrise{new Date(weather?.sys?.sunset * 1000).toLocaleTimeString('en-IN')}</Col>
        <Col>Temp Min:{weather?.main?.temp_min}</Col>
        <Col>Humidity:{weather?.main?.humidity}</Col>
        <Col>Wind Speed:{weather?.wind?.speed}</Col>
      </Row>
    </Container>
}
    </>
  );
}
