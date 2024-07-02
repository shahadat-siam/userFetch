// src/App.js
import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material'; 
import UserList from './component/UserList';
import UserDetails from './component/UserDetails';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom>
        User List
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <UserList onSelectUser={setSelectedUser} />
        </Grid>
        <Grid item xs={12} md={8}>
          <UserDetails user={selectedUser} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
