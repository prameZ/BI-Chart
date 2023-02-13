import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import configStackedPercentage from "./utils/configStackedPercentage";

const StackedPercentage = () => {
  return <HighchartsReact highcharts={Highcharts} options={configStackedPercentage} />;
};
export default StackedPercentage;
