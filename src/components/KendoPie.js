import * as React from 'react';
import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartTitle } from '@progress/kendo-react-charts';
// import 'hammerjs';
const series = [{
  category: 'Ice melting',
  value: 0.65
}, {
  category: 'Wildfire',
  value: 0.12
}, {
  category: 'Ocean',
  value: 0.21
}, {
  category: 'Forest',
  value: 0.12
}, {
  category: 'Biodiversity',
  value: 0.0
}];

const labelContent = props => {
  let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2
  });
  return `${props.dataItem.category}: ${formatedNumber}`;
};

const ChartContainer = () => <Chart>
    <ChartTitle text='Tipping points category representation' />
    <ChartLegend position="bottom" />
    <ChartSeries>
      <ChartSeriesItem type="pie" data={series} field="value" categoryField="category" labels={{
      visible: true,
      content: labelContent
    }} />
    </ChartSeries>
  </Chart>;

// const ChartContainer = () => <Chart>
//     <ChartTitle text='World Population by Broad Age Groups' />
//     <ChartLegend position="bottom" />
//     <ChartSeries>
//       <ChartSeriesItem type="pie" data={series} field="value" categoryField="category" labels={{
//       visible: true,
//       content: labelContent
//     }} />
//     </ChartSeries>
//   </Chart>;

export default ChartContainer