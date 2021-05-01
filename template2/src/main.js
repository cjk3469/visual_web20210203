
var first = document.getElementById("first");
first.addEventListener('click', function(event){
    OnloadImg('images/synchronization.png');
});

var second = document.getElementById("second");
second.addEventListener('click', function(event){
    OnloadImg('images/mybatis.png');
    
});
var third = document.getElementById("third");
third.addEventListener('click', function(event){
    OnloadImg('images/multithread.png');
    
});
var fourth = document.getElementById("fourth");
fourth.addEventListener('click', function(event){
    OnloadImg('images/filetransfer.png');
    
});

var img=new Image();
function OnloadImg(url){
    img.src=url;
    var img_width=img.width;
    var win_width=img.width+25;
    var height=img.height+30;
    var OpenWindow=window.open('','_blank', 'width='+img_width+', height='+height+', menubars=no, scrollbars=auto');
    OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+url+"' width='"+win_width+"'>");
  
   }