import { Switch as Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />

      <Route component={Home} />
    </Routes>
  );
}
