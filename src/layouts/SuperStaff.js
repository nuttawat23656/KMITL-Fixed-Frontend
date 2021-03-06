import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/StaffNavbar";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "routes/superstaff.routes";
import Listitem2 from "components/SuperStaff/Listitem2"
import Editprofile from "components/SuperStaff/Editprofile"
import Changepassword from "components/SuperStaff/Changepassword"

class SuperStaff extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/superstaff") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/superstaff/index",
            imgSrc: require("assets/img/brand/kmitl-fixed2.png"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
          <Route path="/SuperStaff/Listitem2" component={Listitem2} />
            <Route path="/SuperStaff/Editprofile" component={Editprofile} />
            <Route path="/SuperStaff/Changepassword" component={Changepassword} />
            {this.getRoutes(routes)}
            <Redirect from="*" to="/superstaff/index" />
          </Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    );
  }
}

export default SuperStaff;
