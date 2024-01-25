import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import MainCard from 'components/MainCard';
import './style.css';

const StackedBarGraph = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);

    const months = data.map(entry => entry.month);

    const xScale = d3.scaleBand()
      .domain(months)
      .range([0, 500])
      .padding(0.85);

    const yScale = d3.scaleLinear()
      .domain([0, 5])
      .range([0, 318]);

    const colorScale = d3.scaleOrdinal()
      .domain(['in', 'out'])
      .range(['#55bc55', '#17cc7c']);

    const stack = d3.stack()
      .keys(['in', 'out'])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const stackedData = stack(data);

    svg.selectAll('*').remove(); // Remove all child elements

    svg.selectAll('g')
      .data(stackedData)
      .enter()
      .append('g')
      .attr('fill', d => colorScale(d.key))
      .selectAll('rect')
      .data(d => d)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.data.month))
      .attr('y', d => 318 - yScale(d[1]))
      .attr('height', d => yScale(d[1] - d[0]))
      .attr('width', xScale.bandwidth());

    svg.append('g')
      .attr('transform', `translate(0, ${320})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, [data]);

  return (
    <MainCard title="Total Cash flow" secondary={
      <div>
        <button className='green'></button> <span>In</span>
        <button className='lightGreen'></button> <span>Out</span>
      </div>
    }>
      <svg ref={ref} width={530} height={350} />
    </MainCard>
  );
};

export default StackedBarGraph;
