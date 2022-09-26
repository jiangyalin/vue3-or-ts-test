enum envType {
  PROD = 'prod',
  PRE = 'pre',
  TEST = 'test',
  DEV = 'dev',
}

interface Config {
  env: envType;
  serverApi: string;
}

const config: Config = {
  env: envType.DEV, // 环境
  serverApi: 'https://mk-api.now-see.cn' // 接口地址
}

const process = { env: { VITE_NODE_ENV: envType.DEV } }

switch (process.env.VITE_NODE_ENV) {
case 'prod':
  config.env = envType.PROD
  config.serverApi = 'https://mkstarmgmt.michaelkors-wechat.com/api'
  break
case 'pre':
  config.env = envType.PRE
  config.serverApi = 'https://mkstarmgmt-test.michaelkors-wechat.com/api'
  break
case 'test':
  config.env = envType.TEST
  config.serverApi = 'https://mk-api.now-see.cn'
  break
case 'dev':
  config.env = envType.DEV
  config.serverApi = 'https://mk-api.now-see.cn'
  break
default:
  config.env = envType.DEV
  config.serverApi = 'https://mk-api.now-see.cn'
}

console.log('envType', envType)

export default config
