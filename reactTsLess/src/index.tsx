import * as React from 'react';
import { render } from 'react-dom';
import Styles from './styles/index.less';

interface PropsType {
  propName: string;
}

interface StateType {
  name: string
}

class App extends React.Component<PropsType, StateType> {
  readonly state = {
    name: "123"
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "" + new Date() });
    }, 300);
  }

  render() {
    return <div className={Styles.name}>Test {this.props.propName} {this.state.name }</div>;
  }
}

render(<App propName="propTest" />, document.getElementById('container'));