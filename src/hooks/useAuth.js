import { useSelector } from 'react-redux';
import {
    getUser,
    getToken,
    getLoggedIn,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(getUser);
  const token = useSelector(getToken);

  
  return {
    isLoggedIn,
    // isRefreshing,
    user,
    token, 
  };
};