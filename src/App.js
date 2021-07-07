import React from "react";
import BodyComponent from "./components/bodyComponent";
import Footer from "./components/Footer";
import HeaderComponent from "./components/headerComponent";
import FormComponent from "./components/FormComponent/form";
import NotFoundError from "./components/404Error";

import { Switch, Route ,Redirect} from "react-router-dom";

export const MainComponentDisplay = () => (
  <div>
    <HeaderComponent />
    <BodyComponent />
    <Footer />
  </div>
);
export const FormMainComponent = () => (
  <div>
    <HeaderComponent />
    <FormComponent />
    <Footer />
  </div>
);

const Routes = () => (
  <Switch>
    <Route
      exact
      path='/feedback_and_grievance'
      render={() => <FormMainComponent />}
    />
    <Route exact path='/' render={() => <MainComponentDisplay />} />
   
    <Route
      exact
      path='*'
      render={() => (
        <Redirect to="/"/>
      )}
    />
  </Switch>
);

export default function App() {
  return <Routes />;
}
