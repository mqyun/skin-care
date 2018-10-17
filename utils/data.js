const questionData = [{
  "queNum": 1,
  "queTit": "最让您感到困扰的皮肤问题是以下哪种情况？",
  "queAnswer": [{
    "answer": "干燥缺水",
    "toQueNum": 2
  }, {
    "answer": "出油过多",
    "toQueNum": 3
  }]
}, {
  "queNum": 2,
  "queTit": "以下哪种【干燥缺水】的表现与您的情况最符合？",
  "queAnswer": [{
    "answer": "干性缺水型",
    "toQueNum": 7
  }, {
    "answer": "外油内干型",
    "toQueNum": 7
  }]
}, {
  "queNum": 3,
  "queTit": "以下哪种【出油过多】的表现与您的情况最符合？",
  "queAnswer": [{
    "answer": "油性旺盛型",
    "toQueNum": 8
  }, {
    "answer": "外油内干型",
    "toQueNum": 8
  }]
}, {
  "queNum": 7,
  "queTit": "请问下列哪个等级的【干燥缺水】符合您的现状？",
  "queAnswer": [{
    "answer": "【I级】潜在缺水",
    "toQueNum": 0
  }, {
    "answer": "【II级】轻度缺水",
    "toQueNum": 0
  }, {
    "answer": "【III级】重度缺水",
    "toQueNum": 0
  }]
}, {
  "queNum": 8,
  "queTit": "请问下列哪个等级的【出油过多】符合您的现状？",
  "queAnswer": [{
    "answer": "【I级】潜在油腻",
    "toQueNum": 0
  }, {
    "answer": "【II级】轻度油腻",
    "toQueNum": 0
  }, {
    "answer": "【III级】重度油腻",
    "toQueNum": 0
  }]
}];

// 获取题目数据
const getQuestionData = (queNum) => {
  for (let item of questionData) {
    if (item.queNum == queNum) {
      return item
    }
  }
}

module.exports = {
  getQuestionData
}