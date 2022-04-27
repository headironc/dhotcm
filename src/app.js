import { Component } from "react";
import { Provider } from "react-redux";

import configStore from "./redux/store";
import { loginStart } from "./redux/actions/userAction";

import "./app.scss";

const store = configStore();

class App extends Component {
  onLaunch() {
    store.dispatch(loginStart());
  }

  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
