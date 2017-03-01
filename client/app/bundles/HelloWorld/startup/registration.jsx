import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import LoginForm from '../../Login/LoginForm';
import SignupForm from '../../Login/SignupForm';
import ComponentIndex from '../../Components/ComponentIndex';
// import ComponentForm from '../../Components/ComponentForm'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  LoginForm,
  SignupForm,
  ComponentIndex,
  // ComponentForm,

});
