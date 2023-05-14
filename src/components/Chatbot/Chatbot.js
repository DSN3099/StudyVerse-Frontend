import React from 'react';
import SimpleChatbot from 'react-simple-chatbot';
import './Chatbot.css';

function Chatbot() {
  return (
    <div className="chatbot-container">
      <SimpleChatbot
        floating={true}
        steps={[
          {
            id: "greet",
            message: "Hi nice to have you here how can i help you",
            trigger: "help",
          },
          {
            id: "help",
            options: [
              { value: 1, label: "Edit profile", trigger: "profile" },
              { value: 2, label: "How to Become a Teacher?", trigger: "switch" },
              { value: 3, label: "How to buy a course?", trigger: "buy" },
            ],
          },
          {
            id: "profile",
            message: "Click on the profile icon to update your profile",
          },
          {
            id: "switch",
            message: "You can become a teacher by clicking on the down arrow icon on the top of the home page screen.",
          },
          {
            id: "buy",
            message: "You can go to course info page and then add the course to the cart and then you can buy the course.",
          }
        ]}
      />
    </div>
  );
}

export default Chatbot;
