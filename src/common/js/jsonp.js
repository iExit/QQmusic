// 引入jsonp包
import originJSONP from 'jsonp'
// 自定义一个方法,返回promise，并暴露出去
export default function jsonp(url, data, option) {
//   如果有?那就直接拼接 &，如果没有?就接上?
  url+=(url.includes('?')?'&':'?')+param(data)
  return new Promise((resolve, reject) => {
    // 调用原始的jsonp方法，因为该方法没有url上的data参数，所以需要拼接上去
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  // 遍历data对象，将key和value拼接到url上
  for (let k in data) {
    // 过滤undefined
    let value = data[k] !== undefined ? data[k] : ''
    // 把字符串作为 URI 组件进行编码
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // substring(1)从位置1开始截取，&a=1 => a=1
  // 去除url开头的&符号
  return url ? url.substring(1) : ''
}
