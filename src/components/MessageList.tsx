import React, { useEffect, SetStateAction, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { messagesRef } from '../firebase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      gridRow: 1,
    },
  })
);

const MessageList: React.FC<{}> = () => {
  const [messages, setMessages] = useState<SetStateAction<string | unknown>>(
    []
  );
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(3)
      .on('value', (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          const [key, nameAndText]: any = entry;
          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);

  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
