var isAndroid = kendo.support.mobileOS.android;

// override datasources
預約課程DataSource = new kendo.data.DataSource({
  // 使用 data 的方法一
  //  data: [
  //      {
  //        "課程名稱": "一起來運動",
  //        "url": "2-views/courseDetail.html?courseId=U0001",
  //        "section": "A"
  //      },
  //      {
  //        "課程名稱": "運動運動",
  //        "url": "2-views/pullToRefresh.html?courseId=U0002",
  //        "section": "A"        
  //      },
  //      {
  //        "課程名稱": "年後減肥大作戰",
  //        "url": "2-views/courseDetail.html?courseId=U0003",
  //        "section": "B"        
  //      },
  //      {
  //        "課程名稱": "飛輪",
  //        "url": "2-views/courseDetail.html?courseId=U0004",
  //        "section": "B"        
  //      },
  //      {
  //        "課程名稱": "瑜珈",
  //        "url": "2-views/courseDetail.html?courseId=U0005",
  //        "section": "C"        
  //      },    
  //    
  //  ],
  
  // 使用 data 的方法二, transport
  transport: {
    read: function (data) { 
      //getCourseData(預約課程DataSource); 
      get預約課程(預約課程DataSource); 
                          }
  },
//  sort: {
//    field: "課程名稱",
//    dir: "asc"
//  },
  requestStart: function () {
    kendo.ui.progress($("#loading"), true);
  },
  requestEnd: function () {
    kendo.ui.progress($("#loading"), false);
  },

  schema: {
    total: function () {
//      console.log("scheme total");
//      取得經緯度();    
//      return 77;
    }
  },
  serverPaging: true,
  pageSize: 40,
  //group: { field: "section" }
})

searchDataSource = 預約課程DataSource;
//var indexForTest=0;
var dataTemp=[];

function get預約課程(data) {
  console.log("prepare data for 預約課程ListView");
  
  for (var i=0; i< inCourse.length; i++){
    dataTemp.push(inCourse[i]);
  }  

  data.success(dataTemp.slice().reverse()); //加上 slice() 才不會改變 dataTemp

  if (dataTemp.length==0) {
    $("#mainTitle").text("無預約課程");
  }else {
    $("#mainTitle").text("已預約課程");
  }    
}

function mainShow(e) {
  console.log("main page showed");
  if (show到底) {
    $("#toBottom").show();
  } else {
    $("#toBottom").hide();
  }

  $("#chatTypeInput").hide();
  $("#searchBar").hide();
  $(".km-on-ios .km-list > li").css("border-width", "2px");
  
  $(".km-nova .km-content").css("background-image", "url('./equipBg.png')");
  $(".km-on-ios .km-list > li").css("background", "rgba(155,155,155, 0.5)");
  
  if (inCourse.length == 0) setTimeout(function() {$("#mainTitle").text("無預約課程");}, 10);
}
//
//function chatShow(e) {
//  console.log("chat page showed");
//
//  const enterInputHTML = "<hr><input id=\"chatTypeInputText\" type=\"text\" class=\"NotoSansFont\" placeholder=\"Type here ...\" style=\"border-width:0px;margin-left:20px; background:aqua;padding:10px; border-radius:10px; width:80%\"><span style=\"margin-left: 10px\" onclick=\"console.log('send a message')\">Send</span>";
//  
//  setTimeout(function(){ 
//    $(".km-nova .km-content").css("background-image", "url('./mtgBg.png')");
//    console.log("aaa");
//  }, 1000);
//  
//  $("#chatTypeInput").html(enterInputHTML);
//  $("#chatTypeInput").show();
//}

function removeView(e) {
  //console.log("removeView", e);  
  if (reloadCourseNeeded) {
    readCourses(); 
    reloadCourseNeeded = false;
  }
  if (!e.view.element.data("persist")) {
    //console.log(e);
    
    // KPC: 找不到 persist 如何設定，只好用粗暴的做法
    if (e.view.id != "#forms") e.view.purge();
    
    //e.view.purge();
  }

}

function initMainListView(e){
  console.log("initMainListView");
//  var scroller = e.view.scroller;
//  scroller.bind("scroll", function(e) {
//    /* The result can be observed in the DevTools(F12) console of the browser. */
//    console.log("top***:",e.scrollTop);
//    /* The result can be observed in the DevTools(F12) console of the browser. */
//    console.log("left***:",e.scrollLeft);
//  });   
}

