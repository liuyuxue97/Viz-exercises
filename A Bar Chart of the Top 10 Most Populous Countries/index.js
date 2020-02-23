import { select, csv, scaleLinear, max, scaleBand, axisLeft, axisBottom } from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
  
  const xValue = d => d.population
  const yValue = d => d.country
  const margin = { top:30, right:60, bottom:30, left:100 };
  const innerwidth = width - margin.left - margin.right;
  const innerheight = height - margin.top - margin.bottom;
  
  const xScale = scaleLinear()
  	.domain([0, max(data, xValue)])
  	.range([0, innerwidth]);
  
  const yScale = scaleBand()
  	.domain(data.map(yValue))
  	.range([0, innerheight])
  	.padding(0.1);
  
  const g = svg.append('g')
  	.attr('transform',`translate(${margin.left},${margin.top})`);
  
  g.append('g').call(axisLeft(yScale));
  g.append('g').call(axisBottom(xScale))
  .attr('transform',`translate(0,${innerheight})`);
  

  g.selectAll('rect').data(data)
  .enter().append('rect')
  	.attr('y', d => yScale(yValue(d)))
  	.attr('width', d => xScale(xValue(d)))
  	.attr('height', yScale.bandwidth());
};

csv('data.csv').then(data => {
  data.forEach(d => {
    d.population = +d.population * 1000;
  });
  render(data);
});