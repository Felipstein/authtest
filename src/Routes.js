import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
