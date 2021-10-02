import React, { useContext } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import './VideoPlayer.css';

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <div className="paper">
          <div className="grid">
            <h1>{name || 'Name'}</h1>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="paper">
          <div className="grid">
            <h1>{call.name || 'Name'}</h1>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </div>
        </div>
      )}
    </Grid>
  );
};

export default VideoPlayer;