var chatListViewScrollTop;
function initChatListView(e) {
  console.log("initChatListView");
//  var scroller = e.view.scroller;
//  scroller.bind("scroll", function(e) {
////    console.log("top***:",e.scrollTop, scroller.scrollHeight() - scroller.height());
//    chatListViewScrollDiffer = e.scrollTop - (scroller.scrollHeight() - scroller.height());
//    if (chatListViewScrollDiffer==0) {
//      console.log("at bottom");
//      $("#toBottom").hide();
//    } else {
//      $("#toBottom").show();
//    }
//  });
  
}

var desktop = !kendo.support.mobileOS;

function searchChat(searchFor){ 
  console.log("serch for chat:", searchFor);
  try {
    var numOfItems = chatDataSource.lastRange().end;
    for (var i=0; i< numOfItems; i++){
      var item = chatDataSource.at(0);
      chatDataSource.remove(item);
    }
  }catch(e){
    console.log(e);
  } 
  
  matchMsgs =[];
  for (var i=0; i< messages.length; i++){
    if (messages[i].message內容.includes(searchFor)) {
      matchMsgs.push(messages[i]);
    }
  }
  
  chatDataSource.success(matchMsgs);

  for (var i=0; i< messages.length; i++){
    const msgLength = messages[i].message內容.length;
    //console.log(msgLength);

    //data.add(messages[i]);

    if (messages[i].發送者 == 'Me') {
      const msgId = "#msgContent"+messages[i].message編號;
      const msgTimeId = "#msgTime"+messages[i].message編號;


      $(msgId).css("text-align", "right");
      $(msgId).css("margin-left","20%");
      $(msgId).css("background", "rgba(0,255,255,0.8)");
      $(msgTimeId).css("float","right");

    }
  }
  $(".km-on-ios .km-list > li").css("border-width", "0px");
  scrollToTop("");
}


function search已報名課程(searchFor){
  
  try {
    var numOfItems = navDataSource.lastRange().end;
    for (var i=0; i< numOfItems; i++){
      var item = navDataSource.at(0);
      navDataSource.remove(item);
    }
  }catch(e){
    console.log(e);
  }  
  
  var dataTemp =[];
  inCourse.forEach(function(course, index, array){
    courseData.forEach(function(item, ind, arr){
      if (course==item[0]) {
        
        if (courseData[ind][0].includes(searchFor)
         || courseData[ind][1].includes(searchFor)
         || courseData[ind][2].includes(searchFor)
         || courseData[ind][3].includes(searchFor)
         || courseData[ind][5].includes(searchFor) || (searchFor=="免費" && courseData[ind][5]=='0')
        ){
          console.log("match" );
        
          //console.log(course, ind);
          var 課程圖片Url = ( courseData[ind][11] !="")?courseData[ind][11]:"picPlaceholder.png";
          var courseTitle = {
            "課程編號": courseData[ind][0],              
            "課程名稱": courseData[ind][1],
            "老師時間": courseData[ind][2] + " | " + courseData[ind][3], 
            "課程費用": courseData[ind][5],  
            "課程圖片": 課程圖片Url,
            "繳費狀況": "未繳費",
            "繳費狀況顏色": "coral",              
            "url": "2-views/courseDetail.html?courseId=" + courseData[ind][0],
            "section": "A"             
          };   

          courseMember.forEach(function(course1, index1, array1){
            //console.log(index1, courseData[ind][0]);
            if (course1[0]==courseData[ind][0]) {
              for (var i=1; i< course1.length;i++){
                //console.log(course1[i][3]);
                if (course1[i][3]== userId[1] && course1[i][1]=="已繳費") {
                  courseTitle.繳費狀況 = "已繳費";
                  courseTitle.繳費狀況顏色 = "darkslategray";
                } else if (course1[i][3]== userId[1] && course1[i][1]=="免費") {
                  courseTitle.繳費狀況 = "免費";
                  courseTitle.繳費狀況顏色 = "darkslategray";                    
                }
              }
            }
          });           

          navDataSource.add(courseTitle);
          //dataTemp.push(courseTitle);
        }
      }
    });
  });
}

