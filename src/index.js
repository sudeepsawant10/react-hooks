import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Component1 from './lifecycle/Component1'
import UseStateComponent1 from './useState/UseStateComponent1';
import UseMemoComponent1 from './useMemo/UseMemoComponent1';
import UseCallBackComponent1 from './useCallBack/UseCallBackComponent1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* lifecycle */}
    {/* <Component1/> */}

    {/* useState */}
    {/* <UseStateComponent1/> */}

    {/* useMemo */}
    {/* <UseMemoComponent1 /> */}

    {/* useCallBack */}
    <UseCallBackComponent1/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
