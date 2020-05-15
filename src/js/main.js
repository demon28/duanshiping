/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

//1,intelliJ idea
//2,easyclick 插件安装
//3,新建项目
//4,Javascript , Html, android
//5,布局文件（html）

var count;
var randomFrom;
var randomTo;
var OpenAppName;
var isDy;

function main() {

count = readConfigString("swipecount");
randomFrom= readConfigString("swiptimeefrom");
randomTo = readConfigString("swiptimeeto");
isDy=readConfigString("dyjs");

logd(isDy);

if(isDy=="true") {
OpenAppName = "抖音极速版";
}else{
OpenAppName = "快手极速版";
};


//日志方法
logd(OpenAppName);


    var isac_result = isAccMode();
    if (!isac_result) {
        alert("请设置无障碍模式！");
        return;
    }

    //  打开应用
  
    utils.openAppByName(OpenAppName);
    toast("打开应用："+OpenAppName);

    if (isDy=="true") {
        DySwipe();
    }else{
         KsSwipe();
    }


}
//滚动方法
function Roll(){
    var ScreenHeight= device.getScreenHeight();
    var screenWidth= device.getScreenWidth();

    var randomNum= random(20,100);
    var oldX =screenWidth/2+randomNum;
    var oldY=ScreenHeight*0.8+randomNum;;

    var newX=oldX+randomNum;;
    var newY=ScreenHeight*0.2+randomNum;;

    var roll_resulrt= swipeToPoint(oldX,oldY,newX,newY,200);


}

// 抖音滑动
function DySwipe(){
     sleep(2000);
     var RollCount=0;
     while(RollCount<=count){
         var watchtime=random(randomFrom,randomTo);
         toast("观看："+watchtime+"秒");
         sleep(watchtime*1000); //观看时间
         Roll();
         RollCount++;
         toast("滑动次数："+RollCount);
     }
}

function KsSwipe(){
logd("开始运行快手极速版");
 sleep(2000);
  var RollCount=0;
      while(RollCount<=count){

         if (text("滑块验证")) {
            logd("====出现滑块验证=====");
           // HuaKuai();
         }

          var watchtime=random(randomFrom,randomTo);
          toast("观看："+watchtime+"秒");
          sleep(watchtime*1000); //观看时间
          Roll();
          RollCount++;
          toast("滑动次数："+RollCount);
      }
}

/*
function  HuaKuai(){
     let request = image.requestScreenCapture();
            if (request){
                toast("申请截图成功");
            }else {
                toast("申请截图失败");
            }

             let imageX = image.captureScreen(); //屏幕截图
             logd("截图结果："+imageX);
             let r = image.clip(imageX,42,226,1031,802);//裁剪图片
             toast("r: "+r);
             logd("uuid:"+r.uuid);
             let baseimage=image.toBase64(r);
             toast("result123 "+baseimage);

        var Hd=  GetHuakuaiPoint(baseimage);

}

function GetHuakuaiPoint(baseimage){}
*/
main();
