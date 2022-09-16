const axios = require('axios');
let ok = 0;
let err = 0;
// 间隔时间和t自行修改
// t必填！！！
function sheep_win() {
  const rank_time = Math.floor(Math.random() * 10000);
  axios.get(`https://cat-match.easygame2021.com/sheep/v1/game/game_over?rank_score=1&rank_state=1&rank_time=${rank_time}&rank_role=1&skin=1`, {
    headers: {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip,compress,br,deflate',
      'Connection': 'keep-alive',
      'content-type': 'application/json',
      'Referer': 'https://servicewechat.com/wx141bfb9b73c970a9/16/page-frame.html', 
      'User-Agent': 'Mozilla/5.0 (Linux; Android 12; M2012K11C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4313 MMWEBSDK/20220805 Mobile Safari/537.36 MMWEBID/4629 MicroMessenger/8.0.27.2220(0x28001B37) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
      't': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQyNjQ3NDIsIm5iZiI6MTY2MzE2MjU0MiwiaWF0IjoxNjYzMTYwNzQyLCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjo0MDg1NDA5OCwiZGVidWciOiIiLCJsYW5nIjoiIn0.3lbbUMIuCaC5OZLdXlUtorjWu4JrKpeZCldH4unbf2Q'
    }
  })
    .then(res => {
      ok++;
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
      err++;
    })
    .finally(() => {
      console.log(`====================羊了个羊勇敢通关${ok}次====================`);
      console.log(`====================羊了个羊闯关失败${err}次====================`);
    })
    ;
}

setInterval(() => {
  sheep_win()
}, 1500)
