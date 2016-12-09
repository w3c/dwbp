$( document ).ready(function() {
  var options = {
    responsive:true
  };


 /*GRAFICO DE EVIDENCIA POR BP */
  dataBarBP = {
    labels: ['BP1','BP2','BP3','BP4','BP5','BP6','BP7','BP8','BP9','BP10','BP11','BP12','BP13','BP14','BP15','BP16','BP17','BP18','BP19','BP20','BP21','BP22','BP23','BP24','BP25','BP26','BP27','BP28','BP29','BP30','BP31','BP32','BP33','BP34','BP35'],
    datasets: [{
      label: 'Evidence',
      data: [39,33,20,30,20,15,19,11,33,24,12,38,14,27,33,19,18,18,19,6,22,8,28,18,21,10,10,4,27,12,9,14,8,20,18],
      backgroundColor: "#36A2EB",
      hoverBackgroundColor: "#3498db"
    }]
  };


  var ctx = document.getElementById('graficoBarraBP').getContext('2d');
  var myPieChart = new Chart(ctx,{
      type: 'bar',
      data: dataBarBP,
      options: options
  });

/*FIM DO GRAFICO DE EVIDENCIA POR BP */

 /* GRAFICO DE EVIDENCIA POR DOMINIO */
var dataPieDominio = {
    labels: ["Agriculture and Rural Development", "Archive Documents","Biological Data","Cross Domain",
    "Cultural Heritage","Digital Inclusion","Digital Libraries","Education and Educational Administration", "Environment","Finance","Geographic Data","Government Data",
    "Healthcare","Impact Analysis","Literature and Folklore","Pharmaceutical Consumption","Scientific Research","Sports","Transport"],
    datasets: [
        { 
      label: 'Domain',
            data: [1,1,1,4,2,1,2,2,4,1,3,9,1,1,1,1,1,1,1], 
            backgroundColor:["#2ecc71",
                "#36A2EB",
                "#FFCE56",
                "#00008B",
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                "#e74c3c",
                "#4682B4",
                "#DC143C",
                "#5F9EA0",
                "#FF1493",
                "#4B0082",
                "#C71585",
                "#48D1CC",
                "#3CB371",
                "#BC8F8F",
                "#87CEEB"

                ],          
            hoverBackgroundColor:["#2ecc71",
                "#36A2EB",
                "#FFCE56",
                "#00008B",
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                "#e74c3c",
                "#4682B4",
                "#DC143C",
                "#5F9EA0",
                "#FF1493",
                "#4B0082",
                "#C71585",
                "#48D1CC",
                "#3CB371",
                "#BC8F8F",
                "#87CEEB"
                ]
        }]
};

var ctxDomain = document.getElementById('graficoPieDom').getContext('2d');
var PieChartDomain = new Chart(ctxDomain,{
    type: 'pie',
    data: dataPieDominio,
    options: options
});

/* FIM GRAFICO DE EVIDENCIA POR DOMINIO */


});




