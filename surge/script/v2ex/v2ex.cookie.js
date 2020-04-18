const cookieName = 'V2EX'
const cookieKey = 'cookie_v2ex'
const cookieValueue = $request.headers['Cookie']

if (cookieValue) {
  let cookie = $persistentStore.write(cookieValue, cookieKey)
  if (cookie) {
    let msg = `${cookieName}`
    $notification.post(msg, '[Success]: cookie写入成功', '详见日志')
    console.log(msg)
    console.log(cookieValue)
  }
}

$done({})
