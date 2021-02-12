import React, { useEffect, SetStateAction, useState } from 'react';
import { List } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import MessageItem from './MessageItem';
import { messagesRef } from '../firebase';
import { MessageObjects } from '../actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      gridRow: 1,
      overflow: 'auto',
      width: '100%',
    },
  })
);

const MessageList: React.FC<{}> = () => {
  const [messages, setMessages] = useState<SetStateAction<any>>([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(15)
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

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }: MessageObjects) => {
        return (
          <MessageItem key={key} name={name} text={text}>
            item
          </MessageItem>
        );
      })}
    </List>
  );
};

export default MessageList;
