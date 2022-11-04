import React, { useState } from 'react'
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

  const [showBody, setshowBody] = useState(false)

  return (
    <React.Fragment>
      {showBody ? <Header /> : setshowBody}
     
        <Switch>
          <Route exact path="/" render={(props) => <Portfolio {...props} bodyfunc={setshowBody} authed={true} />} />
          <Route exact path="/AboutUs" render={(props) => <Aboutus {...props} bodyfunc={setshowBody} authed={true} />} />
          <Route exact path="/Projects" render={(props) => <Projects {...props} bodyfunc={setshowBody} authed={true} />} />
          <Route exact path="/Projects/:ID" render={(props) => <ProjectDetail {...props} bodyfunc={setshowBody} authed={true} />} />
          <Route exact path="/Contacts" render={(props) => <Contact {...props} bodyfunc={setshowBody} authed={true} />} />
          <Redirect to="/" />
        </Switch>
     
      {showBody ? <Footer /> : setshowBody}
    </React.Fragment>
  )
}
export default withRouter(App)
