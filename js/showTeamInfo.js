var teamInfo = {
  "NNU-China": {
    "name": "NNU-China",
    "reportID" : "Z5OQJA67DTB7",
  },
  "Evolution_Suisse": {
    "name": "Evolution Suisse",
    "reportID" : "I3MN61ZHL3U7",
  },
  "Tongji_China": {
    "name": "Tongji_China",
    "reportID" : "1CYCTJXTNH7T",
  },
  "NAU-CHINA-DE": {
    "name": "NAU-CHINA-DE",
    "reportID" : "7L46IJ8J17U5",
  },
  "Ferroptosis_Expedition-NMU_China": {
    "name": "Ferroptosis Expedition-NMU_China",
    "reportID" : "UCVRU4XG8NKG",
  },
  "OUC_DE": {
    "name": "OUC_DE",
    "reportID" : "2HSGA2RY2LCV",
  },
  "WSNJ-A": {
    "name": "WSNJ-A",
    "reportID" : "68TECCBMWARC",
  },
  "Tidetron": {
    "name": "Tidetron",
    "reportID": "X5W52XZHT6ED",
  },
  "Edinburgh": {
    "name": "Edinburgh",
    "reportID" : "P3Y8LPP45NSU",
  },
  "USTC-2023": {
    "name": "USTC-2023",
    "reportID" : "Z36JV0AL15VZ",
  },
  "CPU_CHINA": {
    "name": "CPU_CHINA",
    "reportID" : "H9MRU3FDUT4B",
  },
  "OUC-Marine_Drugs": {
    "name": "OUC-Marine Drugs",
    "reportID" : "3FKVL2E7V3TN",
  },
  "NEFU_China": {
    "name": "NEFU_China",
    "reportID" : "7XTRBE0LL8YZ",
  },
  "NKLMI-NK_drug": {
    "name": "NKLMI-NK drug",
    "reportID" : "Z3I4VV179XJJ",
  },
  "LZU-CHINA": {
    "name": "LZU_China",
    "reportID" : "FJ3LMTLEVOMF",
  },
};

function updateTeamInfoModal(id) {
  document.querySelector('#teamInfoModalLabel').innerHTML = teamInfo[id].name;
  document.querySelector('#teamWikiLink').setAttribute('href', `https://idec-teams.github.io/2023_${id}`);
  document.querySelector('#teamReportLink').setAttribute('href', `https://arxiv.idec.io/article/${teamInfo[id].reportID}`);
}

