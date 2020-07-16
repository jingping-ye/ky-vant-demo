/**
 * ***************************
 *  更新版本号助手：自动进一位 *
 * ***************************
 * Author:jingping.ye
 * CreateTime:2020/06/28 00:00:00
 */

const inquirer = require("inquirer");
const cp = require("child_process");
const chalk = require("chalk");

const log = (message) => console.log(chalk.green(`${message}`)); // 普通打印
const successLog = (message) => console.log(chalk.blue(`${message}`)); // 成功打印
const errorLog = (error) => console.log(chalk.red(`${error}`)); // 失败打印

const versionType = {
  major: "主版本",
  minor: "次版本",
  patch: "补丁",
  premajor: "预备主版本",
  prepatch: "预测次版本",
  prerelease: "预发布版本",
};

let versionQuery = {
  type: "list",
  name: "selectedVersion",
  message: "请选择要发布的版本类型：",
  choices: [],
};

versionQuery.choices = Object.keys(versionType).map((version) => {
  let choicesItem = {
    name: versionType[version],
    value: version,
  };
  return choicesItem;
});

inquirer.prompt(versionQuery).then((answer) => {
  let execCmd = `npm version ${answer.selectedVersion}`;
  cp.exec(execCmd, (err, output) => {
    if (err) {
      errorLog(err);
    } else {
      successLog(`版本已更新，当前版本号为：${output}`);
    }
  });
});
