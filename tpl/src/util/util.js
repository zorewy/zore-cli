/**
 * Created by DongDong on 2017/12/13.
 */
class Util {
  static dateFormat(inputTime) {
    if (inputTime) {
      let date = new Date(parseInt(inputTime, 10));
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    } else {
      return '';
    }
  }

  static hhmmssFormat(inputTime) {
    if (inputTime) {
      let date = new Date(parseInt(inputTime, 10));
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return h + ':' + minute + ':' + second;
    } else {
      return '';
    }
  }

  static timeFormat(value) {
    if (value) {
      let minutes = value / 1000 / 60;
      let hours = minutes / 60;
      if (hours / 24 >= 1) {
        let hour = hours % 24;
        hours = parseInt(hours / 24, 10) + '天' + parseInt(hour, 10) + '小时'; //超过24小时，显示天
      } else {
        hours = (hours < 1 ? '' : (parseInt(hours, 10) + '小时'));
      }
      let minute = parseInt((minutes % 60), 10);
      minutes = ((minute === 0 && minutes < 60) ? 1 : minute) + '分钟';  // 如果剩余的分钟小于1分钟，且总分钟小于60分钟时，显示1分钟
      return hours + minutes;
    } else {
      return '';
    }
  }

  static dateMillionsFormat(inputTime) {
    if (inputTime) {
      return new Date(inputTime).getTime();
    } else {
      return '';
    }
  }

  static storeListFormat(store) {
    if (Array.isArray(store)) {
      let formatArr = [];
      store.map(function (item) {
        return formatArr.push(item.storeNo + ',' + item.name);
      });
      return formatArr;
    } else {
      return []
    }
  }

  static clientsListFormat(clients) {
    if (Array.isArray(clients)) {
      let formatArr = [];
      clients.map(function (item) {
        return formatArr.push(item.appId);
      });
      return formatArr;
    } else {
      return []
    }
  }

  static dateDownloadFormat(inputTime) {
    if (inputTime) {
      let date = new Date(parseInt(inputTime, 10));
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d + ' ' + h + '-' + minute + '-' + second;
    } else {
      return '';
    }
  }

  static isEmptyObject(obj) {
    for (let key in obj) {
      return false;//返回false，不为空对象
    }
    return true;//返回true，为空对象
  }

  static isAccuracyEmptyObject(obj) {
    if (Object.prototype.toString.call(obj) === "[object Object]") {
      return Object.keys(obj).length === 0
    } else {
      return false
    }
  }

  static isPositiveInteger(number) {
    let res = /^[0-9]+$/;
    return res.test(number)
  }

  static isEffectivePrice(number) {
    let res = /^[0-9]+(\.[0-9]{1,2})?$/;
    return res.test(number)
  }

  static isLegalWeight(number) {
    let res = /^\d+(\.\d{1,3})?$/;
    return res.test(number)
  }

  static isLegalDistance(number) {
    let res = /^\d+(\.\d{1})?$/;
    return res.test(number)
  }

  static downFile(blob, fileName) {
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, fileName);
    } else {
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      let evt = document.createEvent("MouseEvents");
      evt.initEvent("click", false, false);
      link.dispatchEvent(evt);
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    }
  }

  static priceFormat(price) {
    if (/^[0-9]+$/.test(price)) {
      return price / 100
    } else {
      return ''
    }
  }

  static timeRangeFormat(time) {
    if (/^[0-9]+$/.test(time)) {
      let day = parseInt(time / 86400, 10)
      let hour = parseInt((time - day * 86400) / 3600, 10)
      let minute
      if (day === 0 && hour === 0) {
        minute = (time - day * 86400 - hour * 3600) / 60
      } else {
        minute = (time - day * 86400 - hour * 3600) % 60
      }
      let dayRes = day === 0 ? '' : (day < 10 ? ('0' + day) : day.toString())
      let hourRes = hour === 0 ? '' : hour < 10 ? ('0' + hour) : hour.toString()
      let minuteRes = minute === 0 ? '' : minute < 10 ? ('0' + minute) : minute.toString()
      return [dayRes, hourRes, minuteRes]
    } else {
      return ['', '', '']
    }
  }
}

export default Util;