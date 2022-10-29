import React from 'react'
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Pages/Common/Header';
import Portfolio from "./Pages/Portfolio"
import Aboutus from "./Pages/Aboutus"
import Projects from "./Pages/Projects"
import Footer from './Pages/Common/Footer';
import ProjectDetail from "./Pages/ProjectDetail"
import Contact from "./Pages/Contact"

export function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/AboutUs" component={Aboutus} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Projects/:ID" component={ProjectDetail} />
        <Route exact path="/Contacts" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}
export default withRouter(App)
