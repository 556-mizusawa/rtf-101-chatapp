import React, { useEffect, useRef } from 'react';
import { MessageObjects } from '../actions';

import ListItem from '@material-ui/core/ListItem';
import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import { gravatarPath } from '../gravatar';

const useStyles = makeStyles(() =>
  createStyles({
    inline: {
      display: 'inline',
    },
  })
);

const MessageItem: React.FC<MessageObjects> = ({ isLastItem, name, text }) => {
  const ref = useRef<HTMLDivElement | any>(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
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
