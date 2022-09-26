export const talentList = {
  data: [
    {
      id: 1,
      nickname: '昵称',
      actualName: '名称',
      class: 'A班',
      tag: ['标签1', '标签2', '标签3', '标签4'],
      fan: 2355,
      interactive: 7564,
      notes: 75647,
      fanIncrease: 3425,
      interactiveIncrease: 879,
      notesIncrease: 245,
      task: 8756,
      gender: 'male'
    },
    {
      id: 2,
      nickname: '昵称',
      actualName: '名称',
      class: 'A班',
      tag: ['标签1', '标签2', '标签3', '标签4'],
      fan: 2355,
      interactive: 7564,
      notes: 75647,
      fanIncrease: 3425,
      interactiveIncrease: 879,
      notesIncrease: 245,
      task: 8756,
      gender: 'female'
    }
  ],
  total: 11
}

export const talent = {
  platformName: '测试账号',
  platformSn: 675436768,
  address: '上海市',
  platformAddress: '上海市',
  introduction: '这是一段简介', // 简介
  fan: 54352, // 粉丝
  interactive: 7465752, // 互动
  notes: 342, // 笔记
  task: 89657654, // 任务
  tag: [
    '测试标签1',
    '测试标签2',
    '测试标签3',
    '测试标签4',
    '测试标签5',
    '测试标签6'
  ],
  name: '这是真实姓名',
  gender: 1,
  area: ['zhinan', 'shejiyuanze', 'fankui'],
  class: 'A',
  className: 'A班',
  post: '这是岗位',
  storeManager: '这是店长',
  store: '这是店名',
  wx: 456789543
}

export const notesList = [
  {
    id: 1,
    title: '这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题',
    fan: 345654,
    collect: 75644,
    comment: 76543,
    time: '2020-03-03'
  },
  {
    id: 2,
    title: '这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题',
    fan: 345654,
    collect: 75644,
    comment: 76543,
    time: '2020-03-03'
  },
  {
    id: 3,
    title: '这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题',
    fan: 345654,
    collect: 75644,
    comment: 76543,
    time: '2020-03-03'
  },
  {
    id: 4,
    title: '这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题',
    fan: 345654,
    collect: 75644,
    comment: 76543,
    time: '2020-03-03'
  }
]

export const historyLog = [
  {
    id: 1,
    className: 'A班',
    date: '2010-02-02'
  },
  {
    id: 2,
    className: 'A班',
    date: '2010-02-02'
  },
  {
    id: 3,
    className: 'A班',
    date: '2010-02-02'
  },
  {
    id: 4,
    className: 'A班',
    date: '2010-02-02'
  },
  {
    id: 5,
    className: 'A班',
    date: '2010-02-02'
  },
  {
    id: 6,
    className: 'A班',
    date: '2010-02-02'
  }
]

export const talentStatistics = {
  fan: 54632234,
  interactive: 34566,
  notes: 23456
}

export const area = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          {
            value: 'yizhi',
            label: '一致'
          },
          {
            value: 'fankui',
            label: '反馈'
          },
          {
            value: 'xiaolv',
            label: '效率'
          },
          {
            value: 'kekong',
            label: '可控'
          }
        ]
      },
      {
        value: 'daohang',
        label: '导航',
        children: [
          {
            value: 'cexiangdaohang',
            label: '侧向导航'
          },
          {
            value: 'dingbudaohang',
            label: '顶部导航'
          }
        ]
      }
    ]
  }
]

export const totalStatistic = {
  panelData: {
    aaa: 1200,
    talent: 9999,
    task: 99,
    note: 9,
    hd: 88
  },
  pieData: [
    {
      name: 'A班',
      value: 24
    },
    {
      name: 'B班',
      value: 8
    },
    {
      name: 'C班',
      value: 1
    }
  ],
  totalData: {
    aaa: 9999,
    fans: 1200,
    hd: 12000,
    note_num: 34,
    task_num: 8,
    new_fans: 88,
    new_hd: 67,
    new_note: 6
  }
}

export const accountStatistic = {
  pieData: [
    {
      name: 'A班',
      value: 24
    },
    {
      name: 'B班',
      value: 8
    },
    {
      name: 'C班',
      value: 1
    }
  ],
  fansData: [
    {
      rank: 1,
      kol_name: '博主博主博主博主博主博主博主博主',
      class: 'A班',
      total: 8888888,
      app_type: 1
    },
    {
      rank: 2,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    },
    {
      rank: 3,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    },
    {
      rank: 4,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    }
  ]
}

