import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {
    MenuItem,
    TextField,
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';



const GraphOne = ({ data, generateRandomData }) => {
    const svgRef = useRef();
  
    const [selectesC, setSelecteC] = useState({});
     const [course] = useState([
      { id: 1, month: 'January', data: [0.2, 0.1, 0.3, 0.2, 0.4, 0.7, 0.4, 0.9, 0.1] },
      { id: 2, month: 'February', data: [0.3, 0.1, 0.2, 0.4, 0.6, 0.5, 0.8, 0.1, 0.2] },
      { id: 3, month: 'March', data: [0.2, 0.9, 0.6, 0.3, 0.1, 0.5, 0.4, 0.2, 0.3] },
      { id: 4, month: 'April', data: [0.4, 0.1, 0.3, 0.2, 0.4, 0.7, 0.4, 0.9, 0.1] },
      { id: 5, month: 'May', data: [0.3, 0.1, 0.3, 0.2, 0.1, 0.2, 0.4, 0.6, 0.1] },
      { id: 6, month: 'June', data: [0.2, 0.3, 0.1, 0.6, 0.5, 0.2, 0.8, 0.1, 0.3] },
      { id: 7, month: 'July', data: [0.3, 0.1, 0.2, 0.3, 0.4, 0.7, 0.5, 0.4, 0.2] },
      { id: 8, month: 'August', data: [0.2, 0.3, 0.1, 0.2, 0.4, 0.6, 0.7, 0.2, 0.1] },
      { id: 9, month: 'September', data: [0.7, 0.2, 0.6, 0.2, 0.4, 0.9, 0.4, 0.2, 0.1] },
      { id: 10, month: 'October', data: [0.9, 0.4, 0.2, 0.1, 0.6, 0.1, 0.6, 0.1, 0.2] },
      { id: 11, month: 'November', data: [0.8, 0.4, 0.1, 0.5, 0.4, 0.6, 0.4, 0.3, 0.1] },
      { id: 12, month: 'December', data: [0.2, 0.1, 0.3, 0.2, 0.4, 0.7, 0.4, 0.9, 0.1] },
      // ... rest of the months
    ]);
  
    const handleValuesC = (e) => {
      const eventVal = e.target.value;
      setSelecteC(eventVal);
      generateRandomData();
    };
  
    useEffect(() => {
      const svg = d3.select(svgRef.current);
  
      // Define the dimensions and margins for the chart
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const width = 550 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;
  
      // Clear existing chart
      svg.selectAll("*").remove();
  
      if (data.length > 0) {
        // Create scales
        const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, width]);
        const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);
  
        // Create the line generator
        const line = d3.line().x((d, i) => xScale(i)).y((d) => yScale(d)).curve(d3.curveNatural);
  
        // Create the chart group
        const chart = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  
        // Add the fluctuating line to the chart
        chart
          .append('path')
          .datum(data)
          .attr('fill', 'none')
          .attr('stroke', '#55bc55')
          .attr('stroke-width', 2)
          .attr('d', line);
  
        // Add x-axis at the bottom
        chart
          .append('g')
          .attr('transform', `translate(0, ${height})`)
          .call(d3.axisBottom(xScale).ticks(12).tickFormat((d) => ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'][d]))
          .selectAll('text') // Rotating the x-axis labels
          .attr('transform', 'rotate(-45)')
          .style('text-anchor', 'end');
      }
    }, [selectesC, data]);
  
    return (
      <>
        {/* ... your other components ... */}
        <MainCard
          title="Checking account"
          secondary={
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: 240 }}>
                <TextField select fullWidth value={'Manage'} label="Select Type">
                  <MenuItem value={'Manage'}>Manage</MenuItem>
                </TextField>
  
                <TextField
                  select
                  value={selectesC}
                  onChange={handleValuesC}
                  fullWidth
                  label="Select Course"
                >
                  {course.map((sel, index) => (
                    <MenuItem value={sel} key={index}>
                      {sel.month}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </>
          }
        >
          <svg ref={svgRef} width={530} height={300}></svg>
   </MainCard>
      </>
    );
  };
  
export default GraphOne;



// const GraphOne = ({data}) => {
//     const svgRef = useRef();

//     useEffect(() => {
//         const svg = d3.select(svgRef.current);

//         // Define the dimensions and margins for the chart
//         const margin = { top: 20, right: 30, bottom: 30, left: 40 };
//         const width = 550 - margin.left - margin.right;
//         const height = 300 - margin.top - margin.bottom;

//         // Create scales
//         const xScale = d3.scaleLinear().domain([0, 11]).range([0, width]);
//         const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

//         // Create the line generator
//         const line = d3.line().x((d, i) => xScale(i)).y((d) => yScale(d)).curve(d3.curveNatural);

//         // Create the chart group
//         const chart = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

//         // Generate random data for the fluctuating line
//         const data = generateRandomData(50);

//         // Add the fluctuating line to the chart
//         chart
//             .append('path')
//             .datum(data)
//             .attr('fill', 'none')
//             .attr('stroke', '#55bc55')
//             .attr('stroke-width', 2)
//             .attr('d', line);

//         // Add x-axis at the bottom
//         chart
//             .append('g')
//             .attr('transform', `translate(0, ${height})`)
//             .call(d3.axisBottom(xScale).ticks(12).tickFormat((d) => ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'][d]))
//             .selectAll('text')  // Rotating the x-axis labels
//             .attr('transform', 'rotate(-45)')
//             .style('text-anchor', 'end');

//     }, []);
//     const [selectesC, setSelecteC] = useState({});
//     const [course] = useState([
//         { id: 1, month: 'January', data: [] },
//         { id: 2, month: 'February', data: [] },
//         { id: 3, month: 'March', data: [] },
//         { id: 4, month: 'April', data: [] },
//         { id: 5, month: 'May', data: [] },
//         { id: 6, month: 'June', data: [] },
//         { id: 7, month: 'July', data: [] },
//         { id: 8, month: 'August', data: [] },
//         { id: 9, month: 'September', data: [] },
//         { id: 10, month: 'October', data: [] },
//         { id: 11, month: 'November', data: [] },
//         { id: 12, month: 'December', data: [] },
//     ]);

//     const handleValuesC = (e) => {
//         setSelecteC(e.target.value);
//     };

//     return (
//         <>
//             <MainCard title="Checking account" secondary={
//                 <>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: 240 }}>

//                     <TextField select fullWidth value={"Manage"} label="Select Type">
//                             <MenuItem value={"Manage"}>Manage</MenuItem>
//                         </TextField>

//                         <TextField
//                             select
//                             value={selectesC}
//                             onChange={handleValuesC}
//                             fullWidth
//                             label="Select Course"
//                         >
//                             {course.map((sel, index) => (
//                                 <MenuItem value={sel} key={index}>
//                                     {sel.month}
//                                 </MenuItem>
//                             ))}
//                         </TextField>
//                     </div>
//                 </>
//             }>
//                 <svg ref={svgRef} width={530} height={300}></svg>
//             </MainCard>
//         </>
//     );
// };

// Import statements...

// const GraphOne = ({ data, generateRandomData }) => {
//     const svgRef = useRef();

//     const [selectesC, setSelecteC] = useState({});
//     const [course] = useState([
//       { id: 1, month: 'January', data: [0.2, 0.1, 0.3, 0.2, 0.4, 0.7, 0.4, 0.9, 0.1] },
//       { id: 2, month: 'February', data: [0.3, 0.1, 0.2, 0.4, 0.6, 0.5, 0.8, 0.1, 0.2] },
//       { id: 3, month: 'March', data: [0.2, 0.9, 0.6, 0.3, 0.1, 0.5, 0.4, 0.2, 0.3] },
//       { id: 4, month: 'April', data: [0.4, 0.1, 0.3, 0.2, 0.4, 0.7, 0.4, 0.9, 0.1] },
//       { id: 5, month: 'May', data: [0.3, 0.1, 0.3, 0.2, 0.1, 0.2, 0.4, 0.6, 0.1] },
//       { id: 6, month: 'June', data: [0.2, 0.3, 0.1, 0.6, 0.5, 0.2, 0.8, 0.1, 0.3] },
//       { id: 7, month: 'July', data: [0.3, 0.1, 0.2, 0.3, 0.4, 0.7, 0.5, 0.4, 0.2] },
//       { id: 8, month: 'August', data: [0.2, 0.3, 0.1, 0.2, 0.4, 0.6, 0.7, 0.2, 0.1] },
//       { id: 9, month: 'September', data: [0.7, 0.2, 0.6, 0.2, 0.4, 0.9, 0.4, 0.2, 0.1] },
//       { id: 10, month: 'October', data: [0.9, 0.4, 0.2, 0.1, 0.6, 0.1, 0.6, 0.1, 0.2] },
//       { id: 11, month: 'November', data: [0.8, 0.4, 0.1, 0.5, 0.4, 0.6, 0.4, 0.3, 0.1] },
//       { id: 12, month: 'December', data: [0.2, 0.1, 0.3, 0.2, 0.4, 0.7, 0.4, 0.9, 0.1] },
//       // ... rest of the months
//     ]);
  

//     const handleValuesC = (e) => {
//         const eventVal = e.target.value
//       setSelecteC(eventVal);
//       generateRandomData();
//     };
  
//     useEffect(() => {
//       const svg = d3.select(svgRef.current);
  
//       // Define the dimensions and margins for the chart
//       const margin = { top: 20, right: 30, bottom: 30, left: 40 };
//       const width = 550 - margin.left - margin.right;
//       const height = 300 - margin.top - margin.bottom;
  
//       // Create scales
//       const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, width]);
//       const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);
  
//       // Create the line generator
//       const line = d3.line().x((d, i) => xScale(i)).y((d) => yScale(d)).curve(d3.curveNatural);
  
//       // Create the chart group
//       const chart = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  
//       // Add the fluctuating line to the chart
//       chart
//         .append('path')
//         .datum(data)
//         .attr('fill', 'none')
//         .attr('stroke', '#55bc55')
//         .attr('stroke-width', 2)
//         .attr('d', line);
  
//       // Add x-axis at the bottom
//       chart
//         .append('g')
//         .attr('transform', `translate(0, ${height})`)
//         //.call(d3.axisBottom(xScale).ticks(data.length).tickFormat((d) => d.toString())) // Adjusted x-axis ticks
//         .call(d3.axisBottom(xScale).ticks(12).tickFormat((d) => ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'][d]))
//         .selectAll('text') // Rotating the x-axis labels
//         .attr('transform', 'rotate(-45)')
//         .style('text-anchor', 'end');
//     }, [selectesC, data]);
  
 
  
//     return (
//       <>
//         <MainCard
//           title="Checking account"
//           secondary={
//             <>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: 240 }}>
//                 <TextField select fullWidth value={'Manage'} label="Select Type">
//                   <MenuItem value={'Manage'}>Manage</MenuItem>
//                 </TextField>
  
//                 <TextField
//                   select
//                   value={selectesC}
//                   onChange={handleValuesC}
//                   fullWidth
//                   label="Select Course"
//                 >
//                   {course.map((sel, index) => (
//                     <MenuItem value={sel} key={index}>
//                       {sel.month}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//               </div>
//             </>
//           }
//         >
//           <svg ref={svgRef} width={530} height={300}></svg>
//         </MainCard>
//       </>
//     );
//   };