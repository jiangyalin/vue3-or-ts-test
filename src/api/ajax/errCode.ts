const errCode: any = {
  4001: '您的账号在别处登录，请重新登录。如不是您本人登录，请及时修改密码。',
  4002: '您的账号登录已超时，请重新登录。',
  4003: '您的账号权限已变更，请重新登录生效。',
  4004: '您的账号已过期，请重新登录生效。',
  4005: '用户密码已变更，请重新登录',
  4006: '<p class="m-msg-box s-4006">可添加达人数量已达上限，想要更多达人库额度？前往<a class="u-sn" href="/personalCenter/recharge">充值中心</a></p>',
  4007: '<p class="m-msg-box s-4006">内容助手搜索次数已达上限，想要更多AI搜索额度？前往<a class="u-sn" href="/personalCenter/recharge">充值中心</a></p>',
  4008: '<p class="m-msg-box s-4006">可添加子账号数量已达上限，想要更多子账号额度？前往<a class="u-sn" href="/personalCenter/recharge">充值中心</a></p>',
  4009: '<p class="m-msg-box s-4006">进行中活动数量已到上限，无法创建新活动。想要更多活动额度？前往<a class="u-sn" href="/personalCenter/recharge">充值中心</a></p>',
  4010: '有新版本更新，请重新登录',
  5001: '您的用户信息有变更，请重新登录',
  checkRecharge: [4006, 4007, 4008, 4009], // 去支付
  checkSignOut: [4001, 4002, 4003, 4004, 4005, 4010, 5001] // 需登出的code
}

export default errCode
