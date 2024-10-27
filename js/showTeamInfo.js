var teamInfo = {
  "OUC_DE": {
    "name": "OUC_DE",
    "reportID" : "NY96ZYL51OOV",
  },
  "Northwest_Union": {
    "name": "Northwest Union",
    "reportID" : "6ENEKBZCEJVQ",
  },
  "SynthImmunol_NMU": {
    "name": "SynthImmunol_NMU",
    "reportID" : "D5PKP69HH444",
  },
  "iTidetron": {
    "name": "iTidetron",
    "reportID" : "L8R1VZR2D5Q3",
  },
  "STU_-China": {
    "name": "STU -China",
    "reportID" : "P38LFWMDFH7I",
  },
  "CPU_CHINA": {
    "name": "CPU_CHINA",
    "reportID" : "O6J0KD89BV0C",
  },
  "NKLII-Evolution-China": {
    "name": "NKLII-Evolution-China",
    "reportID" : "BVYOLQA5XAG8",
  },
  "Evolution_Suisse": {
    "name": "Evolution Suisse",
    "reportID": "CBGHQSPMIZ63",
  },
  "USTC": {
    "name": "USTC",
    "reportID" : "FU7WLUXKD2K5",
  },
  "NJTECH-CHINA-A": {
    "name": "NJTECH-CHINA-A",
    "reportID" : "NQZHZQ6TTHS1",
  },
  "NEFU_China": {
    "name": "NEFU_China",
    "reportID" : "VHN0LF0WQX9T",
  },
  "Edinburgh": {
    "name": "Edinburgh",
    "reportID" : "3SW814L0536J",
  },
  "SUSTech_Med": {
    "name": "SUSTech Med",
    "reportID" : "VKCGSA4NSJD3",
  },
  "NAU-CHINA-DE": {
    "name": "NAU-CHINA-DE",
    "reportID" : "3TID6KAMHMVT",
  },
};

function updateTeamInfoModal(id) {
  document.querySelector('#teamInfoModalLabel').innerHTML = teamInfo[id].name;
  document.querySelector('#teamWikiLink').setAttribute('href', `https://idec-teams.github.io/2024_${id}`);
  document.querySelector('#teamReportLink').setAttribute('href', `https://arxiv.idec.io/article/${teamInfo[id].reportID}`);
}

