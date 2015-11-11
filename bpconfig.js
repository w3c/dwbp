var respecConfig = {
    specStatus: "ED",
    shortName: "dwbp",
    publishDate:  "2015-11-11",
    //previousPublishDate: "2015-05-18",
    //previousPublishDate: "2014-03-27",
    //previousMaturity: "FPWD",
    //previousURI: "http://www.w3.org/TR/2014/WD-tabular-data-model-20140327/",
    edDraftURI: "http://w3c.github.io/dwbp/bp.html",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
      name: "Bernadette Farias Lóscio",
      company: "CIn - UFPE, Brazil",
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
        value: "Annette Greiner"
      },
      { 
        value: "Antoine Isaac"
      },
      {
        value: "Carlos Iglesias"
      },      
      { 
        value: "Carlos Laufer"
      },
      {
        value: "Christophe Guéret"
      },
      { 
        value: "Eric G. Stephan"
      },
      { 
        value: "Eric Kauz"
      },      
      {
        value: "Ghislain A. Atemezing"
      },
      { 
        value: "Ig Ibert Bittencourt"
      },   
      { 
        value: "João Paulo Almeida"
      },   
      { 
        value: "Manuel Tomas Carrasco"
      },  
      {
        value: "Phil Archer"
      },
      { 
        value: "Riccardo Albertoni"
      },
      { 
        value: "Sumit Purohit"
      },   
      { 
        value: "Yasodara Córdova"
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
    	"CC-VOCAB" : {
    		title : "Creative Commons Rights Expression Language",
    		href : "http://creativecommons.org/ns"
    	},
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
      "UCR" : {
        title: "Data on the Web Best Practices Use Cases & Requirements",
        authors: ["Deirdre Lee", "Bernadette Farias Lóscio", "Phil Archer"],
        href: "http://www.w3.org/TR/dwbp-ucr/",
        status: "Note"
      },
      "DUV" : { 
	title: "Data on the Web Best Practices: Dataset Usage Vocabulary",
        authors: ["Bernadette Farias Lóscio", "Eric G. Stephan", "Sumit Purohit"],
        href: "http://www.w3.org/TR/vocab-duv/",
        status: "Public Working Draft"
     },
     "DQV" : { 
	title: "Data Quality Vocabulary",
        authors: ["Riccardo Albertoni", "Christophe Guéret", "Antoine Isaac","Jeremy Debattista", "Makx Dekkers", "Deirdre Lee"],
        href: "http://www.w3.org/TR/vocab-dqv/",
        status: "Public Working Draft"
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
      "ODI-LICENSING": {
        title: "Publisher's Guide to Open Data Licensing",
        authors: ["Open Data Institute"],
        href: "http://theodi.org/guides/publishers-guide-open-data-licensing"
      },
     "ZAVERI" : {
	title: "Quality Assessment for Linked Data: A Survey",
	authors: ["Amrapali Zaveri", "Anisa Rula", "Andrea Maurino", "Ricardo Pietrobon", "Jens Lehmann", "Sören Auer"],
	href: "http://www.semantic-web-journal.net/system/files/swj773.pdf", 
	status: "submitted to Semantic Web Journal"
     },
      "RICHARDSON": {
        title: "RESTful Web Services: Web services for the real world",
        authors: ["Leonard Richardson", "Sam Ruby"],
        date: "2007",
        status: "O'Reilly Media"
      },
      "SchemaVer": {
        title: "Introducing SchemaVer for semantic versioning of schemas",
        authors: ["Alex Dean"],
        date: "2014",
        href: "http://snowplowanalytics.com/blog/2014/05/13/introducing-schemaver-for-semantic-versioning-of-schemas/"
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
       }, 
      "ISO-25964":{
        "authors":["Stella Dextre Clarke et al"],
        "href":"http://www.niso.org/schemas/iso25964/",
        "title":"ISO 25964 – the international standard for thesauri and interoperability with other vocabularies",
        "publisher":"ISO/NISO",
        "id":"ISO 25964"
       }, 
      "ORG":{
        "authors":["Dave Reynolds"],
        "href":"http://www.w3.org/TR/vocab-org/",
        "title":"The Organization Ontology",
        "status":"W3C Recommendation",
        "publisher":"W3C",
        "deliveredBy":[{"url":"http://www.w3.org/2011/gld/","shortname":"gld"}],
        "id":"vocab-org",
        "date":"16 January 2014"
       }, 
      "QB":{
        "authors":["Richard Cyganiak","Dave Reynolds"],
        "href":"http://www.w3.org/TR/vocab-data-cube/",
        "title":"The RDF Data Cube Vocabulary",
        "status":"W3C Recommendation",
        "publisher":"W3C",
        "deliveredBy":[{"url":"http://www.w3.org/2011/gld/","shortname":"gld"}],
        "id":"vocab-data-cube",
        "date":"16 January 2014"
       }, 
      "ccREL":{
        "authors":["Hal Abelson","Ben Adida","Mike Linksvayer","Nathan Yergler"],
        "href":"http://www.w3.org/Submission/ccREL/",
        "title":"ccREL: The Creative Commons Rights Expression Language",
        "status":"W3C Member Submission",
        "publisher":"W3C/Creative Commons",
        "date":"1 May 2008"
       }, 
      "ODRL":{
        "authors":["Renato Iannella","Susanne Guth","Daniel Paehler","Andreas Kasten"],
        "href":"http://www.w3.org/community/odrl/two/model/",
        "title":"ODRL Version 2.0 Core Model",
        "status":"W3C Community Group Specification",
        "publisher":"W3C",
        "date":"24 April 2012"
       }, 
      "ODRS":{
        "authors":["Leigh Dodds"],
        "href":"http://schema.theodi.org/odrs/",
        "title":"Open Data Rights Statement Vocabulary",
        "publisher":"The Open Data Institute",
        "date":"29 July 2013"
       }, 
      "SCHEMA-ORG":{
        "href":"http://schema.org/",
        "title":"Schema.org"
       }, 
      "PROV-IMP":{
        "authors":["Trung Dong Huynh","Paul Groth","Stephan Zednik"],
        "href":"http://www.w3.org/TR/prov-implementations/",
        "title":"PROV Implementation Report",
        "status":"W3C Working Group Note",
        "publisher":"W3C",
        "deliveredBy":[{"url":"http://www.w3.org/2011/prov/","shortname":"prov"}],
        "date":"30 April 2013"
       }, 
      "RFC7809":{
        "authors":["H. Van de Sompel","M.L. Nelson ","R.D. Sanderson"],
        "href":"http://www.mementoweb.org/guide/rfc/",
        "title":"HTTP Framework for Time-Based Access to Resource States -- Memento",
        "status":"Independent Submission (Informational)",
        "publisher":"IETF",
        "date":"December 2013"
       }, 
      "OAIS":{
        "authors":["ISO/TC 20/SC 13"],
        "href":"http://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=57284",
        "title":"Space data and information transfer systems -- Open archival information system (OAIS) -- Reference model",
        "status":"ISO Standard",
        "publisher":"ISO",
        "id":"ISO 14721:2012",
        "date":"21 August 2012"
       }, 
      "DCAT":{
        "authors":["Fadi Maali", "John Erickson"],
        "href":"http://www.w3.org/TR/vocab-dcat/",
        "title":"Data Catalog Vocabulary (DCAT)",
        "status":"W3C Recommendation",
        "date":"16 January 2014"
       }, 
      "CSV":{
        "authors":["Y. Shafranovich"],
        "href":"https://www.ietf.org/rfc/rfc4180.txt",
        "title":"Common Format and MIME Type for Comma-Separated Values (CSV) Files",
        "status":"RFC 4180",
        "date":"October 2005"
       },
      "Navathe": {
 	"authors": ["Ramez Elmasri", "Shamkant B. Navathe"],        
	"title": "Fundamentals of Database Systems",
        "date": "2010",
        "publisher": "Addison Wesley"
      },
      "HCLS": {
        authors: ["Alasdair J.G. Gray", "Joachim Baran", "M. Scott Marshall", "Michel Dumontier"],
	title: "Dataset Descriptions: HCLS Community Profile",
 	"href":"http://www.w3.org/TR/vocab-dcat/", 
        "publisher": "W3C"
      },
      "Lexvo": {
	title: "Lexvo.org",
 	"href":"http://www.lexvo.org/" 
       
      },
    }
};
