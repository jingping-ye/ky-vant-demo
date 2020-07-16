import { address } from "../model/address";
import { getQueryParam, getBody, buildRes, pager } from "../utils/utils";
import { Segment, useDefault } from "segmentit";

let addressList = address;

const segmentit = useDefault(new Segment()); // 中文分词

const addressService = {
  //  新增
  add(config) {
    const { phone, tel, areas, name, address, detailAddress, isDefault } = getBody(config);
    let addressId = addressList.length < 10 ? `0${addressList.length + 1}` : addressList.length + 1;
    addressList.push({
      id: `ADDRESS_${addressId}`,
      name,
      phone,
      tel,
      areas,
      address,
      detailAddress,
      isDefault,
    });
    return buildRes("添加成功！");
  },
  //  删除
  delete(config) {
    const { id } = getBody(config);
    addressList = addressList.filter((item) => item.id !== id);
    return buildRes("删除成功！");
  },
  //  更新
  update(config) {
    const { id, phone, tel, areas, name, address, detailAddress, isDefault } = getBody(config);
    let updateIndex = addressList.findIndex((item) => item.id === id);
    addressList[updateIndex] = {
      id: id,
      phone: phone,
      tel: tel,
      areas: areas,
      name: name,
      address: address,
      detailAddress: detailAddress,
      isDefault: isDefault,
    };
    return buildRes("更新成功！");
  },
  //  查询-列表-搜索
  list(config) {
    const { pageNum, pageSize, searchStr = "" } = getQueryParam(config);

    let curList = addressList;
    let returnData = {
      total: addressList.length,
      list: [],
    };

    //  搜索
    if (searchStr.trim().length > 0) {
      let searchStrSplitArray = segmentit.doSegment(searchStr, {
        simple: true,
      });
      curList = curList.filter((item) => searchStrSplitArray.some((str) => item.detailAddress.includes(str)));
      returnData.total = curList.length;
    }

    returnData.list = pager(curList, pageNum, pageSize);

    return buildRes("查询成功！", returnData);
  },
  //  查询-详情
  detail(config) {
    const { id } = getQueryParam(config);
    const list = addressList.filter((item) => item.id == id);
    return buildRes("查询成功！", list);
  },
};
export default addressService;
