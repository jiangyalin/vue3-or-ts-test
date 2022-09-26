import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import ajax from './ajax'
import type { ResPage } from './interface'
import { Method } from './interface'
import {
  accountConfigData,
  accountStatistic,
  area,
  historyLog,
  notesList,
  noteStatistic,
  storeDifferentFirstStatistic,
  storeDifferentSecondStatistic,
  storeTotalStatistic,
  talent,
  talentList,
  talentStatistics,
  taskStatistic,
  totalStatistic
} from './mockData'

const mock = new MockAdapter(Axios, { delayResponse: 1000 })

mock
  .onGet('/talent/list')
  .reply(200, {
    code: 0,
    data: talentList,
    msg: ''
  })
  .onPost('/talent')
  .reply(200, {
    code: 0,
    data: {},
    msg: ''
  })
  .onGet('/talent')
  .reply(200, {
    code: 0,
    data: talent,
    msg: ''
  })
  .onGet('/talent/statistics')
  .reply(200, {
    code: 0,
    data: talentStatistics,
    msg: ''
  })
  .onGet('/notes/list')
  .reply(200, {
    code: 0,
    data: notesList,
    msg: ''
  })
  .onGet('/historyLog/list')
  .reply(200, {
    code: 0,
    data: historyLog,
    msg: ''
  })
  .onGet('/area')
  .reply(200, {
    code: 0,
    data: area,
    msg: ''
  })
  .onGet('/statistic/getTotalStatistic')
  .reply(200, {
    code: 0,
    data: totalStatistic,
    msg: ''
  })
  .onGet('/statistic/getAccountStatistic')
  .reply(200, {
    code: 0,
    data: accountStatistic,
    msg: ''
  })
  .onGet('/statistic/getNoteStatistic')
  .reply(200, {
    code: 0,
    data: noteStatistic,
    msg: ''
  })
  .onGet('/statistic/getTaskStatistic')
  .reply(200, {
    code: 0,
    data: taskStatistic,
    msg: ''
  })
  .onGet('/statistic/getStoreTotalStatistic')
  .reply(200, {
    code: 0,
    data: storeTotalStatistic,
    msg: ''
  })
  .onGet('/statistic/getStoreDifference')
  .reply(200, {
    code: 0,
    data: storeDifferentFirstStatistic,
    msg: ''
  })
  .onGet('/statistic/getAnotherStoreDifference')
  .reply(200, {
    code: 0,
    data: storeDifferentSecondStatistic,
    msg: ''
  })
  .onGet('/statistic/getAccountConfigData')
  .reply(200, {
    code: 0,
    data: accountConfigData,
    msg: ''
  })
  .onAny()
  .passThrough()

export const getTalentList = (data: ResPage): any => {
  return ajax(
    {
      url: '/talent/list',
      method: Method.GET
    },
    data
  )
}

export const getNotesList = (data: ResPage): any => {
  return ajax(
    {
      url: '/notes/list',
      method: Method.GET
    },
    data
  )
}

export const getHistoryLogList = (data: any): any => {
  return ajax(
    {
      url: '/historyLog/list',
      method: Method.GET
    },
    data
  )
}

export const postTalent = (data: any): any => {
  return ajax(
    {
      url: '/talent',
      method: Method.POST
    },
    data
  )
}

export const getTalent = (data: any): any => {
  return ajax(
    {
      url: '/talent',
      method: Method.GET
    },
    data
  )
}

export const getTalentStatistics = (data: any): any => {
  return ajax(
    {
      url: '/talent/statistics',
      method: Method.GET
    },
    data
  )
}

export const getArea = (data: any): any => {
  return ajax(
    {
      url: '/area',
      method: Method.GET
    },
    data
  )
}

export const getTotalStatistic = (data: any): any => {
  return ajax(
    {
      url: '/statistic/getTotalStatistic',
      method: Method.GET
    },
    data
  )
}

export const getAccountStatistic = (data: any): any => {
  return ajax(
    {
      url: '/statistic/getAccountStatistic',
      method: Method.GET
    },
    data
  )
}

export const getNoteStatistic = (data: any): any => {
  return ajax(
    {
      url: '/statistic/getNoteStatistic',
      method: Method.GET
    },
    data
  )
}

export const getTaskStatistic = (data: any): any => {
  return ajax(
    {
      url: '/statistic/getTaskStatistic',
      method: Method.GET
    },
    data
  )
}

export const getStoreTotalStatistic = (data: any): any => {
  return ajax(
    {
      url: '/statistic/getStoreTotalStatistic',
      method: Method.GET
    },
    data
  )
}

export const getStoreDifference = (data: any): any => {
  return ajax(
    {
      url: '/statistic/getStoreDifference',
      method: Method.GET
    },
    data
  )
}

export const getAnotherStoreDifference = (data: any): any => {
  return ajax(
    {
      url: '/statistic/getAnotherStoreDifference',
      method: Method.GET
    },
    data
  )
}

export const getAccountConfigData = (data: any): any => {
  return ajax(
    {
      url: '/statistic/getAccountConfigData',
      method: Method.GET
    },
    data
  )
}
