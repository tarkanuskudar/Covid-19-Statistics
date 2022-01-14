$.ajax({
  type: "get",
  url: "https://api.covid19api.com/summary",
  success: function (response) {

    for (let i = 0; i < response.Countries.length; i++) {
      let tablerow = `<tr> <td>${response.Countries[i].Country}</td> <td>${response.Countries[i].NewConfirmed}</td> <td>${response.Countries[i].TotalConfirmed}</td> <td>${response.Countries[i].TotalRecovered}</td> <td>${response.Countries[i].TotalDeaths}</td></tr>`;
      $("#tbody").append(tablerow);
    }
    $("#covid-table").DataTable({
      pageLength: 20,
      lengthMenu: [20, 50, 100],
    });
  },
  error: function (error) {
    console.log(error);
  },
});
