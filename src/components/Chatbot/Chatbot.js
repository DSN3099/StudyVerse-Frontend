import React from 'react';

import SimpleChatbot from 'react-simple-chatbot';
import './Chatbot.css';

function Chatbot() {
 
  return (
    <div className="chatbot-container">
      <SimpleChatbot
        
        floating = {true}
        steps={[
          {
            id : "greet",
            message : "Hi nice to have you here how can i help you",
            trigger : "help"
            
          },
          {
            id : "help",
            options :[
              {value : 1 , label : "Edit profile" , trigger : "profile"},
              {value : 2 , label : "Switch roles" , trigger : "switch"},
              {value : 3 , label : "Roadmap" , trigger : "road"},
            ] ,
           
            
          },
          {
            id : "profile",
            message : "Click on the profile icon to update your profile",
            
          },
          {
            id : "switch",
            message : "Change your role from the button present on the navbar",
            
          },
          {
            id : "road",
            message : "To view course roamap follow the link below",
            
          }
          
          
        ]}
        
      />
      
    </div>
  );
}

export default Chatbot;
