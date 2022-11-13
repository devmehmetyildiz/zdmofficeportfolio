import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Pages/Common/Header';
import Portfolio from "./Pages/Portfolio"
import Aboutus from "./Pages/Aboutus"
import Projects from "./Pages/Projects"
import Products from "./Pages/Products"
import Footer from './Pages/Common/Footer';
import ProjectDetail from "./Pages/ProjectDetail"
import ProductDetail from "./Pages/ProductDetail"
import Contact from "./Pages/Contact"
import { connect } from 'react-redux'
import { SetLogin } from './Redux/actions/LoginAction';
export const App = (props) => {
  const [showBody, setshowBody] = useState(false)

  useEffect(() => {
    props.SetLogin()
  }, [])

  return (
    <React.Fragment>
      {showBody ? <Header /> : setshowBody}
      <Switch>
        <Route exact path="/" render={(props) => <Portfolio {...props} bodyfunc={setshowBody} />} />
        <Route exact path="/AboutUs" render={(props) => <Aboutus {...props} bodyfunc={setshowBody} />} />
        <Route exact path="/Projects" render={(props) => <Projects {...props} bodyfunc={setshowBody} />} />
        <Route exact path="/Projects/:ID" render={(props) => <ProjectDetail {...props} bodyfunc={setshowBody} />} />
        <Route exact path="/Products" render={(props) => <Products {...props} bodyfunc={setshowBody} />} />
        <Route exact path="/Products/:ID" render={(props) => <ProductDetail {...props} bodyfunc={setshowBody} />} />
        <Route exact path="/Contacts" render={(props) => <Contact {...props} bodyfunc={setshowBody} />} />
        <Redirect to="/" />
      </Switch>

      {showBody ? <Footer /> : setshowBody}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { SetLogin }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