// for index2.html
chatDataSource = new kendo.data.DataSource({
        // 使用 data 的方法一
//          data: [
//            { "message編號": '0001',
//              "messageType": 'text',
//              "message內容": 'Hello',
//              "發送者":  'notMe',   
//              "message時間": '2021/05/13 10:59',
//              "message圖片":  '../btn.png',
//            },
//            { "message編號": '0002',
//              "messageType": 'img',         
//              "message內容": 'What can I help you? hdjkhdksa khjdaksljdlajsda kjdsalkdjladja kjldsldjalj',
//              "發送者":  'Me',   
//              "message時間": '2021/05/13 11:02',
//              "message圖片":  '../dog.png',
//            },               
//            
//          ],

        // 使用 data 的方法二, transport
        transport: {
          read: function (data) { getChatData(chatDataSource);  }
        },
      //  sort: {
      //    field: "課程名稱",
      //    dir: "asc"
      //  },
        requestStart: function () {
          kendo.ui.progress($("#loading"), true);
        },
        requestEnd: function () {
          kendo.ui.progress($("#loading"), false);
        },

        schema: {
          total: function () {
//            console.log("scheme total");
//            取得經緯度();    
            return 77;
          }
        },
        serverPaging: true,
        pageSize: 40,
        //group: { field: "section" }
      });
    
    var matchMsgs=[];
    function getChatData(data){
      
      if ($("#searchBar").css("display")=="block") {
        chatDataSource.success(matchMsgs); 
        for (var i=0; i< matchMsgs.length; i++){
          const msgLength = matchMsgs[i].message內容.length;
          //console.log(msgLength);

          //data.add(messages[i]);

          if (matchMsgs[i].發送者 == 'Me') {
            const msgId = "#msgContent"+matchMsgs[i].message編號;
            const msgTimeId = "#msgTime"+matchMsgs[i].message編號;


            $(msgId).css("text-align", "right");
            $(msgId).css("margin-left","20%");
            $(msgId).css("background", "rgba(0,255,255,0.8)");
            $(msgTimeId).css("float","right");

          }
        }  
        $("#msgContentdummy").css("background", "transparent");
        $("#msgContentdummy").css("height", "30px");        

        setTimeout( function() {
          scrollToBottom("chatListView");
          $(".km-on-ios .km-list > li").css("background", "transparent");
        }, 1);
        
        return;
      }
        
      
      console.log("getChatData");

      data.success(messages);
      
      for (var i=0; i< messages.length; i++){
        const msgLength = messages[i].message內容.length;
        //console.log(msgLength);

        //data.add(messages[i]);
        
        if (messages[i].發送者 == 'Me') {
          const msgId     = "#msgContent"+messages[i].message編號;
          const msgPictId = "#msgPicture"+messages[i].message編號;
          const msgTimeId = "#msgTime"   +messages[i].message編號;

          $(msgId).css("text-align", "right");
          $(msgId).css("margin-left","20%");
          $(msgId).css("background", "rgba(0,255,255,0.8)");
          $(msgPictId).css("margin-left","20%");
          $(msgTimeId).css("float","right");
          
          if (messages[i].messageType == 'picture' || messages[i].messageType == 'emoji' ) {
            //console.log(msgId);
            $(msgId).hide();
            if (messages[i].messageType == 'emoji' ){
              $(msgPictId).css("width", "80px");
              $(msgPictId).css("margin-left", "75%");
            }
          }          

        }
      }  
      
      $("#msgContentdummy").css("background", "transparent");
      $("#msgContentdummy").css("height", "45px");
      
      setTimeout( function() {
        scrollToBottom("chatListView");
        $(".km-on-ios .km-list > li").css("background", "transparent");
      }, 1);
    }
    
    function chatShow(){
      $("#chatTypeInput").show();
      $(".km-on-ios .km-list > li").css("border-width", "0px");
      $(".km-on-ios .km-list > li").css("background", "transparent");
      $(".km-nova .km-content").css("background-image", "url('./mtgBg.png')"); 
      
    }
    
    function showSearchBar(){
      $("#searchBar").show();
      $("#searchText").val("");
      $("#searchText").focus();
    }
// end of for index2.html

window.app = new kendo.mobile.Application($(document.body), {
  layout: "courseDiv",
  transition: "slide",
  skin: "nova",
  icon: {
    "": '@Url.Content("~/content/mobile/AppIcon72x72.png")',
    "72x72": '@Url.Content("~/content/mobile/AppIcon72x72.png")',
    "76x76": '@Url.Content("~/content/mobile/AppIcon76x76.png")',
    "114x114": '@Url.Content("~/content/mobile/AppIcon72x72@2x.png")',
    "120x120": '@Url.Content("~/content/mobile/AppIcon76x76@2x.png")',
    "152x152": '@Url.Content("~/content/mobile/AppIcon76x76@2x.png")'
  }
});