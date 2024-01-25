import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
// project import
import MainCard from 'components/MainCard';

const GraphTwo = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    if (!data || data.length === 0) {
      return;
    }

    const svg = d3.select(ref.current);

    // Define the dimensions and margins for the chart
    const margin = { top: 20, right: 30, bottom: 60, left: 40 };
    const width = 550 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => i))
      .range([0, width])
      .padding(0.80); // Adjust the padding for smaller bars

    // Create the chart group
    const chart = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Draw bars
    chart
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => xScale(i))
      .attr('y', (d) => height - d) // Adjusted y position to start from the top
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => d)
      .attr('fill', '#55bc55');

    // Customize x-axis ticks and labels
    chart
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(data.length) // Set the number of ticks to the number of data points
          .tickFormat((_, i) => {
            if (i === 0) return 'Older';
            return `Jan ${i * 7 + 1}-${i * 7 + 7}`;
          })
      )
      .selectAll('text') // Rotating the x-axis labels
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    // Remove y-axis

    // Remove borders
    chart.selectAll('path.domain, g.tick line').remove();
  }, [data]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainCard title="Invoice owed to you" secondary={
        <Button variant="outlined" color="blue" onClick={handleClickOpen}>New Sales Invoice</Button>
      }>
        <svg ref={ref} width={530} height={318}></svg>
      </MainCard>

      <Dialog
        open={open}
        keepMounted
        maxWidth={'sm'}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"New Sales Invoice"}</DialogTitle>
        <DialogContent style={{ textAlign: 'center' }}>
          <DialogContentText id="alert-dialog-slide-description">
            <p>To Upload a File Please Click on Upload file</p>
          </DialogContentText>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

    </>
  );
};

export default GraphTwo;
