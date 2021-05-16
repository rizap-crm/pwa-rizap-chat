// MM/DD/YYYY ==> YYYY-MM-DD
function convertDate(dateStr){ 
  var dateArr = dateStr.split("/");
  // Kendo UI Calendar 的日期是類似 2/9/2020，月和日不會補0
  //if (dateArr[0].length ==1) dateArr[0]= "0"+dateArr[0];
  //if (dateArr[1].length ==1) dateArr[1]= "0"+dateArr[1];
  return dateArr[2]+"-"+dateArr[0]+"-"+dateArr[1];
}

// 設定 $a enabled 或 disabled
function setEnabled($a, Enabled ){
  $a.each(function(i, a){          
    var en = a.onclick !== null;        
    if(en == Enabled)return;
    if(Enabled){
      a.onclick = $(a).data('orgClick');            
    }
    else
    {
      $(a).data('orgClick',a.onclick);
      a.onclick = null;
    }
  });
}

function 取得經緯度() {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude, position.coords.longitude);
    目前位置緯度 = Math.floor(position.coords.latitude * 10000) / 10000;
    目前位置經度 = Math.floor(position.coords.longitude * 10000) / 10000;
    $("#deleteMe").text("所在位置 緯度: " + String(目前位置緯度) + ", 經度: " + String(目前位置經度));
  });
}

// 計算 兩點 間的距離
function calcDistance(lat1, lon1, lat2, lon2) {
  var R = 6371000; // meter
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

function readCourses(){
  //console.log("call API to Read Database");
  //userName = decodeURI(displayName[1]);

//  courseData = JSON.parse(courseDataStr);
//  courseMember = JSON.parse(courseMemberStr);
  userId = "userId=U8570ed5006325d504933612308d0fddf".split("=");

  inCourse=[]; 
  var attended=false;
  var isNow=false;
  var inHistory=false; 
  courseMember.forEach(function(course, index, array){  
    attended = false;        
    for (var i=1; i<course.length;i++) {
      if (course[i][3] == userId[1]) {              
        //console.log(course[0],userName, "已參加")
        attended = true;
      }
    };

    isNow = false;
    courseData.forEach(function(newCourse, index, array){
      if (newCourse[0]==course[0]) isNow = true; 
    });

    inHistory = false;


  });  
};

function 更新資料() {
  console.log("更新資料");
 
  註冊會員();
  console.log(已經是會員);

  if (!已經是會員) {
    loadCourses = true;
    getCourseData(預約課程DataSource);  
  }
  
  app.navigate('#:back');
}

// 非同步+await
function callAPI(param, loadingMessage) {
  return new Promise(function(resolve, reject) {       
    var request = new XMLHttpRequest();
    request.open('GET', apiSite +param, true);

    request.onload = function() {
      $.loading.end();
      //console.log(this.response);

      resolve(this.response);
    }
    // Send API request 
    $.loading.start(loadingMessage);

    request.send();    
  });
}
//

function clearSearchText(){
  $("#searchText").val("");
  searchChat("");
}

function scrollToBottom(toBottomId){
  console.log(toBottomId)
  const appScroller=app.view().scroller;
  const scrollDistance= appScroller.height() - appScroller.scrollHeight(); 
  if (scrollDistance < 0) {
    console.log(scrollDistance);
    appScroller.animatedScrollTo(0,scrollDistance);
    setTimeout(function(){$("#toBottom").hide()}, 1);
    show到底 = false;
  }
}

function scrollToTop(toBottomId){
  console.log(toBottomId)
  const appScroller=app.view().scroller;
  appScroller.animatedScrollTo(0,0);
}
  
function checkScroll(){
  const appScroller= app.view().scroller;
  const scrollDistance= appScroller.height() - appScroller.scrollHeight(); 
  if (scrollDistance < 0) {
    $("#toBottom").show();  
    show到底 = true;
  }
}