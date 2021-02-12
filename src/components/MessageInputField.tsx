import React, { useRef, useState } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { gravatarPath } from '../gravatar';
import MessageFeild from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      gridRow: 2,
      margin: 26,
    },
  })
);

const MessageInputField: React.FC<{ name: string }> = ({ name }) => {
  const inputEl = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>('');
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageFeild
            name={name}
            setText={setText}
            text={text}
            inputEl={inputEl}
          />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
