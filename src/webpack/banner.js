module.exports = function banner() {
  const author = "LuiGee3471";
  const buildTime = new Date().toLocaleString();

  return `작성자: ${author}
작성 시간: ${buildTime}`;
};
