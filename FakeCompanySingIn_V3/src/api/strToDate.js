export function strToDate(_p, _date) {
  let nubToCh = ['日', '一', '二', '三', '四', '五', '六',]
  if (_date) {
    var item = new Date(_date)
    if (_p == 'date') {
      return `${item.getFullYear()}/${addZero(item.getMonth() + 1)}/${addZero(item.getDate())}`
    } else if (_p == 'time') {
      return `${item.getHours()}:${addZero(item.getMinutes())}:${addZero(item.getSeconds())}`
    } else if (_p == 'day') {
      return `週${nubToCh[item.getDay()]}`
    }
    else {
      return `${item.getFullYear()}/${addZero(item.getMonth() + 1)}/${addZero(item.getDate())} ${item.getHours()}:${addZero(item.getMinutes())}:${addZero(item.getSeconds())}`
    }
  }
}

const addZero = (_num) => _num < 10 ? '0' + _num : _num
