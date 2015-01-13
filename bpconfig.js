var respecConfig = {
    specStatus: "ED",
    shortName: "dwbp",
    //publishDate:  "2014-03-27",
    //previousPublishDate: "2014-03-27",
    //previousMaturity: "FPWD",
    //previousURI: "http://www.w3.org/TR/2014/WD-tabular-data-model-20140327/",
    edDraftURI: "http://w3c.github.io/dwbp/bp.html",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
      name: "Bernadette Farias Lóscio",
      company: "Centro de Informática - Universidade Federal de Pernambuco, Brazil",
      companyURL: "http://www.cin.ufpe.br/"
    }, {
			name: "Caroline Burle",
			company: "NIC.br, Brazil",
			companyURL: "http://nic.br/",
		}, {
			name: "Newton Calegari",
			company: "NIC.br, Brazil",
			companyURL: "http://nic.br/",
		}],
    otherLinks: [
    {
      key: "Contributors",
      data: [
      {
        value: "Christophe Guéret"
      },
      {
        value: "Phil Archer"
      },
      {
        value: "Ghislain A. Atemezing"
      }]
    }],
    wg: "Data on the Web Best Practices Working Group",
    wgURI: "http://www.w3.org/2013/dwbp/",
    wgPublicList: "public-dwbp-wg",
    wgPatentURI: "http://www.w3.org/2004/01/pp-impl/68239/status",
    inlineCSS: true,
    noIDLIn: true,
    noLegacyStyle: false,

    localBiblio: {
     "MOLLER": {
      title: "Lifecycle models of data-centric systems and domains: The abstract data lifecycle model",
      href: "http://www.semantic-web-journal.net/content/lifecycle-models-data-centric-systems-and-domains",
      authors: ["Knud Möller"],
      date: "2012",
      status: "Semantic Web 4.1: 67-88"
      },
      "ROSENTHAL": {
        title: "Transparent Format Migration of Preserved Web Content",
        authors: ["David Rosenthal", "Thomas Lipkis","Thomas Robertson","Seth Morabito"],
        date: "2004",
        status: "DLib Magazine"
      },
      "OKFN-INDEX": {
        title: "Global Open Data Index",
        href: "http://index.okfn.org/",
        authors: ["Open Knowledge Foundation"]

      },
      "BNF" : {
        title: "Reference information about authors, works, topics",
        authors: ["Bibliothèque nationale de France"],
        href: "http://data.bnf.fr/"
      },
      "LODC" : {
        title: "The Linking Open Data Cloud Diagram",
        authors: ["Max Schmachtenberg", "Christian Bizer", "Anja Jentzsch", "Richard Cyganiak"],
        href: "http://lod-cloud.net/"
      },
      "UCR" : {
        title: "Data on the Web Best Practices Use Cases & Requirements",
        authors: ["Deirdre Lee", "Bernadette Farias Lóscio", "Phil Archer"],
        href: "http://www.w3.org/TR/dwbp-ucr/",
        status: "Note"
      },

      "RDA" : {
        title: "Research Data Alliance",
        href: "http://rd-alliance.org"
      },
      "FORMATS": {
        title: "Unique URIs for File Formats",
        authors: ["Ivan Herman"],
        href: "http://www.w3.org/ns/formats/"
      },
      "cURL": {
        title: "cURL, a command line tool and library for transferring data with URL syntax",
        authors: ["Daniel Stenberg"],
        href: "http://curl.haxx.se/"
      },
     "ZAVERI" : {
	title: "Quality Assessment for Linked Data: A Survey",
	authors: ["Amrapali Zaveri", "Anisa Rula", "Andrea Maurino", "Ricardo Pietrobon", "Jens Lehmann", "Sören Auer"],
	href: "http://www.semantic-web-journal.net/system/files/swj773.pdf", 
	status: "submitted to Semantic Web Journal"
     },
      "ld-bp":{
        "authors":["Bernadette Hyland","Ghislain Auguste Atemezing","Boris Villazón-Terrazas"],
        "href":"http://www.w3.org/TR/ld-bp/",
        "title":"Best Practices for Publishing Linked Data",
        "status":"NOTE",
        "publisher":"W3C",
        "deliveredBy":[{"url":"http://www.w3.org/2011/gld/","shortname":"gld"}],
        "id":"ld-bp",
        "date":"9 January 2014"
      }, 
      "ld-glossary":{
        "authors":["Bernadette Hyland","Ghislain Auguste Atemezing","Michael Pendleton","Biplav Srivastava"],
        "href":"http://www.w3.org/TR/ld-glossary/",
        "title":"Linked Data Glossary",
        "status":"NOTE",
        "publisher":"W3C",
        "deliveredBy":[{"url":"http://www.w3.org/2011/gld/","shortname":"gld"}],
        "id":"ld-glossary",
        "date":"27 June 2013"
       }
    }
};
