var teamInfo = {
  "OUC-Marine_drugs": {
    "name": "OUC-Marine Drugs",
    "reportID" : "1QQGEIJIC94H",
  },
  "PIM-VCA": {
    "name": "PIM-VCA",
    "reportID" : "29SYDHDA85W1",
  },
  "PIM-NEBS": {
    "name": "PIM-NEBS",
    "reportID" : "3OSN8LFTRVA6",
  },
  "OUC-DE": {
    "name": "OUC-DE",
    "reportID" : "4D3XOJ4S1IW4",
  },
  "OncoStrat_NMU": {
    "name": "OncoStrat_NMU",
    "reportID" : "51WDA5GHSKBM",
  },
  "McMaster_BioDesign": {
    "name": "McMaster BioDesign",
    "reportID" : "68GY3U1QUZPS",
  },
  "CPU_CHINA": {
    "name": "CPU_CHINA",
    "reportID" : "7VS6OXYLFZH2",
  },
  "Evolution_Suisse_2025": {
    "name": "Evolution Suisse 2025",
    "reportID": "8I2EJYK5SXGI",
  },
  "Edinburgh": {
    "name": "Edinburgh",
    "reportID" : "9IIQRQ00VV3D",
  },
  "NEFU-China": {
    "name": "NEFU_China",
    "reportID" : "1019MXXEN2MH",
  },
  "LZDX": {
    "name": "LZDX",
    "reportID" : "11FE5WA8HLYR",
  },
  "LZU-MEDICINE-CHINA": {
    "name": "LZU-MEDICINE-CHINA",
    "reportID" : "12I9HBUOE52J",
  },
  "SynthImmunol_NMU": {
    "name": "SynthImmunol_NMU",
    "reportID" : "13FWQE3XNLNO",
  }
};

function updateTeamInfoModal(id) {
  document.querySelector('#teamInfoModalLabel').innerHTML = teamInfo[id].name;
  document.querySelector('#teamWikiLink').setAttribute('href', `https://idec-teams.github.io/2025_${id}`);
  document.querySelector('#teamReportLink').setAttribute('href', `https://arxiv.idec.io/article/${teamInfo[id].reportID}`);
}

