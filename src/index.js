import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import './style.css';
import { App } from './components';

// const Hello = ({name, children}) => (
//    <div>
//       Hello, {name}!
//       {children}
//    </div>
// )

// Hello.propTypes = {
//    name: PropTypes.string.isRequired
// }

// const app = (
//    <Fragment>
//       <Hello name="Igor"></Hello>
//       <Hello name="Ivan"></Hello>
//       <Hello><div>Test</div></Hello>
//    </Fragment>
// )

ReactDOM.render(App, document.getElementById('root'))
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