export const noteStatistic = {
  noteReactData: [
    {
      rank: 1,
      kol_name: '小红书昵称小红书昵称小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 8888888,
      app_type: 1
    },
    {
      rank: 2,
      kol_name: '小红书昵称小红书昵称小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 3,
      kol_name: '小红书昵称小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 4,
      kol_name: '小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 5,
      kol_name: '小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 6,
      kol_name: '小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 7,
      kol_name: '小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    }
  ]
}

export const taskStatistic = {
  panelData: {
    aaa: '12000'
  },
  fansData: [
    {
      rank: 1,
      kol_name: '博主博主博主博主博主博主博主博主',
      class: 'A班',
      total: 8888888,
      app_type: 1
    },
    {
      rank: 2,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    },
    {
      rank: 3,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    },
    {
      rank: 4,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    },
    {
      rank: 5,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    },
    {
      rank: 6,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    }
  ],
  noteReactData: [
    {
      rank: 1,
      kol_name: '小红书昵称小红书昵称小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 8888888,
      app_type: 1
    },
    {
      rank: 2,
      kol_name: '小红书昵称小红书昵称小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 3,
      kol_name: '小红书昵称小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 4,
      kol_name: '小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 5,
      kol_name: '小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 6,
      kol_name: '小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 7,
      kol_name: '小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    }
  ]
}

export const storeTotalStatistic = {
  pieData: [
    {
      name: 'A班',
      value: 24
    },
    {
      name: 'B班',
      value: 8
    },
    {
      name: 'C班',
      value: 1
    }
  ],
  panelData: {
    aaa: '12000'
  },
  fansData: [
    {
      rank: 1,
      kol_name: '博主博主博主博主博主博主博主博主',
      class: 'A班',
      total: 8888888,
      app_type: 1
    },
    {
      rank: 2,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    },
    {
      rank: 3,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    },
    {
      rank: 4,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    },
    {
      rank: 5,
      kol_name: '博主博主博主博主',
      class: 'A班',
      total: 111,
      app_type: 1
    }
  ],
  noteReactData: [
    {
      rank: 1,
      kol_name: '小红书昵称小红书昵称小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 8888888,
      app_type: 1
    },
    {
      rank: 2,
      kol_name: '小红书昵称小红书昵称小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 3,
      kol_name: '小红书昵称小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 4,
      kol_name: '小红书昵称小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    },
    {
      rank: 5,
      kol_name: '小红书昵称',
      name: '姓名',
      class: 'A班',
      title: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记',
      total: 111,
      app_type: 1
    }
  ]
}

export const storeDifferentFirstStatistic = {
  pieData: [
    {
      name: 'A班',
      value: 24
    },
    {
      name: 'B班',
      value: 8
    },
    {
      name: 'C班',
      value: 1
    }
  ],
  fans_top: {
    name: '博主博主博主博主博主博主博主博主',
    total: 8888888
  },
  fans_increase_top: {
    name: '博主博主博主博主博主博主博主博主',
    total: 8888888
  },
  react_top: {
    name: '博主博主博主博主博主博主博主博主',
    total: 8888888
  },
  react_increase_top: {}
}

export const storeDifferentSecondStatistic = {
  pieData: [
    {
      name: 'A班',
      value: 24
    },
    {
      name: 'B班',
      value: 8
    },
    {
      name: 'C班',
      value: 1
    }
  ],
  fans_top: {
    name: '博主博主博主博主博主博主博主博主',
    total: 8888888
  },
  fans_increase_top: {
    name: '博主博主博主博主博主博主博主博主',
    total: 8888888
  },
  react_top: {
    name: '博主博主博主博主博主博主博主博主',
    total: 8888888
  },
  react_increase_top: {}
}

export const accountConfigData = [
  {
    id: 0,
    accountName: '任务名称任务名称任务名称任务名称',
    name: '王星彤萨',
    storeName: '门店名称门店名称门店名'
  },
  {
    id: 1,
    accountName: '任务名称任务名称任务名称任务名称',
    name: '王星彤萨',
    storeName: '门店名称门店名称门店名'
  },
  {
    id: 2,
    accountName: '任务名称任务名称任务名称任务名称',
    name: '王星彤萨',
    storeName: '门店名称门店名称门店名'
  },
  {
    id: 3,
    accountName: '任务名称任务名称任务名称任务名称',
    name: '王星彤萨',
    storeName: '门店名称门店名称门店名'
  }
]
