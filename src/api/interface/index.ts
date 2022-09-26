export interface Result {
  code: string;
  msg: string;
}

export interface ResultData<T = any> extends Result {
  data?: T;
}

export interface ResPage {
  pageNum: number;
  pageSize: number;
}

export enum Method {
  GET = 'get',
  POST = 'post',
  // DELETE = 'delete',
  // UPDATE = 'update'
}

export interface RequestFunc {
  (
    api: {
      url: string;
      method: Method;
      baseUrl?: string;
    },
    data: {
      query?: any;
      body?: any;
      headers?: any;
      [propName: string]: any;
    },
    showErrMsg?: boolean
  ): any;
}

export class Page {
  currentPage: number
  pageSize: number
  total: number

  constructor (currentPage = 1, pageSize = 10, total = 0) {
    this.currentPage = currentPage
    this.pageSize = pageSize
    this.total = total
  }
}
