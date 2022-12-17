let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);

//刷牙  -> 吃早餐 ->寫功課
let brushPromise = doWorkPromise('刷牙', 3000);
//promise chan
brushPromise
  .then((data) => {
    console.log('brushPromise',data);
    let eatPromise = doWorkPromise('吃早餐',5000);
    return eatPromise;
  })
  .then((data) => {
    console.log('eatPromise',data);
    let eatPromise = doWorkPromise('寫功課',5000);
    return eatPromise;
  })
  .catch((err) => {
    console.error('發生錯誤', err);
  });