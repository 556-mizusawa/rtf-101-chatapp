import React from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { gravaterPath } from '../gravater';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      gridRow: 2,
      margin: 26,
    },
  })
);

const MessageInputField: React.FC<{ name: string }> = ({ name }) => {
  const classes = useStyles();
  const avatarPath = gravaterPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10}>入力</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
