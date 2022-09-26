import type { AxiosResponse } from 'axios'
import Axios from 'axios'
import { ElMessage } from 'element-plus'
import config from './../../config'
import errCode from './errCode'
import type { RequestFunc } from '../interface'
import { Method } from '../interface'

const ajax: RequestFunc = (
  { url, method, baseUrl } = { url: '', method: Method.GET, baseUrl: '' },
  data = { query: {}, body: {}, headers: {} },
  showErrMsg = true
) => {
  return new Promise((resolve, reject) => {
    Axios({
      baseURL: baseUrl || config.serverApi,
      url,
      method,
      params: data.query || (method === Method.GET ? data : {}),
      data: data.body || (method === Method.POST ? data : {}),
      timeout: 1000 * 50,
      headers: {
        // token: getToken(),
        ...(data.headers || {})
      }
    })
      .then((res: AxiosResponse) => {
        res.data.code = Number(res.data.code)
        const code = res.data.code
        if (errCode.checkSignOut.includes(code)) {
          // 当token失效时，清除所有请求防止重复弹起窗口
          return false
        }
        if (code !== 0) {
          // 业务异常
          if (showErrMsg) {
            if (errCode.checkRecharge.includes(code)) {
              ElMessage({
                type: 'warning',
                dangerouslyUseHTMLString: true,
                message: errCode[code]
              })
            } else {
              ElMessage.warning(res.data.msg)
            }
          }
          reject(res.data)
          return false
        }
        resolve(res.data)
      })
      .catch((err: AxiosResponse) => {
        // http异常
        // 请在此处处理http异常
        reject(err.data)
        if (showErrMsg) ElMessage.error('网络异常，请稍后再试!')
      })
  })
}

export default ajax
