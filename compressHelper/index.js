const compressing = require("compressing");
const d = new Date();
const chalk = require("chalk");

const log = (message) => console.log(chalk.blue(`${message}`)); // normal log
const successLog = (message) => console.log(chalk.green(`${message}`)); // success log
const errorLog = (error) => console.log(chalk.red(`${error}`)); // error log

const time = `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;

/**
 * 执行压缩
 */
const runCompress = async function() {
  try {
    const compressDir = process.argv[2]; // 需要压缩的文件夹
    let compressionFileName = `${compressDir}.${time}.zip`;
    await compressing.zip.compressDir(`${compressDir}`, compressionFileName);
    successLog(`已压缩${compressDir}包！`);
  } catch (err) {
    errorLog(`压缩出错：${err}`);
  }
};

runCompress();
