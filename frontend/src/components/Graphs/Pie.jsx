import ReactECharts from "echarts-for-react";

function Pie({ data }) {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      bottom: 0,
    },
    series: [
      {
        type: "pie",
        radius: "60%",
        center: ["50%", "45%"],
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "300px", width: "100%" }} />;
}

export default Pie;
