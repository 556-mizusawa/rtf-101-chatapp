import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      height: '100vh',
      gridTemplateRows: '1fr auto',
    },
  })
);

const Main: React.FC<{ name: string }> = ({ name }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputField name={name} />
    </div>
  );
};

export default Main;
