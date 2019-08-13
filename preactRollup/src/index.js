import { render, Component } from 'preact';
import Base from '_/components/base/index.js';
import './index.less';

class App extends Component {
  render() {

    return <Base>
      <div home>
        CConf
      </div>
    </Base>;
  }
}

render(<App />, document.getElementById('container'));