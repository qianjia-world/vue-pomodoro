export default function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
  }
  return (`${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`);
}
// guid() // 'a1ca0f7b-51bd-4bf3-a5d5-6a74f6adc1c7'
