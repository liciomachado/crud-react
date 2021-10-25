import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Endereco from '../pages/Endereco';

const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/endereco" component={Endereco} />
    </BrowserRouter>
  );
};

export default OtherRoutes;
