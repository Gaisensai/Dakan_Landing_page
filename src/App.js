import { Box } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Navbar from './components/Navbar';
import { Hero, Property, About, Feature, Register } from './sections';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "pink",
    display: 'flex',
    alignItems: 'center',    
    width: "90px",
    height: '90%',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Navbar />
      <Hero />
      <Property />
      <About />
      <Feature />
      <Register />
    </Box>
  );
}

export default App;

