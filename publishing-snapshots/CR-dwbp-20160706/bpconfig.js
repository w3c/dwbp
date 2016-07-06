var respecConfig = {
    specStatus: "ED",
    shortName: "dwbp",
    publishDate:  "2016-07-06",
    previousPublishDate: "2015-06-25",
    previousMaturity: "WD",
    previousURI: "http://www.w3.org/TR/2015/WD-dwbp-20160112/",
    edDraftURI: "http://w3c.github.io/dwbp/bp.html",
     lcEnd: "2016-06-12",
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
        value: "Deirdre Lee"
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
        value: "Hadley Beeman"
      },
      {
        value: "Ig Ibert Bittencourt"
      },
      {
        value: "João Paulo Almeida"
      },
      {
        value: "Makx Dekkers"
      },
      {
        value: "Peter Winstanley"
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
      }
      ]
    },
    {
       key: "Changes",
       data: [
       {
         value : "Change History",
         href : "#change-history"
       },
       {
         value: "Diff to previous version",
         href: "http://w3c.github.io/dwbp/diffs/dwbpdiff-20151217.html"
       }],
    }],
    wg: "Data on the Web Best Practices Working Group",
    wgURI: "http://www.w3.org/2013/dwbp/",
    wgPublicList: "public-dwbp-comments", // changed from public-dwbp-wg
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
      "ODB": {
        title: "Open Data Barometer",
        href: "http://opendatabarometer.org",
        authors: ["World Wide Web Foundation"]
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
      "ISO-25964":{
        "authors":["Stella Dextre Clarke et al"],
        "href":"http://www.niso.org/schemas/iso25964/",
        "title":"ISO 25964 – the international standard for thesauri and interoperability with other vocabularies",
        "publisher":"ISO/NISO",
        "id":"ISO 25964"
       },
      "CCREL":{
        "authors":["Hal Abelson","Ben Adida","Mike Linksvayer","Nathan Yergler"],
        "href":"http://www.w3.org/Submission/ccREL/",
        "title":"ccREL: The Creative Commons Rights Expression Language",
        "status":"W3C Member Submission",
        "publisher":"W3C/Creative Commons",
        "date":"1 May 2008"
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
      "OAIS":{
        "authors":["ISO/TC 20/SC 13"],
        "href":"http://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=57284",
        "title":"Space data and information transfer systems -- Open archival information system (OAIS) -- Reference model",
        "status":"ISO Standard",
        "publisher":"ISO",
        "id":"ISO 14721:2012",
        "date":"21 August 2012"
       },
       "PAV":{
        "authors":["Paolo Ciccarese", "Stian Soiland-Reyes"],
        "href": "http://purl.org/pav/",
        "title": "PAV - Provenance, Authoring and Versioning",
        "date": "28 August 2014"
       },
       "PURI":{
        "authors":["Phil Archer", "Nikos Loutas", "Stijn Goedertier", "Saky Kourtidis"],
        "href": "http://philarcher.org/diary/2013/uripersistence/",
        "title": "Study On Persistent URIs",
        "date": "17 December 2012"
       },
       "Richardson": {
        "authors": ["Richardson L.", "Sam Ruby"],
        "href": "http://restfulwebapis.org/rws.html",
        "title": "RESTful Web Services",
        "date": "2007",
        "publisher": "O'Reilly"
       },
       "Fielding": {
        "authors": ["Roy Thomas Fielding"],
        "title": "Representational State Transfer (REST), Chapter 5 of Architectural Styles and the Design of Network-based Software Architectures",
        "href": "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
        "publisher": "University of California, Irvine",
        "date": "2000"
       },
       "SIRI":{
        "authors":["CEN"],
        "href": "http://user47094.vs.easily.co.uk/siri/",
        "title": "Service Interface for Real Time Information CEN/TS 15531  (prCEN/TS-OO278181 )",
        "date": "October 2006"
       },
       "Navathe": {
        "authors": ["Ramez Elmasri", "Shamkant B. Navathe"],
      	"title": "Fundamentals of Database Systems",
        "date": "2010",
        "publisher": "Addison Wesley"
       },
       "Lexvo": {
     	 "title": "Lexvo.org",
       "href":"http://www.lexvo.org/"
       },
       "GTFS": {
	      "title": "General Transit Feed Specification",
     	  "href":"http://vocab.gtfs.org/terms#",
        "authors": ["Pieter Colpaert", "Andrew Byrd"]
       },
       "NETCDF": {
	      "title": "NetCDF",
     	  "href":"http://www.unidata.ucar.edu/software/netcdf/docs/",
        "authors": ["Russ Rew", "Glenn Davis", "Steve Emmerson", "Harvey Davies", "Ed Hartnett", "Dennis Heimbigner", "Ward Fisher"],
        "publisher": "Unidata"
       },
      "ISO639-1-LOC": {
        title: "ISO 639-1: Codes for the Representation of Names of Languages - Part 1: Two-letter codes for languages",
        authors: ["Library of Congress"],
        href: "http://id.loc.gov/vocabulary/iso639-1.html"
      },
      "SKOS-DESIGN": {
        title: "Key Choices in the Design of Simple Knowledge Organization System (SKOS)",
        authors: ["Tom Baker", "Sean Bechhofer", "Antoine Isaac", "Alistair Miles", "Guus Schreiber", "Ed Summers"],
        "date": "May 2013",
        "publisher": "Elsevier",
	status: "Journal of Web Semanics 20: 35-49",
        href: "http://dx.doi.org/10.1016/j.websem.2013.05.001"
      },
      "GS1": {
        title: "SmartSearch Implementation Guideline",
        authors: ["Mark Harrison", "Ken Traub"],
        "date": "November 2015",
        "publisher": "GS1",
        href: "http://www.gs1.org/gs1-smartsearch/guideline/gtin-web-implementation-guideline"
      }
    }
};
