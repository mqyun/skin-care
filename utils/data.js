// 测试题目数据
const questionData = [{
  "queNum": 1,
  "queTit": "最让您感到困扰的皮肤问题是以下哪种情况？",
  "queAnswer": [{
    "answerid": 11,
    "answer": "干燥缺水",
    "toQueNum": 2
  }, {
    "answerid": 12,
    "answer": "出油过多",
    "toQueNum": 3
  }]
}, {
  "queNum": 2,
  "queTit": "以下哪种【干燥缺水】的表现与您的情况最符合？",
  "queAnswer": [{
    "answerid": 21,
    "answer": "干性缺水型",
    "toQueNum": 7
  }, {
    "answerid": 22,
    "answer": "外油内干型",
    "toQueNum": 7
  }]
}, {
  "queNum": 3,
  "queTit": "以下哪种【出油过多】的表现与您的情况最符合？",
  "queAnswer": [{
    "answerid": 31,
    "answer": "油性旺盛型",
    "toQueNum": 8
  }, {
    "answerid": 32,
    "answer": "外油内干型",
    "toQueNum": 8
  }]
}, {
  "queNum": 7,
  "queTit": "请问下列哪个等级的【干燥缺水】符合您的现状？",
  "queAnswer": [{
    "answerid": 71,
    "answer": "【I级】潜在缺水",
    "toQueNum": 0
  }, {
    "answerid": 72,
    "answer": "【II级】轻度缺水",
    "toQueNum": 0
  }, {
    "answerid": 73,
    "answer": "【III级】重度缺水",
    "toQueNum": 0
  }]
}, {
  "queNum": 8,
  "queTit": "请问下列哪个等级的【出油过多】符合您的现状？",
  "queAnswer": [{
    "answerid": 81,
    "answer": "【I级】潜在油腻",
    "toQueNum": 0
  }, {
    "answerid": 82,
    "answer": "【II级】轻度油腻",
    "toQueNum": 0
  }, {
    "answerid": 83,
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

// 皮肤类型护理数据
const skinTypeData = [{
  id: 1,
  name: "干燥缺水",
  sonType: [{
    id: 11,
    name: "干性缺水型",
    key: "补水保湿+营养滋润+防护",
    steps: {
      daytime: [{
        name: "清洁面部",
        important: 2,
        proType: "洁面"
      }, {
        name: "补水调理",
        important: 3,
        proType: "水类"
      }, {
        name: "滋润保湿",
        important: 3,
        proType: "乳液/霜"
      }, {
        name: "二次补水调理",
        important: 2,
        proType: "水类"
      }, {
        name: "防晒",
        important: 3,
        proType: "防晒霜/帽/伞"
      }, {
        name: "日常补水",
        important: 1,
        proType: "喷雾"
      }],
      nighttime: [{
        name: "清洁面部",
        important: 2,
        proType: "洁面"
      }, {
        name: "补水调理",
        important: 3,
        proType: "水类"
      }, {
        name: "滋润保湿",
        important: 3,
        proType: "乳液/面膜"
      }, {
        name: "锁水巩固",
        important: 2,
        proType: "霜"
      }]
    }
  }, {
    id: 12,
    name: "外油内干型",
    key: "补水+消炎+防护",
    steps: {
      daytime: [{
        name: "清洁面部",
        important: 2,
        proType: "洁面"
      }, {
        name: "补水调理",
        important: 3,
        proType: "水类"
      }, {
        name: "滋润保湿",
        important: 3,
        proType: "乳液/霜"
      }, {
        name: "二次补水调理",
        important: 2,
        proType: "水类"
      }, {
        name: "防晒",
        important: 3,
        proType: "防晒霜/帽/伞"
      }, {
        name: "日常补水",
        important: 1,
        proType: "喷雾"
      }],
      nighttime: [{
        name: "清洁面部",
        important: 2,
        proType: "洁面"
      }, {
        name: "补水调理",
        important: 3,
        proType: "水类"
      }, {
        name: "滋润保湿",
        important: 3,
        proType: "乳液/面膜"
      }, {
        name: "锁水巩固",
        important: 2,
        proType: "霜"
      }]
    }
  }]
}, {
  id: 2,
  name: "出油过多",
  sonType: [{
    id: 21,
    name: "油性旺盛型",
    key: "清洁+控油+消炎",
    steps: {
      daytime: [{
        name: "清洁面部",
        important: 2,
        proType: "洁面"
      }, {
        name: "去多余角质",
        important: 3,
        proType: "去角质"
      }, {
        name: "补水调理",
        important: 1,
        proType: "水类"
      }, {
        name: "滋润保湿",
        important: 1,
        proType: "乳液"
      }, {
        name: "水油调理",
        important: 1,
        proType: "水类"
      }, {
        name: "防晒",
        important: 1,
        proType: "防晒霜/帽/伞"
      }, {
        name: "日常补水",
        important: 1,
        proType: "喷雾"
      },],
      nighttime: [{
        name: "清洁面部",
        important: 2,
        proType: "洁面"
      }, {
        name: "补水调理",
        important: 3,
        proType: "水类"
      }, {
        name: "控油保湿",
        important: 2,
        proType: "乳液/面膜"
      }, {
        name: "水油调理",
        important: 1,
        proType: "水类"
      }]
    }
  }, {
    id: 22,
    name: "外油内干型",
    key: "补水+消炎+防护",
    steps: {
      daytime: [{
        name: "清洁面部",
        important: 2,
        proType: "洁面"
      }, {
        name: "补水调理",
        important: 3,
        proType: "水类"
      }, {
        name: "滋润保湿",
        important: 3,
        proType: "乳液/霜"
      }, {
        name: "二次补水调理",
        important: 2,
        proType: "水类"
      }, {
        name: "防晒",
        important: 3,
        proType: "防晒霜/帽/伞"
      }, {
        name: "日常补水",
        important: 1,
        proType: "喷雾"
      }],
      nighttime: [{
        name: "清洁面部",
        important: 2,
        proType: "洁面"
      }, {
        name: "补水调理",
        important: 3,
        proType: "水类"
      }, {
        name: "滋润保湿",
        important: 3,
        proType: "乳液/面膜"
      }, {
        name: "锁水巩固",
        important: 2,
        proType: "霜"
      }]
    }
  }]
}];

// 获取护理知识
const getSkinTypeData = (parentType, sonType) => {
  if (!parentType && !sonType) {
    return skinTypeData
  } else {
    for (let item of skinTypeData) {
      for (let sonitem of item.sonType) {
        if (item.id == parentType && sonitem.id == sonType) {
          return sonitem
        }
      }
    }
  }
}

module.exports = {
  getQuestionData,
  getSkinTypeData
}