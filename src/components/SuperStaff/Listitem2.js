import React from "react";
//import React, { useState } from "react";
import { Link } from "react-router-dom";
// react plugin used to create google maps

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  CardHeader,
  CardBody,
  Button,
  CardTitle,
  Label,
  Input,
  Media,
  UncontrolledCollapse,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import Upwork from "components/Manager/Upwork";

class Listitem2 extends React.Component {
  fileObj = []; ///
  fileArray = []; ///

  constructor(props) {
    super(props);
    this.state = {
      file: [null], ///
      Statusselect: "ยังไม่เสร็จ",
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this); ///
    this.uploadFiles = this.uploadFiles.bind(this); ///
  }
  uploadMultipleFiles(e) {
    ///
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }
  uploadFiles(e) {
    ///
    e.preventDefault();
    console.log(this.state.file);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log("Status is", data);
  };
  handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({
      Statusselect: event.target.value,
      //[event.target.value]: event.target.value,
    });
  };

  render() {
    console.log("Listitem 2");
    const { Status } = this.state;
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
                    <h2>อัพเดตงาน</h2>
                  </div>
                </CardHeader>
                <Container className="list">
                  <Card className="card-stats mb-4 mb-lg-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            <h3>พัดลม</h3>
                          </CardTitle>
                          <span className="text-danger mr-1">
                            <i className="ni ni-pin-3" />
                          </span>
                          <Label for="Location">
                            อาคารพระจอมเกล้า ชั้น 3 ห้อง 212 :
                          </Label>
                          <Label for="Address">
                            : 785-212 ลาดกระบัง กรุงเทพฯ 10520
                          </Label>
                        </div>
                        {/** toggle */}
                        <Col className="col-auto" id="toggler1">
                          <h3>
                            <i className="ni ni-bold-down" />
                          </h3>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="ni ni-single-02" />
                          ผู้รับผิดชอบ
                        </span>
                        <span className="text-nowrap">นายสันดร นอนดึก</span>
                      </p>
                      <UncontrolledCollapse toggler="#toggler1">
                        <Card className="card-Collaps md-4">
                          <CardBody>
                            <Media tag="content-center">
                              <Media className="Media-center md-3">
                                <Media
                                  object
                                  src={require("assets/img/icons/common/fan.jpg")}
                                  alt="Generic placeholder image"
                                  style={{
                                    width: 300,
                                    height: 300,
                                  }}
                                />
                              </Media>
                            </Media>
                            <br />
                            <Label for="Detail">
                              -ใบพัดลมเสีย <br />
                              -ต้องเปลี่ยนใบพัด
                            </Label>

                            <br />

                            <br />
                            <Row>
                              <Col sm="1">
                                <Label for="Statusselect">สถานะ</Label>
                              </Col>
                              <Col
                                sm={{ size: "4", offset: 0 }}
                                //onSubmit={this.handleSubmit}
                              >
                                <Form onSubmit={this.handleSubmit}>
                                  <Card>
                                    <Input
                                      type="select"
                                      //placeholder="yourname"
                                      value={Status}
                                      //name="fullname"
                                      onChange={this.handleInputChange}
                                    >
                                      <option>ยังไม่เสร็จ</option>
                                      <option>กำลังดำเนินงาน</option>
                                      <option>เสร็จแล้ว</option>
                                    </Input>
                                  </Card>
                                  <Card className="card-stats mb-4 mb-lg-0">
                                    {/** Uploadimages */}
                                    <small>*อัพรูปภาพ</small>
                                    <Form>
                                      <div className="form-group multi-preview justify-content-center">
                                        {(this.fileArray || []).map((url) => (
                                          <img
                                            src={url}
                                            alt="..."
                                            style={{ width: 300, height: 300 }}
                                          />
                                        ))}
                                      </div>

                                      <div className="form-group">
                                        <input
                                          className="form-control"
                                          type="file"
                                          name="image-upload"
                                          accept="image/*"
                                          onChange={this.uploadMultipleFiles}
                                          multiple
                                        />
                                      </div>
                                    </Form>
                                    {/*<Upwork />*/}
                                  </Card>
                                  <Card>
                                    <Button
                                      className="content-center"
                                      color="primary"
                                      //to="/staff/Listitem"
                                      //tag={Link}
                                    >
                                      ส่งงาน
                                    </Button>
                                  </Card>
                                </Form>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                  {/**end of list */}
                </Container>
                {/* ถึงตรงนี้ */}
                <br />
                <br />
                <br />
              </Card>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </>
    );
  }
}

export default Listitem2;
