//ajax 数据请求的      异步加载图片
// let promise  
function ajax (url) {
    return new Promise ((resolve,reject) => {
        let xml = new XMLHttpRequest ()
        xml.open('get',url)
         xml.onreadystatechange = function() {
            if (xml.readyState != 4) return;
            if (xml.status === 200) {
                resolve (JSON.parse(xml.responseText));
            } else {
                reject ("error")
            }
        }
          xml.send (null);
    }) 
}
class creatImg {
    constructor () {
        this.init()
    }
    init () {
        this.createWrap()
    }
    createWrap () {
        ajax("./data/data.json").then((result) => {
            //加载图片
            for(let i in result){
                let image = new Image()
                image.src = result[i].img
                document.body.append(image)
            }
            }).catch((error) => {
                console.log(error);
            });
    }
}
let imgs = new creatImg()
 