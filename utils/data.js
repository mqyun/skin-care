// 测试题目数据
const questionData = [{
  "queNum": 1,
  "queTit": "最让您感到困扰的皮肤问题是以下哪种情况？",
  "queAnswer": [{
    "answerid": 11,
    "answer": "干燥缺水",
    "toQueNum": 2,
    "type": 'parent',
    "typeVal": 1
  }, {
    "answerid": 12,
    "answer": "出油过多",
    "toQueNum": 3,
    "type": 'parent',
    "typeVal": 2
  }]
}, {
  "queNum": 2,
  "queTit": "以下哪种【干燥缺水】的表现与您的情况最符合？",
  "queAnswer": [{
    "answerid": 21,
    "answer": "干性缺水型",
    "toQueNum": 7,
    "type": 'son',
    "typeVal": 11
  }, {
    "answerid": 22,
    "answer": "外油内干型",
    "toQueNum": 7,
    "type": 'son',
    "typeVal": 12
  }]
}, {
  "queNum": 3,
  "queTit": "以下哪种【出油过多】的表现与您的情况最符合？",
  "queAnswer": [{
    "answerid": 31,
    "answer": "油性旺盛型",
    "toQueNum": 8,
    "type": 'son',
    "typeVal": 21
  }, {
    "answerid": 32,
    "answer": "外油内干型",
    "toQueNum": 8,
    "type": 'son',
    "typeVal": 22
  }]
}, {
  "queNum": 7,
  "queTit": "请问下列哪个等级的【干燥缺水】符合您的现状？",
  "queAnswer": [{
    "answerid": 71,
    "answer": "【I级】潜在缺水",
    "toQueNum": 0,
    "type": 'grade',
    "typeVal": 0
  }, {
    "answerid": 72,
    "answer": "【II级】轻度缺水",
    "toQueNum": 0,
    "type": 'grade',
    "typeVal": 0
  }, {
    "answerid": 73,
    "answer": "【III级】重度缺水",
    "toQueNum": 0,
    "type": 'grade',
    "typeVal": 0
  }]
}, {
  "queNum": 8,
  "queTit": "请问下列哪个等级的【出油过多】符合您的现状？",
  "queAnswer": [{
    "answerid": 81,
    "answer": "【I级】潜在油腻",
    "toQueNum": 0,
    "type": 'grade',
    "typeVal": 0
  }, {
    "answerid": 82,
    "answer": "【II级】轻度油腻",
    "toQueNum": 0,
    "type": 'grade',
    "typeVal": 0
  }, {
    "answerid": 83,
    "answer": "【III级】重度油腻",
    "toQueNum": 0,
    "type": 'grade',
    "typeVal": 0
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

// 商城数据
const shopData = [{
  id: 1,
  ename: 'SK-II',
  cname: 'SK-II护肤精华露 “神仙水”',
  price: '￥590.00',
  image: 'https://ssl2.sephorastatic.cn/products/2/7/2/2/1/1/1_n_06178_180x180.jpg'
}, {
  id: 2,
  ename: 'SK-II',
  cname: 'SK-II肌因光蕴环采钻白精华露（小灯泡)',
  price: '1040.00',
  image: 'https://ssl1.sephorastatic.cn/products/3/5/1/1/1/5/1_n_06178_180x180.jpg'
}, {
  id: 3,
  ename: 'CAUDALIE',
  cname: '欧缇丽葡萄水保湿舒缓喷雾双支装惠选套装',
  price: '260.00',
  image: 'https://ssl4.sephorastatic.cn/products/V/S/1/0/0/0/2/8/9/1_n_06633_180x180.jpg'
}, {
  id: 4,
  ename: 'LANCOME',
  cname: '兰蔻清滢柔肤水（粉水）',
  price: '￥320.00',
  image: 'https://ssl4.sephorastatic.cn/products/8/7/2/7/1/1_n_05470_180x180.jpg'
}, {
  id: 5,
  ename: 'GUERLAIN',
  cname: '娇兰帝皇蜂姿黄金复原蜜*明星套装',
  price: '￥680.00',
  image: 'https://ssl4.sephorastatic.cn/products/4/5/4/8/4/6/1_n_06625_180x180.jpg'
}, {
  id: 6,
  ename: 'DrJart',
  cname: '蒂佳婷水动力面膜套装(6盒装面膜)',
  price: '￥580.00',
  image: 'https://ssl1.sephorastatic.cn/products/4/2/8/2/8/1/1_n_05914_180x180.jpg'
}];

// 获取护理知识
const getSkinTypeData = (parentType, sonType) => {
  if (!parentType && !sonType) {
    return skinTypeData
  } else {
    for (let item of skinTypeData) {
      for (let sonitem of item.sonType) {
        if (item.id == parentType && sonitem.id == sonType) {
          sonitem.parentName = item.name;
          return sonitem
        }
      }
    }
  }
}

// 获取商城数据
const getShopData = (id) => {
  if (!id) {
    return shopData
  } else {
    for (let item of shopData) {
      if (item.id = id) {
        return item
      }
    }
  }
}

module.exports = {
  getQuestionData,
  getSkinTypeData,
  getShopData
}