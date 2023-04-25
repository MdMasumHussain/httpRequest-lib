# httpRequest-lib

you can use it for http request to easy your code.


how to use it?

call the constructor like:
"var req = new httpRequest()"

then you use the funtion:
"req.request(mathod,url)"

if you want to creat POST http request you can take a more paramiter "data" as like:
"req.request(mathod,url,data)"

then you call ".then()" mathod for response and
you can call ".catch()" mathod for error handeling..

the code is:
.then((response)=>{
Wright your statement....... 
})
.catch((err)=>{
Wright your statement....... 
});

thanks for use it..
