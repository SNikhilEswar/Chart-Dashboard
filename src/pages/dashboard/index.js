import { useState } from 'react';

// material-ui
import {
  // Avatar,
  // AvatarGroup,
  // Box,
  Button,
  Grid,
  // List,
  // ListItemAvatar,
  // ListItemButton,
  // ListItemSecondaryAction,
  // ListItemText,
  // MenuItem,
  // Stack,
  // TextField,
  // Typography
} from '@mui/material';

// project import
import GraphOne from './Cards/GarphOne';
import GraphTwo from './Cards/GraphTwo';
import GraphThree from './Cards/GraphThree';
import GraphFour from './Cards/GraphFour';
// assets




// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {

  const [data, setData] = useState([0.3, 0.1, 0.2, 0.4, 0.6, 0.5, 0.8, 0.1, 0.2]);
  const [graph2, setGraph2 ] = useState([10, 20, 30, 80, 50, 60]);
  const [graph3, setGraph3] = useState([
    { month: 'January', in: 0.5, out: 0.2 },
    { month: 'February', in: 0.7, out: 0.3 },
    { month: 'March', in: 0.6, out: 0.4 },
    { month: 'April', in: 0.9, out: 0.5 },
    { month: 'May', in: 1, out: 0.8 },
    { month: 'June', in: 0.8, out: 0.2 },
  ]);
  function createData(name, calories, fat) {
    return { name, calories, fat };
  }
  const [graph4, setGraph4] = useState([
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
  ])


  const generateRandomData = () => {
    const randomData = Array.from({ length: data.length }, () => Math.random());
    const randomData1 = Array.from({ length: graph2.length }, () => Math.floor(Math.random() * (100 - 10 + 1)) + 10);
     const randomData2 = graph3.map((item) => ({
      ...item,
      in: Math.random() * 0.8 + 0.1, // Random number between 0.1 and 0.9
      out: Math.random() * 0.8 + 0.1, // Random number between 0.1 and 0.9
    }));
    const randomData3 = graph4.map(row => {
      return createData(
        row.name,
        Math.floor(Math.random() * 1000), // Truncate the decimal part
        Math.floor(Math.random() * 20) // Truncate the decimal part
      );
    });
    setData(randomData);
    setGraph2(randomData1);
    setGraph3(randomData2);
    setGraph4(randomData3);
  };

  console.log(graph4);


  return (
    <>

    <div>
    <Button onClick={() => generateRandomData()}>Ramdom</Button>
    </div>

    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <GraphOne data={data} generateRandomData={generateRandomData} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <GraphTwo data={graph2} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
          <GraphThree data={graph3} />
        </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <GraphFour data={graph4}/>
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
    </Grid>
</>
  );
};

export default DashboardDefault;
