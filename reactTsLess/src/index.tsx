import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from './router';

class App extends React.Component<{}, {}> {
  readonly state = {
    
  }

  componentDidMount() {
    console.log('render');
  }

  getRouter() {
    return (
      <HashRouter>
        <Switch>
          {
            routes.map((route) => {
              const { path, exact, comp: RouteComponent, layout:LayoutComponent } = route;
              return <Route exact={exact} path={path}>
                {
                  LayoutComponent ?
                    <LayoutComponent>
                      <RouteComponent />
                    </LayoutComponent>:
                    <RouteComponent />
                }
              </Route>
            })
          }
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </HashRouter>
    );
  }

  render() {
    return <div>
      { this.getRouter() }
    </div>
  }
}

render(<App />, document.getElementById('container'));