/**
 *  把一个字符串中的首字母提取并转换成大写，使用.作为分隔符
 *  world wild web ==> W. W. W.
 *  
 *      
 */
import fp from "lodash/fp.js";

const firstLetterToUpper = fp.flowRight(
  fp.join(". "),
  fp.map(fp.flow(fp.first, fp.toUpper)),
  fp.split(" ")
);

console.log(firstLetterToUpper(`world wild web`));
