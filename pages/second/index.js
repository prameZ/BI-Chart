import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

const getOptions = (type) => ({
  chart: {
    type,
    width: 500,
    height: 300,
  },
  title: {
    text: _.startCase(`${type} chart`),
  },
  yAxis: {
    title: {
      text: "Values",
    },
  },
  series: [
    {
      data: ["sunny", 85, 85, "FALSE", "no"],
    },
    {
      data: ["sunny", 80, 90, "TRUE", "no"],
    },
    {
      data: ["overcast", 83, 86, "FALSE", "yes"],
    },
    {
      data: ["rainy", 70, 96, "FALSE", "yes"],
    },
    {
      data: ["rainy", 68, 80, "FALSE", "yes"],
    },
    {
      data: ["rainy", 65, 70, "TRUE", "no"],
    },
    {
      data: ["overcast", 64, 65, "TRUE", "yes"],
    },
    {
      data: ["sunny", 72, 95, "FALSE", "no"],
    },
    {
      data: ["sunny", 69, 70, "FALSE", "yes"],
    },
    {
      data: ["rainy", 75, 80, "FALSE", "yes"],
    },
    {
      data: ["sunny", 75, 70, "TRUE", "yes"],
    },
    {
      data: ["overcast", 72, 90, "TRUE", "yes"],
    },
    {
      data: ["overcast", 81, 75, "FALSE", "yes"],
    },
    {
      data: ["rainy", 71, 91, "TRUE", "no"],
    },

    // {
    //   data: ["sunny", 1275, "FALSE", "no"],
    // },
    // {
    //   data: ["sunny", 1340, "TRUE", "no"],
    // },
    // {
    //   data: ["overcast", 1287, "FALSE", "yes"],
    // },
    // {
    //   data: ["rainy", 1414, "FALSE", "yes"],
    // },
    // {
    //   data: ["rainy", 1188, "FALSE", "yes"],
    // },
    // {
    //   data: ["rainy", 1045, "TRUE", "no"],
    // },
    // {
    //   data: ["overcast", 974, "TRUE", "yes"],
    // },
    // {
    //   data: ["sunny", 1402, "FALSE", "no"],
    // },
    // {
    //   data: ["sunny", 1049, "FALSE", "yes"],
    // },
    // {
    //   data: ["rainy", 1195, "FALSE", "yes"],
    // },
    // {
    //   data: ["sunny", 1055, "TRUE", "yes"],
    // },
    // {
    //   data: ["overcast", 1332, "TRUE", "yes"],
    // },
    // {
    //   data: ["overcast", 1131, "FALSE", "yes"],
    // },
    // {
    //   data: ["rainy", 1345, "TRUE", "no"],
    // },
  ],
});

const Second = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={getOptions("line")} />
      {/* <HighchartsReact highcharts={Highcharts} options={getOptions("spline")} />
      <HighchartsReact highcharts={Highcharts} options={getOptions("area")} />
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions("areaspline")}
      />
      <HighchartsReact highcharts={Highcharts} options={getOptions("column")} />
      <HighchartsReact highcharts={Highcharts} options={getOptions("bar")} />
      <HighchartsReact highcharts={Highcharts} options={getOptions("pie")} /> */}
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions("scatter")}
      />
    </div>
  );
};

export default Second;
