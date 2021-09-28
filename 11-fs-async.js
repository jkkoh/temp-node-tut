const {readFile, writeFile} = require('fs');

console.log('start');
// 중간에 'utf8' 을 추가 하지 않으면 buffer 이 걸려 코드형식으로 문자열이 출력이 됨
//<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
//이것을 방지하기 위하여 readFile('주소','원하는 언어의 방식 (utf-8)' ,(callBack Function)=>
//이런식으로 써야 한다

readFile('./content/first.txt','utf8' ,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    //console.log(result);
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task');