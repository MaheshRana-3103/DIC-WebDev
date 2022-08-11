import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
      id: '0',
      message: 'Hey !',
      trigger: '1',
  }, {
      id: '1',
      message: 'Please write your username',
      trigger: '2'
  }, {
      id: '2',
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger:'4',
  }, 
  {
    id:'4',
    user:true,
    trigger:'5',
  },
  {
      id: '5',
      message: " You Can see Your Cart by clicking on the Cart Icon.",
      trigger:'6',
  }
  ,{
    id:'6',
    user:true,
    trigger:'7',
  },
  {
    id: '7',
    message: " If you want to Add items in your cart simply click on Add to Cart.",
    trigger:'8',
  },
  {
    id:'8',
    message:"Any More Queries",
    trigger:'9',
  }
  ,{
    id:'9',
    user:true,
    trigger:"10",
  },{
    id:'10',
    message:'Have a Nice Day then',
    end:true,
  }
];
const theme = {
  background: 'white',
  headerBgColor: 'black',
  headerFontSize: '20px',
  botBubbleColor: 'black',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: 'white',
  userFontColor: 'black',
};

// Set some properties of the bot
const config = {
  floating: true,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ThemeProvider theme={theme}>
    <ChatBot
    headerTitle="Assistant"
    steps={steps}
    {...config}
    />
  </ThemeProvider>
  <App/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals