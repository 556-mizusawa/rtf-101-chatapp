import React from 'react';
import { MessageObjects } from '../actions';

import ListItem from '@material-ui/core/ListItem';
import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { gravatarPath } from '../gravatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inline: {
      display: 'inline',
    },
  })
);

const MessageItem: React.FC<MessageObjects> = ({ name, text }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <ListItem divider={true}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
