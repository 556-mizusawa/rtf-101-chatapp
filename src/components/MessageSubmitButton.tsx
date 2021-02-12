import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from '../firebase';
import { MessageProps } from '../actions';

const MessageSubmitButton: React.FC<MessageProps> = ({
  inputEl,
  name,
  setText,
  text,
}) => {
  return (
    <IconButton
      disabled={text === ''}
      onClick={() => {
        pushMessage({ name: '556', text });
        setText('');
        inputEl.current.focus();
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
