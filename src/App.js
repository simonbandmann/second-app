import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (      
    <Container maxWidth="lg" className="App-header">

  <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>This is some content.</Item>


  </Grid>
  <Grid item xs={4}>
    <Item>And some more.</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>

    </Container>
  );
}

export default App;
