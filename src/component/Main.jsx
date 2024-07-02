import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import UserList from './UserList';
import UserDetails from './UserDetails';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        User List
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <UserList onSelectUser={setSelectedUser} />
        </Grid>
        <Grid item xs={8}>
          <UserDetails user={selectedUser} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
