import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Container,
  Label,
  Row,
  Col,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

// mapTypeId={google.maps.MapTypeId.ROADMAP}
const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 13.726717, lng: 100.783186 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 13.726717, lng: 100.783186 }} />
    </GoogleMap>
  ))
);

class State2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleUsernameChange = (e) =>
    this.setState({
      username: e.currentTarget.value,
    });

  handlePasswordChange = (e) =>
    this.setState({
      password: e.currentTarget.value,
    });
  render() {
    // const { fullName, Password, Password2 } = this.state;
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3"></Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-center">
                    <h2>เปลียนรหัสผ่าน</h2>
                  </div>
                </CardHeader>
                {/* เอาโค้ดมาวางต่อข้างล่างนี้ */}
                {/*<div>
                  <h1>forms and input 1</h1>
                  <p>Full name is:{fullName}</p>
                  <form onSubmit={this.handleSubmit}>
                    <p>
                      <input
                        type="text"
                        //placeholder="yourname"
                        value={fullName}
                        name="fullname"
                        onChange={this.handleInputChange}
                      />
                    </p>
                    <p></p>
                  </form>
                  <form onSubmit={this.handleSubmit}>
                    <p>
                      <input
                        type="text"
                        //placeholder="yourname"
                        value={fullName}
                        name="fullname"
                        onChange={this.handleInputChange}
                      />
                    </p>
                    <p>
                      <button>send message</button>
                    </p>
                  </form>
                </div>*/}

                {/**<div>
                  <h1>forms select </h1>
                  <p>Full name is:{fullName}</p>
                  <Form onSubmit={this.handleSubmit}>
                    <p>
                      <Input
                        type="select"
                        //placeholder="yourname"
                        value={fullName}
                        //name="fullname"
                        onChange={this.handleInputChange}
                      >
                        <option>เสร็จ</option>
                        <option>ยังไม่เสร็จ</option>
                        <option>กำลังดำเนินงาน</option>
                      </Input>
                    </p>
                    <br />
                    <p>
                      <Button>send message</Button>
                    </p>
                  </Form>
                </div>*/}

                {/*<CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-center">
                    <h2>อัพเดตงาน</h2>
                  </div>
                  <Row>
                    <Col sm="1">
                      <Label for="Statusselect">สถานะ</Label>
                    </Col>
                    <Col
                      sm={{ size: "4", offset: 0 }}
                      //onSubmit={this.handleSubmit}
                    >
                      <Form onSubmit={this.handleSubmit}>
                        <p>
                          <Input
                            type="select"
                            //placeholder="yourname"
                            value={fullName}
                            //name="fullname"
                            onChange={this.handleInputChange}
                          >
                            <option>เสร็จ</option>
                            <option>ยังไม่เสร็จ</option>
                            <option>กำลังดำเนินงาน</option>
                          </Input>
                        </p>
                      </Form>

                      <Col sm={{ size: "4", offset: 0 }}>
                        <Form onSubmit={this.handleSubmit}>
                          <Input
                            type="password"
                            name="password"
                            value={Password}
                            onChange={this.componentDidMount}
                          />
                          <br />
                          {/*<Button className="content-center" color="primary">
                            sent
                          </Button>*/}
                {/* </Form>
                      </Col>
                      <Col sm={{ size: "4", offset: 0 }}>
                        <Form onSubmit={this.handleSubmit}>
                          <Input
                            type="password"
                            name="password"
                            value={Password2}
                            onChange={this.componentDidMount}
                          />
                          <br />
                          <Button className="content-center" color="primary">
                            sent
                          </Button>
                        </Form>
                      </Col>

                      <br />
                    </Col>
                  </Row>
                       </CardHeader>*/}

                <form>
                  <div>
                    <label>Username:</label>
                    <input type="text" onChange={this.handleUsernameChange} />
                  </div>
                  <div>
                    <label>Password:</label>
                    <input type="text" onChange={this.handlePasswordChange} />
                  </div>
                  <input type="submit" />
                </form>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* ถึงตรงนี้ */}
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default State2;
