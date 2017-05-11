var opts="<div class='body-out'>"+
         "<img src='1.png'>"+
         "<div class='body-detail'>杭州师范大学</div>"+
         "</div>"
var map = new BMap.Map("container"); 
var point = new BMap.Point(120.143051, 30.246092);
map.centerAndZoom(point, 15);   
// window.setTimeout(function() {
//   map.panTo(new BMap.Point(120.143051, 30.246092));
// }, 2000); 
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.enableScrollWheelZoom();
var local = new BMap.LocalSearch(map, {
	renderOptions: {
		map: map,
		autoViewport: true
	}
});
local.searchNearby("西湖","宾馆");
var transit = new BMap.TransitRoute(map, {
	renderOptions: {
		map: map,
		panel: "results"
	}
});

transit.search("杭州师范大学仓前新校区","西湖区宾馆");


$("#box-window").hide();
map.clearOverlays();
var point = new BMap.Point(120.0162140000,30.2966700000);       
      var marker = new BMap.Marker(point);// 事务服务中心    
      map.addOverlay(marker);
      marker.addEventListener("click", function(){ 
      var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
      map.openInfoWindow(infoWindow, point); // 打开信息窗口
  });
  var point = new BMap.Point(120.0152170000,30.2964050000);// 博文苑8号楼       
  var marker = new BMap.Marker(point);   
  map.addOverlay(marker);
  marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0157920000,30.2965420000);// 博文苑9号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0175440000,30.2968960000);// 恕园24号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0177680000,30.2966700000);// 恕园19号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0175390000,30.2979800000);//恕园35号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0184110000,30.2979570000);// 恕园30号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0193490000,30.2978860000);// 恕园29号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0198160000,30.2980190000);// 恕园28号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0205130000,30.2979370000);// 恕园27号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0201400000,30.2977310000);// 恕园20号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0206200000,30.2973840000);// 恕园16号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0204630000,30.2969510000);// 恕园10号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0206290000,30.2967950000);// 恕园9号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0197720000,30.2970910000);// 恕园17号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0195830000,30.2973990000);// 恕园21号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0198660000,30.2968030000);// 恕园12号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0193720000,30.2966820000);// 恕园14号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0198610000,30.2964090000);// 恕园11号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0193670000,30.2966740000);// 恕园14号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0191790000,30.2964330000);//一鸣真鲜奶吧        
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0204500000,30.2957230000);// 恕园2号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0190350000,30.2952550000);// 恕园7号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0162820000,30.2958640000);// 博文苑6号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0165110000,30.2957230000);// 博文苑5号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0161920000,30.2950180000);// 博文苑4号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0162820000,30.2947920000);// 博文苑3号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0168390000,30.2962570000);// 菜鸟驿站    
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0181860000,30.2964210000);// 杭州师范大学外国语学院       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0183660000,30.2973950000);// 杭州师范大学公共艺术教育部       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0183300000,30.2974420000);// 恕园23号楼      
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0168660000,30.2955130000);// 帮帮数码       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0170230000,30.2953800000);//超市       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0158060000,30.2951890000);//demo照相馆      
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0153110000,30.2977190000);//弘一大师 丰子恺研究中心       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0140540000,30.2972280000);//恕园38号楼      
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0183300000,30.2974420000);// 恕园23号楼      
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0200680000,30.2948540000);// 阿里巴巴商学院      
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0188460000,30.2943240000);//恕园3号楼       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0175030000,30.2939960000);//恕园5号楼   
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0172340000,30.2937080000);//杭州师范大学2号餐厅      
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0167940000,30.2935560000);// 博文印象      
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0158410000,30.2936690000);//杭州师范大学仓前校区恕园食堂       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0143370000,30.2951150000);//体育场      
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0222460000,30.2987280000);//杭州师范大学图书馆       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0222240000,30.2976720000);//杭师大中心区西块      
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0123380000,30.2962610000);//杭州师范大学篮球场       
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});
      var point = new BMap.Point(120.0174310000,30.2946820000);//棋乐奕秋棋社    
      var marker = new BMap.Marker(point);   
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point); // 打开信息窗口
});


      
