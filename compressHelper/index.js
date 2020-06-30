const compressing = require("compressing");
const d = new Date();

const time = `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;

async function compressDist() {
  try {
    let compressionFileName = `dist.${time}.zip`;
    await compressing.zip.compressDir("dist", compressionFileName);
  } catch (err) {
    console.log(`压缩出错：${err}`);
  }
}

compressDist();
