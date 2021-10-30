import { BrowserRouter, Route } from 'react-router-dom';

import Endereco from '../pages/Endereco';
import Home from '../pages/Home';

const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/endereco" component={Endereco} />
    </BrowserRouter>
  );
};

export default OtherRoutes;
