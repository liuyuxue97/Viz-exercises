(function (d3) {
  'use strict';

  const svg = d3.select('svg');

  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const render = data => {
    
    const xValue = d => d.population;
    const yValue = d => d.country;
    const margin = { top:30, right:60, bottom:30, left:100 };
    const innerwidth = width - margin.left - margin.right;
    const innerheight = height - margin.top - margin.bottom;
    
    const xScale = d3.scaleLinear()
    	.domain([0, d3.max(data, xValue)])
    	.range([0, innerwidth]);
    
    const yScale = d3.scaleBand()
    	.domain(data.map(yValue))
    	.range([0, innerheight])
    	.padding(0.1);
    
    const g = svg.append('g')
    	.attr('transform',`translate(${margin.left},${margin.top})`);
    
    g.append('g').call(d3.axisLeft(yScale));
    g.append('g').call(d3.axisBottom(xScale))
    .attr('transform',`translate(0,${innerheight})`);
    

    g.selectAll('rect').data(data)
    .enter().append('rect')
    	.attr('y', d => yScale(yValue(d)))
    	.attr('width', d => xScale(xValue(d)))
    	.attr('height', yScale.bandwidth());
  };

  d3.csv('data.csv').then(data => {
    data.forEach(d => {
      d.population = +d.population * 1000;
    });
    render(data);
  });

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbGVjdCwgY3N2LCBzY2FsZUxpbmVhciwgbWF4LCBzY2FsZUJhbmQsIGF4aXNMZWZ0LCBheGlzQm90dG9tIH0gZnJvbSAnZDMnO1xuXG5jb25zdCBzdmcgPSBzZWxlY3QoJ3N2ZycpO1xuXG5jb25zdCB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKTtcbmNvbnN0IGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5cbmNvbnN0IHJlbmRlciA9IGRhdGEgPT4ge1xuICBcbiAgY29uc3QgeFZhbHVlID0gZCA9PiBkLnBvcHVsYXRpb25cbiAgY29uc3QgeVZhbHVlID0gZCA9PiBkLmNvdW50cnlcbiAgY29uc3QgbWFyZ2luID0geyB0b3A6MzAsIHJpZ2h0OjYwLCBib3R0b206MzAsIGxlZnQ6MTAwIH07XG4gIGNvbnN0IGlubmVyd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICBjb25zdCBpbm5lcmhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICBcbiAgY29uc3QgeFNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICBcdC5kb21haW4oWzAsIG1heChkYXRhLCB4VmFsdWUpXSlcbiAgXHQucmFuZ2UoWzAsIGlubmVyd2lkdGhdKTtcbiAgXG4gIGNvbnN0IHlTY2FsZSA9IHNjYWxlQmFuZCgpXG4gIFx0LmRvbWFpbihkYXRhLm1hcCh5VmFsdWUpKVxuICBcdC5yYW5nZShbMCwgaW5uZXJoZWlnaHRdKVxuICBcdC5wYWRkaW5nKDAuMSk7XG4gIFxuICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG4gIFx0LmF0dHIoJ3RyYW5zZm9ybScsYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuICBcbiAgZy5hcHBlbmQoJ2cnKS5jYWxsKGF4aXNMZWZ0KHlTY2FsZSkpO1xuICBnLmFwcGVuZCgnZycpLmNhbGwoYXhpc0JvdHRvbSh4U2NhbGUpKVxuICAuYXR0cigndHJhbnNmb3JtJyxgdHJhbnNsYXRlKDAsJHtpbm5lcmhlaWdodH0pYCk7XG4gIFxuXG4gIGcuc2VsZWN0QWxsKCdyZWN0JykuZGF0YShkYXRhKVxuICAuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICBcdC5hdHRyKCd5JywgZCA9PiB5U2NhbGUoeVZhbHVlKGQpKSlcbiAgXHQuYXR0cignd2lkdGgnLCBkID0+IHhTY2FsZSh4VmFsdWUoZCkpKVxuICBcdC5hdHRyKCdoZWlnaHQnLCB5U2NhbGUuYmFuZHdpZHRoKCkpO1xufTtcblxuY3N2KCdkYXRhLmNzdicpLnRoZW4oZGF0YSA9PiB7XG4gIGRhdGEuZm9yRWFjaChkID0+IHtcbiAgICBkLnBvcHVsYXRpb24gPSArZC5wb3B1bGF0aW9uICogMTAwMDtcbiAgfSk7XG4gIHJlbmRlcihkYXRhKTtcbn0pOyJdLCJuYW1lcyI6WyJzZWxlY3QiLCJzY2FsZUxpbmVhciIsIm1heCIsInNjYWxlQmFuZCIsImF4aXNMZWZ0IiwiYXhpc0JvdHRvbSIsImNzdiJdLCJtYXBwaW5ncyI6Ijs7O0VBRUEsTUFBTSxHQUFHLEdBQUdBLFNBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7RUFFMUIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ2pDLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7RUFFbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJOztJQUVyQixNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVU7SUFDaEMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFPO0lBQzdCLE1BQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3pELE1BQU0sVUFBVSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7SUFFeEQsTUFBTSxNQUFNLEdBQUdDLGNBQVcsRUFBRTtNQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVDLE1BQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUM5QixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQzs7SUFFekIsTUFBTSxNQUFNLEdBQUdDLFlBQVMsRUFBRTtNQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUN4QixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7TUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUVmLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO01BQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUU5RCxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ0MsV0FBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUNDLGFBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7SUFHakQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQzdCLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDckIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNyQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0dBQ3RDLENBQUM7O0FBRUZDLFFBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJO0lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJO01BQ2hCLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUNyQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDZCxDQUFDOzs7OyJ9