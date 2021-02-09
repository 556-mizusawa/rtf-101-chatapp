import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      gridRow: 1,
    },
  })
);

const MessageList: React.FC<{}> = () => {
  const classes = useStyles();
  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
