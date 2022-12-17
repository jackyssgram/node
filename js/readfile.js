const fs = require('fs');

let p = new Promise((resolve, reject) => {
fs.readFile('text.txt','utf-8', (err, data) => {
  resolve(data)
});
})
p.then((data) => {
    console.log('成功讀到資料:',data);
  }).catch((err) => {
    console.error('發生錯誤了',err);
  });


