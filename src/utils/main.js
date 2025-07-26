const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Ventas",
        backgroundColor: "#0285ff59",
        borderColor: "#0285ffff",
        borderWidth: 1.5,
        data: [],
      }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
    plugins: {
      datasource: {
        type: "csv",
        url: "utils/datos.csv",
        delimiter: ";",
        rowMapping: "index",
        datasetLabels: 'VentaTotal',
        indexLabels: 'Pais',
      }
    }
  }
});
