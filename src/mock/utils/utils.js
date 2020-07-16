import qs from "qs";

/***
 * 获取query参数
 */
const getQueryParam = function(options) {
  let url = options.url;
  let queryStr = url.split("?")[1];
  if (queryStr.length > 0) {
    return qs.parse(queryStr);
  } else {
    return {};
  }
};

/**
 * 获取请求body参数
 * @param {object} options 请求项
 */
const getBody = function(options) {
  return options.body && JSON.parse(options.body);
};

/**
 * 构造返回数据
 * @param {Object} data 数据
 * @param {String} msg  返回数据
 * @param {Number} code 状态码 2000代码成功，其他失败
 * @param {object} other 其他参数
 */
const buildRes = function(msg, data = "", code = 2000, other) {
  let responseBody = {
    code: 2000,
    msg: "操作成功",
    res: data,
    ...other,
  };

  if (code !== undefined && code !== null) {
    responseBody.code = code;
  }

  if (msg !== undefined && msg !== null) {
    responseBody.msg = msg;
  }

  return responseBody;
};

/**
 * 分页器
 * @param {array} data 对象数组
 * @param {number} pageNum 页码
 * @param {number} pageSize 每页记录数
 */
const pager = function(data, pageNum, pageSize) {
  return data.filter((item, index) => index < pageSize * pageNum && index >= pageSize * (pageNum - 1));
};

export { getQueryParam, getBody, buildRes, pager };
