var teamInfo = {
  "UOregon": {
    "name": "UOregon",
    "reportID" : "000000",
  },
  "ED-NAU": {
    "name": "ED_NAU",
    "reportID" : "000001",
  },
  "OUC": {
    "name": "OUC",
    "reportID" : "000002",
  },
  "NEFU_China": {
    "name": "NEFU_China",
    "reportID" : "000003",
  },
  "CSU_CHINA": {
    "name": "CSU_CHINA",
    "reportID" : "000004",
  },
  "OUC-Marine_Drugs": {
    "name": "OUC-Marine Drugs",
    "reportID" : "000005",
  },
  "Vilnius_GMC": {
    "name": "Vilnius GMC",
    "reportID" : "000006",
  },
  "Edinburgh": {
    "name": "Edinburgh",
    "reportID": "000007",
  },
  "CPU_CHINA_2021": {
    "name": "CPU_CHINA 2021",
    "reportID" : "000008",
  },
  "Imperial": {
    "name": "Imperial",
    "reportID" : "000009",
  },
};

function updateTeamInfoModal(id) {
  document.querySelector('#teamInfoModalLabel').innerHTML = teamInfo[id].name;
  document.querySelector('#teamWikiLink').setAttribute('href', `https://idec2021.github.io/${id}`);
  document.querySelector('#teamReportLink').setAttribute('href', `https://arxiv.idec.io/article/${teamInfo[id].reportID}`);
}