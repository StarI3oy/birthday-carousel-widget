import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>

    <div className='static'>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
            fontFamily: "TT Chocolates",
            colorBorder: "#d9b15a",
            lineWidth: 0,
          },
          components: {
            Button: {
              colorText: "#d9b15a",
            },
            Carousel: {
              colorBgContainer: "#d9b15a",
            },
            Spin: {
              colorPrimary: "#d9b15a",
            },
            Grid: {},
            Card: {},
          },
        }}
      >
        <App />
      </ConfigProvider >
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
