google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Entreprise', 'mois'],
        ['Nuvia Ltd',1],
        ['AirStar',3],
        ['Electriduct',12],
        ['BMW',43],
        ]);

    // Set Options
    const options = {
    title:'Mon experience professionnelle (mois)',
    is3D:true
    };

    // Draw
    const chart = new google.visualization.PieChart(document.getElementById('myChart'));
    chart.draw(data, options);

}  