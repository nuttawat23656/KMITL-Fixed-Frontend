import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

class ManagerNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        Panuwat Khrai-udom (manager)
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem to="/manager/profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  <DropdownItem to="/manager/Editprofile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>แก้ไขประวัติส่วนตัว</span>
                  </DropdownItem>
                  <DropdownItem to="/manager/Changpassword" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>เปลี่ยนรหัสผ่าน</span>
                  </DropdownItem>
                  <DropdownItem to="/manager/Assignjob" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Assignjob</span>
                  </DropdownItem>
                  <DropdownItem to="/manager/Report" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Report</span>
                  </DropdownItem>
                  <DropdownItem to="/manager/Tables" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Table</span>
                  </DropdownItem>
                  <DropdownItem to="/manager/History" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>History</span>
                  </DropdownItem>
                  <DropdownItem to="/staff/Contacts" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Contacts</span>
                  </DropdownItem>
                  {/*<DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
    </DropdownItem>*/}
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ManagerNavbar;