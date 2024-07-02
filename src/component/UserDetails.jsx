// src/components/UserDetails.js
import React from 'react';
import './UserDetails.css';

import { Card, CardContent, Typography, Avatar, Grid, Divider, Box } from '@mui/material';

const UserDetails = ({ user }) => {
  if (!user) {
    return <Typography>Select a user to see details</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar src={user.avatar} sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item>
            <Typography variant="h4">{user.profile.firstName} {user.profile.lastName}</Typography>
            <Typography variant="subtitle1" color="textSecondary">@{user.profile.username}</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 2 }} />
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6">Contact Information</Typography>
          <Typography>Email: {user.profile.email}</Typography>
          {/* <Typography>Phone: {user.phone}</Typography>
          <Typography>Address: {user.address}</Typography> */}
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6">Job Details</Typography>
          <Typography>Job Title: {user.jobTitle}</Typography>
          <Typography>Bio: {user.Bio}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserDetails;
