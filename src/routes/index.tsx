import { useAuth } from '../context/authContext';

import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';

const Routes = () => {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
