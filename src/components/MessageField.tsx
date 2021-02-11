import React, { Dispatch, useState } from 'react';
import { TextField } from '@material-ui/core';

import { pushMessage } from '../firebase';

interface MessageInputFieldProps {
  name: string;
  setText: Dispatch<string>;
  text: string;
}

const MessageField: React.FC<MessageInputFieldProps> = ({
  name,
  setText,
  text,
}) => {
  const [isComposed, setIsComposed] = useState<boolean>(false);

  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e: any) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === '') return;

        if (e.key === 'Enter') {
          pushMessage({ name: '556', text });
          setText('');
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
      value={text}
    />
  );
};

export default MessageField;
