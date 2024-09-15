import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import './Chatbot.css'; // Import custom CSS file for additional styling

function Chatbot() {
  const steps = [
    {
      id: 'Fruits',
      message: 'Which fruit are you interested in?',
      trigger: 'fruitOptions'
    },
    {
      id: 'fruitOptions',
      options: [
        { value: 'Orange', label: 'Orange', trigger: 'Orange' },
        { value: 'Tangerine', label: 'Tangerine', trigger: 'Tangerine' },
        { value: 'Cucumber', label: 'Cucumber', trigger: 'Cucumber' }
      ]
    },
    {
      id: 'Orange',
      message: 'Oranges are available at $2.50 per kg.',
      end: true
    },
    {
      id: 'Tangerine',
      message: 'Tangerines are available at $3.00 per kg.',
      end: true
    },
    {
      id: 'Cucumber',
      message: 'Cucumbers are available at $1.80 per kg.',
      end: true
    }
  ];

  return (
    <div className="chatbot-container">
      <Segment floated="right">
        <ChatBot steps={steps} />
      </Segment>
    </div>
  );
}

export default Chatbot;
