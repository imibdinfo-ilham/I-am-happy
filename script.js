
// Date Wise Profit Earned Chart

const profitCanvas = document.getElementById("profitChart");

new Chart(profitCanvas, {
  type: "bar",

  data: {
    labels: [
      "11-11",
      "12-11",
      "13-11",
      "14-11",
      "15-11",
      "16-11",
      "17-11"
    ],

    datasets: [{
      label: "Profit Amount",
      data: [170, 95, 127, 131, 15, 206, 97],

      backgroundColor: "#781d4d",
      borderColor: "#a64c79",
      borderWidth: 1,
      borderRadius: 2
    }]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false
      }
    },

    scales: {
      x: {
        ticks: {
          color: "#ffb300"
        },
        grid: {
          color: "#333"
        }
      },

      y: {
        beginAtZero: true,
        max: 250,

        ticks: {
          color: "#ffb300"
        },

        grid: {
          color: "#555"
        },

        title: {
          display: true,
          text: "Profit Amount",
          color: "#aaa"
        }
      }
    }
  }
});


// Total Asset Pie Chart

const assetCanvas = document.getElementById("assetChart");

new Chart(assetCanvas, {
  type: "doughnut",

  data: {
    labels: [
      "Hand Cash",
      "Stock",
      "Due",
      "Decoration"
    ],

    datasets: [{
      data: [25.4, 42.6, 27.8, 4.2],

      backgroundColor: [
        "#27a65b",
        "#1254cb",
        "#d34226",
        "#761a48"
      ],

      borderWidth: 0,
      hoverOffset: 8
    }]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    cutout: "48%",

    plugins: {
      legend: {
        position: "left",

        labels: {
          color: "#00d875",
          padding: 12,
          boxWidth: 12
        }
      }
    }
  }
});


// Navigation

const buttons = document.querySelectorAll(".navigation button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const page = button.dataset.page;

    document.getElementById("pageTitle").textContent = page;

    document.getElementById("pageDescription").textContent =
      page === "Dashboard"
        ? "Welcome to Ilham Family Shop Management System."
        : page + " section selected.";

  });

});

