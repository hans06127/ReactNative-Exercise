/**
 * 
 * @param {*} _body 
 * @returns 
 */
export function fetchData(_body) {
  const REQUERY_URL = 'https://script.google.com/macros/s/AKfycbxQwbGgoA0AjvC6OVM4fkb7IKpERV81eprJIZKzQ5h_4ZnUSJ8qufcIDedyW-FpuZve/exec'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      Account: 'applicaion/json',
      followAllRedirects: true
    },
    body: encodeURI(JSON.stringify(_body))
  }
  return new Promise(function (resolve, reject) {
    fetch(REQUERY_URL, options)
      .then((res) => res.json())
      .then((responseData) => {
        // 使用者資訊寫入全域 redux
        // console.log(responseData)
        if (responseData.state == 'success') {
          resolve(responseData)
        } else {
          resolve(responseData)
        }
      })
      .catch((err) => {
        console.log('error 是', err)
      })
  })
}