function doSomething() {
  const el = document.getElementById("p1");
  el.style.color = "blue";
}

const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

const temperatures = [
  {
    min: 30,
    max: 40,
  },
  {
    min: 35,
    max: 40,
  },
  {
    min: 40,
    max: 60,
  },
  {
    min: 50,
    max: 80,
  },
  {
    min: 10,
    max: 30,
  },
  {
    min: 20,
    max: 60,
  },
  {
    min: 10,
    max: 80,
  },
  {
    min: 20,
    max: 90,
  },
  {
    min: 50,
    max: 80,
  },
];

const canvasHeight = 380;

function plotTemp(minTemp, maxTemp, index, scale = 2) {
  // for the height of the bar
  const tempDiff = scale * (maxTemp - minTemp);
  const maxTemPlot = canvasHeight - maxTemp * scale;
  const minTempPlot = canvasHeight - minTemp * scale;
  const barWidth = 25;
  // position in X axis where the bar should be plotted
  const graphPos = 20 + index * 60;
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(graphPos, maxTemPlot, barWidth, tempDiff);
  ctx.font = "14px Arial";
  ctx.fillText(maxTemp, graphPos + 5, maxTemPlot - 5);
  ctx.fillText(minTemp, graphPos + 5, minTempPlot + 15);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(graphPos + barWidth / 2, 0);
  ctx.lineTo(graphPos + barWidth / 2, maxTemPlot - 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(graphPos + barWidth / 2, canvasHeight);
  ctx.lineTo(graphPos + barWidth / 2, minTempPlot + 20);
  ctx.stroke();
}

temperatures.forEach((temp, index) => plotTemp(temp.min, temp.max, index));
