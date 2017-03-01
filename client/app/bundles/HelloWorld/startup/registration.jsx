import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import LoginForm from '../../Login/LoginForm';
// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  LoginForm,
});
