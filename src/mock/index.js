import Mock from "mockjs";

import AddressService from "@/mock/api/address.mock";

//  设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: "300 - 600",
});

/** ******************* 地址的增删改查************************* **/
//  地址列表
Mock.mock(/\/address\/list/, "get", AddressService.list);

//  新增地址
Mock.mock(/\/address\/add/, "post", AddressService.add);

//  删除地址
Mock.mock(/\/address\/delete/, "delete", AddressService.delete);

//  修改地址
Mock.mock(/\/address\/update/, "put", AddressService.update);

//  地址详情
Mock.mock(/\/address\/detail/, "get", AddressService.detail);
