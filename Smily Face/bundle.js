(function (React,ReactDOM,d3) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const width = 960;
  const height = 500;
  const centerX = width/2;
  const centerY = height/2;
  const strokeWidth = 20;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 40;
  const mouthRadius=100;
  const mouthWidth=20;

  const mouthArc=d3.arc()
      .innerRadius(mouthRadius)
      .outerRadius(mouthRadius+mouthWidth)
      .startAngle(Math.PI/2)
      .endAngle(Math.PI*3/2);

  const App=()=>(
    React.createElement( 'svg', { width: width, height: height },
    React.createElement( 'g', { transform: `translate(${centerX},${centerY}) ` },
      React.createElement( 'circle', { 
        r: centerY-strokeWidth/2, fill: "yellow", stroke: "black", 'stroke-width': strokeWidth }),  
      React.createElement( 'circle', { 
        cx: -eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius, fill: "black" }),
      React.createElement( 'circle', { 
        cx: eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius, fill: "black" }),
        React.createElement( 'path', { d: mouthArc() })
    )
    )
  );

  const rootElement = document.getElementById('root');
  ReactDOM.render(React.createElement( App, null ), rootElement);

}(React,ReactDOM,d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGFyYyB9IGZyb20gJ2QzJ1xuXG5jb25zdCB3aWR0aCA9IDk2MDtcbmNvbnN0IGhlaWdodCA9IDUwMDtcbmNvbnN0IGNlbnRlclggPSB3aWR0aC8yO1xuY29uc3QgY2VudGVyWSA9IGhlaWdodC8yO1xuY29uc3Qgc3Ryb2tlV2lkdGggPSAyMDtcbmNvbnN0IGV5ZU9mZnNldFggPSA5MDtcbmNvbnN0IGV5ZU9mZnNldFkgPSAxMDA7XG5jb25zdCBleWVSYWRpdXMgPSA0MDtcbmNvbnN0IG1vdXRoUmFkaXVzPTEwMDtcbmNvbnN0IG1vdXRoV2lkdGg9MjBcblxuY29uc3QgbW91dGhBcmM9YXJjKClcbiAgICAuaW5uZXJSYWRpdXMobW91dGhSYWRpdXMpXG4gICAgLm91dGVyUmFkaXVzKG1vdXRoUmFkaXVzK21vdXRoV2lkdGgpXG4gICAgLnN0YXJ0QW5nbGUoTWF0aC5QSS8yKVxuICAgIC5lbmRBbmdsZShNYXRoLlBJKjMvMik7XG5cbmNvbnN0IEFwcD0oKT0+KFxuICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjZW50ZXJYfSwke2NlbnRlcll9KSBgfT5cbiAgICA8Y2lyY2xlIFxuICAgICAgcj17Y2VudGVyWS1zdHJva2VXaWR0aC8yfSBcbiAgICAgIGZpbGw9XCJ5ZWxsb3dcIlxuICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgc3Ryb2tlLXdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAvPiBcbiAgICA8Y2lyY2xlIFxuICAgICAgY3g9ey1leWVPZmZzZXRYfSBcbiAgICAgIGN5PXstZXllT2Zmc2V0WX1cbiAgICAgIHI9e2V5ZVJhZGl1c30gXG4gICAgICBmaWxsPVwiYmxhY2tcIlxuICAgIC8+XG4gICAgPGNpcmNsZSBcbiAgICAgIGN4PXtleWVPZmZzZXRYfSBcbiAgICAgIGN5PXstZXllT2Zmc2V0WX1cbiAgICAgIHI9e2V5ZVJhZGl1c30gXG4gICAgICBmaWxsPVwiYmxhY2tcIlxuICAgIC8+XG4gICAgICA8cGF0aCBkPXttb3V0aEFyYygpfS8+XG4gIDwvZz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW1lbnQpOyJdLCJuYW1lcyI6WyJhcmMiXSwibWFwcGluZ3MiOiI7Ozs7OztFQUlBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztFQUNsQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7RUFDbkIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN4QixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQ3pCLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztFQUN2QixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7RUFDdEIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO0VBQ3ZCLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztFQUNyQixNQUFNLFdBQVcsQ0FBQyxHQUFHLENBQUM7RUFDdEIsTUFBTSxVQUFVLENBQUMsR0FBRTs7RUFFbkIsTUFBTSxRQUFRLENBQUNBLE1BQUcsRUFBRTtPQUNmLFdBQVcsQ0FBQyxXQUFXLENBQUM7T0FDeEIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7T0FDbkMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFM0IsTUFBTSxHQUFHLENBQUM7SUFDUiw4QkFBSyxPQUFPLEtBQUssRUFBRSxRQUFRLE1BQU07SUFDakMsNEJBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7TUFDL0M7UUFDRSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUN4QixNQUFLLFFBQVEsRUFDYixRQUFPLE9BQU8sRUFDZCxnQkFBYyxXQUFXLEVBQUM7TUFFNUI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxVQUFVLEVBQ2YsR0FBRyxTQUFVLEVBQ2IsTUFBSyxTQUFPO01BRWQ7UUFDRSxJQUFJLFVBQVcsRUFDZixJQUFJLENBQUMsVUFBVyxFQUNoQixHQUFHLFNBQVUsRUFDYixNQUFLLFNBQU87UUFFWiwrQkFBTSxHQUFHLFFBQVEsRUFBRSxFQUFDLENBQUU7S0FDdEI7S0FDRTtHQUNQLENBQUM7O0VBRUYsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNwRCxRQUFRLENBQUMsTUFBTSxDQUFDLHFCQUFDLFNBQUcsRUFBRyxFQUFFLFdBQVcsQ0FBQzs7OzsifQ==