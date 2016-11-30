$(function() {
  var options = {
    responsive:true
  };


 /*GRAFICO DE EVIDENCIA POR BP */
  dataBarBP = {
    labels: ['BP1','BP2','BP3','BP4','BP5','BP6','BP7','BP8','BP9','BP10','BP11','BP12','BP13','BP14','BP15','BP16','BP17','BP18','BP19','BP20','BP21','BP22','BP23','BP24','BP25','BP26','BP27','BP28','BP29','BP30','BP31','BP32','BP33','BP34','BP35'],
    datasets: [{
      label: 'Best Practices',
      data: [27,23,11,20,13,9,16,9,20,20,7,26,12,23,21,17,14,16,16,6,16,6,24,17,20,10,3,3,19,8,7,14,7,12,13],
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




 /*GRAFICO DE EVIDENCIA (Datasets and Data Portals) POR BP */
  dataBarBPDatasetsPortal = {
    labels: ['BP1','BP2','BP3','BP4','BP5','BP6','BP7','BP8','BP9','BP10','BP11','BP12','BP13','BP14','BP15','BP16','BP17','BP18','BP19','BP20','BP21','BP22','BP23','BP24','BP25','BP26','BP27','BP28','BP29','BP30','BP31','BP32','BP33','BP34','BP35'],
    datasets: [{
      label: 'Best Practices',
      data: [26,22,10,20,12,8,14,6,19,20,7,26,12,22,20,17,14,15,14,4,16,6,23,16,19,9,2,1,19,7,6,13,6,12,13],
      backgroundColor: "#36A2EB",
      hoverBackgroundColor: "#3498db"
    }]
  };


  var ctx = document.getElementById('graficoBarraBPDatasetsPortal').getContext('2d');
  var myPieChart = new Chart(ctx,{
      type: 'bar',
      data: dataBarBPDatasetsPortal,
      options: options
  });

/*FIM DO GRAFICO DE EVIDENCIA (Datasets and Data Portals) POR BP */




/*GRAFICO DE EVIDENCIA (Documents and References) POR BP */
  dataBarBPDocRef = {
    labels: ["BP3","BP5","BP6","BP7","BP8","BP9","BP26","BP27","BP28","BP30","BP31","BP32","BP33"],
    datasets: [{
      label: 'Best Practices',
      data: [1,1,1,2,3,1,1,1,2,1,1,1,1],
      backgroundColor: [
                "#2ecc71",
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
                "#FFD700",
                "#D2691E"

            ],
      hoverBackgroundColor: [
                "#2ecc71",
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
                "#FFD700",
                "#D2691E"          
            ],
    }]
  };

  var ctx = document.getElementById('graficoBarraBPDocRef').getContext('2d');
  var myPieChart = new Chart(ctx,{
      type: 'pie',
      data: dataBarBPDocRef,
      options: options
  });

/*FIM DO GRAFICO DE EVIDENCIA (Documents and References) POR BP */




/* GRAFICO EVIDENCIA POR DESAFIOS */
var dataDoughnutDesafios = {
    labels: ["Metadata","Data License","Provenance e Quality","Data Versioning","Data Identification","Data Formats","Data Vocabularies","Data Access","Data Preservation","Feedback","Data Enrichment","Data Republication"],
    datasets: [
        {
			label: 'Challenges',
            data: [58,20,20,20,46,60,36,136,3,26,19,31], 
            backgroundColor:"#3CB371",
            hoverBackgroundColor:"#3CB371"
        }]
};

var ctx = document.getElementById('graficoDoughnutDesafios').getContext('2d');
var DoughnutDesafios = new Chart(ctx,{
    type: 'bar',
    data: dataDoughnutDesafios,
    options: options
});
/* FIM DO GRAFICO EVIDENCIAS POR DESAFIO */




 /* GRAFICO DE EVIDENCIA POR DOMINIO */
 /* GRAFICO DE EVIDENCIA POR DOMINIO */
var dataPieDominio = {
    labels: ["Agriculture and Rural Development", "Archive Documents","Biological Data","Cross Domain","Cultural Heritage","Digital Inclusion","Digital Libraries","Education","Environment","Finance","Geographic Data","Government Data","Healthcare","Impact Analysis","Literature and Folklore","Pharmaceutical Consumption","Scientific Research","Sports","Transport"],
    datasets: [
        { 
      label: 'Domain',
            data: [1,1,1,3,2,1,1,2,4,1,3,9,1,1,1,1,1,1,1], 
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

var ctx = document.getElementById('graficoPieDom').getContext('2d');
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: dataPieDominio,
    options: options
});

/* FIM GRAFICO DE EVIDENCIA POR DOMINIO */

/* FIM GRAFICO DE EVIDENCIA POR DOMINIO */



/* GRAFICO DE ALCANCE DAS EVIDENCIAS */
/*
var dataDoughnutAlcance = {
    labels: ["Brazil","Europe","France","Global","Ireland","New Zeland","Spain","UK","USA"],
    datasets: [
        {
            data: [20,3,2,7,2,1,1,5,2], 
            backgroundColor: [
                "#2ecc71",
                "#36A2EB",
                "#FFCE56",
                "#00008B",
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                "#e74c3c"           
            ],
            hoverBackgroundColor: [
                "#2ecc71",
                "#36A2EB",
                "#FFCE56",
                "#00008B",
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                "#e74c3c"
            ]
        }]
};

var ctx = document.getElementById('graficoDoughnutAlcance').getContext('2d');
var DoughnutAlcance = new Chart(ctx,{
    type: 'doughnut',
    data: dataDoughnutAlcance,
    options: options
});
*/
/* FIM DO GRAFICO DE ALCANCE DAS EVIDENCIAS */


/*  Number of evidences per category */

dataPieCategory = {
    labels: ["Dataset","Data Portal","SPARQL endpoint","Vocabulary"],
    datasets: [{
      data: [49,6,1,1],
      backgroundColor: [
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                ],
      hoverBackgroundColor: [
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                ],
    }]
  };

  var ctx = document.getElementById('graficoPieCategory').getContext('2d');
  var graficoPieCategory = new Chart(ctx,{
      type: 'pie',
      data: dataPieCategory,
      options: options
  });

/*  fim Number of evidences per category */




/* USO DOS CATALOGOS DE DADOS */

dataPieCatalogos = {
    labels: ["CKAN","CKAN (datahub)","Proprietary","PublishMyData"],
    datasets: [{
      data: [17,2,21,2],
      backgroundColor: [
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                ],
      hoverBackgroundColor: [
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                ],
    }]
  };

  var ctx = document.getElementById('graficoPieCatalogos').getContext('2d');
  var graficoPieCatalogos = new Chart(ctx,{
      type: 'pie',
      data: dataPieCatalogos,
      options: options
  });

/* FIM DO USO DOS CATALOGOS DE DADOS */



/* NUVEM DE PALAVRAS DOMINIOS */

var words = [
  {text: "Agriculture and Rural Development", weight: 1},
  {text: "archive documents", weight: 1},
  {text: "Biological data", weight: 1},
  {text: "cross domain", weight: 3},
  {text: "cultural heritage", weight: 2},
  {text: "digital inclusion", weight: 1},
  {text: "digital libraries", weight: 1},
  {text: "Education", weight: 2},
  {text: "Environment", weight: 5},
  {text: "finance", weight: 2},
  {text: "Geographic data", weight: 4},
  {text: "Government data", weight: 27},
  {text: "Healthcare", weight: 1},
  {text: "impact analysis", weight: 1},
  {text: "Literature and Folklore", weight: 1},
  {text: "pharmaceutical consumption", weight: 1},
  {text: "scientific research", weight: 1},
  {text: "sports", weight: 1},
  {text: "Transport", weight: 1},

];

$('#demo').jQCloud(words);

/* FIM NUVEM DE PALAVRAS DOMINIOS */

});





