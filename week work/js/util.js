/*
 * Created by hxsd on 2016/9/7.
 */


 var $={
     ajax1: function(method,url,success){
         //创建核心对象
         var xhr=this.createRequest();
         //配置请求和响应参数
         xhr.open(method,url,true)
         //配置回调函数
         xhr.onreadystatechange=function() {
             if (xhr.readyState == 4) {
                 //status-状态码：200-成功 ，404-文件未找到；
                 if (xhr.status == 200) {
                     success(xhr.responseText);//调用函数
                 } else {
                     success('文件未找到:' + xhr.status);//调用函数
                 };
             };
         };
         xhr.send(null);
     },

     ajax2: function (options){
         //创建核心对象
         var xhr=this.createRequest();
         //配置请求和响应参数
         xhr.open(options.method,options.url,true)
         //配置回调函数
         xhr.onreadystatechange=function() {
             if (xhr.readyState == 4) {
                 //status-状态码：200-成功 ，404-文件未找到；
                 if (xhr.status == 200) {
                     if ( options.success){
                         options.success(xhr.responseText);//调用函数
                     };
                 }else {
                     if(options.error){
                         options.error(xhr.status);//调用函数
                     };
                 };
             };
         };
         xhr.send(null);     //发送请求
     },

     getJSON: function (url,success) {
         //创建核心对象
         var xhr=this.createRequest();
         //配置请求和响应参数
         xhr.open("GET",url,true);
         //配置回调函数
         xhr.onreadystatechange=function() {
             if (xhr.readyState == 4) {
                 //status-状态码：200-成功 ，404-文件未找到；
                 if (xhr.status == 200) {
                     success(JSON.parse(xhr.responseText));//调用函数
                 } else {
                     success('文件未找到:' + xhr.status);//调用函数
                 };
             };
         };
         xhr.send(null);
     },

     //xhr对象的兼容写法
     createRequest:function(){

        var xhr;
         try{   //类似if语句
            xhr = new XMLHttpRequest();
         }catch (e){    //类似else语句
             //说明浏览器不支持标准的xhr创建方式--比较老的IE浏览器（面临倒闭）
             try{
                 xhr = new ActiveXObject("Msxm12.XMLHTTP");
             }catch (e){
                 //说明遇到了更老版的IE浏览器
                xhr = new ActiveXObject("Microsoft.XMLHTTP");

             };
         };
         return xhr;
     }
 };




