// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

import { Card, CardContent, List, ListItem, ListItemAvatar, Avatar, ListItemText, CircularProgress, Typography, Divider } from '@mui/material';
import LoadingSpinner from './LoadingSpinner';

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner/>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (users.length === 0) {
    return <Typography>No data to show</Typography>;
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Users
        </Typography>
        <List>
          {users.map(user => (
            <React.Fragment key={user.id}>
              <ListItem button onClick={() => onSelectUser(user)} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={user.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={user.profile.username}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {user.profile.firstName} {user.profile.lastName}
                      </Typography>
                      {` — ${user.jobTitle}`}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UserList;
