import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetchUserQuery, useLogOutUserMutation} from '../../redux/auth/authSlice';
import {tokenAuth, logInAuth} from '../../redux/auth/auth-actions';
import {getToken} from "../../redux/auth/auth-selectors";
import {getIsLogInAuth} from "../../redux/auth/auth-selectors";

import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";



export default function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const token = useSelector(getToken);
  const isLogInAuth = useSelector(getIsLogInAuth);

  const { data: user } = useFetchUserQuery(token);
  const [logout] = useLogOutUserMutation(token);

  const logoutUser = (token) => {
            logout(token);
            dispatch(logInAuth(false));
            dispatch(tokenAuth(''));
            history.push('/login');
            console.log('log out');
        }
        
console.log(user?.name);
 return (
    <div>
      <h1 className="text-center">Phonebook</h1>
      <ContactForm />
      <h2 className="text-center">Contacts</h2>
      <Filter />
      <ContactList />


      {!user ? 
      (<><div>{user?.name}</div>
      <button type='button' onClick={() => logoutUser(token)} >LogOut</button></>) : <button type='button' onClick={() => logoutUser(token)} >LogOut</button>}

    </div>
  );
}
