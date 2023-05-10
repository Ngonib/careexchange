$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

// Pie Chart Code

function drawChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Confirmed", "Pending", "Unallocated"],
      datasets: [
        {
          label: "# of Shifts",
          data: [3, 6, 3],
          backgroundColor: [
            "rgba(255, 255, 255, 0.9)",
            "rgba(128, 128, 128, 0.9)",
            "rgba(192, 192, 192, 0.9)",
          ],
          borderColor: [
            "rgba(255, 255, 255, 1)",
            "rgba(128, 128, 128, 1)",
            "rgba(192, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });
}

// Bar Chart

function drawCharto() {
  var ctx = document.getElementById("barCharto").getContext("2d");
  var myCharto = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Confirmed", "Unallocated", "Pending", "Draft"],
      datasets: [
        {
          label: "Dataset 1",
          data: [400, 600, 140, 170],
          backgroundColor: "rgba(0, 0, 255, 0.2)",
          borderColor: "rgba(0, 0, 255, 0.2)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
