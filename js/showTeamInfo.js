var teamInfo = {
  "Cambridge": {
    "name": "Cambridge",
    "reportID" : "IY3YBJIG34T6",
  },
  "McMasterU": {
    "name": "McMasterU",
    "reportID" : "8OLRUWD0NLWF",
  },
  "NEFU-China": {
    "name": "NEFU-China",
    "reportID" : "GT8ZFR80KE9V",
  },
  "LZU-CHINA": {
    "name": "LZU-CHINA",
    "reportID" : "PT7SUVEH8LZH",
  },
  "LZU-GANSU": {
    "name": "LZU-GANSU",
    "reportID" : "Z8CTX43VXV9B",
  },
  "PIM-NEBS": {
    "name": "PIM-NEBS",
    "reportID" : "IR2CHV8KMGCL",
  },
  "Evolution_Suisse_2026": {
    "name": "Evolution_Suisse_2026",
    "reportID" : "5GZOZ9VACVU3",
  },
  "Edinburgh": {
    "name": "Edinburgh",
    "reportID": "MF9QQDOXBC9K",
  },
  "VCA-Prudens": {
    "name": "VCA-Prudens",
    "reportID" : "JXP3FG996ZAJ",
  },
  "OUC-DE": {
    "name": "OUC-DE",
    "wikiID" : "",
    "reportID" : "",
  },
  "SynthImmunol": {
    "name": "SynthImmunol",
    "wikiID" : "",
    "reportID" : "",
  },
};

function updateTeamInfoModal(id) {
  const info = teamInfo[id];
  document.querySelector('#teamInfoModalLabel').innerHTML = info.name;

  const wikiID = info.wikiID === undefined ? id : info.wikiID;
  const wikiWrapper = document.querySelector('#teamWikiWrapper');
  if (wikiID) {
    wikiWrapper.style.display = '';
    document.querySelector('#teamWikiLink').setAttribute('href', `https://idec-teams.github.io/2026_${wikiID}`);
  } else {
    wikiWrapper.style.display = 'none';
  }

  const reportWrapper = document.querySelector('#teamReportWrapper');
  if (info.reportID) {
    reportWrapper.style.display = '';
    document.querySelector('#teamReportLink').setAttribute('href', `https://arxiv.idec.io/article/${info.reportID}`);
  } else {
    reportWrapper.style.display = 'none';
  }
}

