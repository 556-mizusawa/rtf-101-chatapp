import React from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      gridRow: 2,
      margin: 26,
    },
  })
);

const MessageInputField: React.FC<{ name: string }> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar />
        </Grid>
        <Grid xs={10}>入力</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
