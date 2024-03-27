import React from "react";
import { v4 as uuidv4 } from 'uuid';

const question = {
  'message_id': uuidv4(),
  'request_type': 'question:message',
  'request': {
    'question': '⚡Ударила молния⚡'
  }
};
const question_error = {
  'message_id': uuidv4(),
  'request_type': 'question:error',
  'request': {
    'question': '⚡Ударила молния⚡'
  }
};
const websocket = new WebSocket("ws://192.168.0.100:4005/");
const MessageSocket = () => {
  
  const onSendMessage = () => {
    websocket.send(JSON.stringify(question));
  }
  const onSendMessageError = () => {
    websocket.send(JSON.stringify(question_error));
  }
  return (
    <div>
        <button onClick={() => {onSendMessage()}}>SOCKET</button>
        <button onClick={() => {onSendMessageError()}}>SOCKET ERROR</button>
    </div>
  );
}
export default MessageSocket;