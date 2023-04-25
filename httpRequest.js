
var mtd,urlx,dta;
let httpRequest = function() {
  this.request  = (mathod,url,data)=>{
    this.mathod = mathod;
    this.url = url;
    this.data = data;
    mtd = this.mathod;
    urlx = this.url;
    dta = this.data;
    const promise = new Promise((resolve,reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open(mtd,urlx);
      xhr.send(data);
      xhr.onload = function () {
        resolve(xhr.response);
      }
      xhr.onerror = function () {
        reject("something went wrong!");
      }
    })
    return promise;
  }
}
