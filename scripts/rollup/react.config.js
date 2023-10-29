import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

function getInput(pkgName, isDist) {
  const pkgPath = path.resolve(
    fileURLToPath(import.meta.url),
    `../../../packages/${pkgName}`
  );
  const json = fs.readFileSync(`${pkgPath}/package.json`, "utf-8");

  const distPath = path.resolve(pkgPath, "dist/node_modules");
  // if (isDist) {
  //   return `${distPath}/${pkgName}`;
  // }
  // return `${pkgPath}/${pkgName}`;
  return {
    data: JSON.parse(json),
    distPath,
    pkgPath,
  };
}
const { data, distPath, pkgPath } = getInput("react");
console.log({ data, distPath, pkgPath });
export default {};
