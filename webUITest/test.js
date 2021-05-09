const friends = [
  { name: "Miro Badev", email:"mirobadev@gmail.com", status:"available",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg"},
  { name: "Martin Joseph", email:"marjoseph@gmail.com", status:"away",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg"},
  { name: "Tomas Kennedy", email:"omaskennedy@gmail.com", status:"inactive",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg"},
  { name: "Enrique Sutton", email:"enriquesutton@gmail.com", status:"inactive",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg"},
  { name: "Darnell Strickland", email:"darnellstrickland@gmail.com", status:"inactive",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg"},
  { name: "Miro Badev", email:"mirobadev@gmail.com", status:"available",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg"},
  { name: "Martin Joseph", email:"marjoseph@gmail.com", status:"away",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg"},
  { name: "Tomas Kennedy", email:"omaskennedy@gmail.com", status:"inactive",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg"},
  { name: "Enrique Sutton", email:"enriquesutton@gmail.com", status:"inactive",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg"},
  { name: "Darnell Strickland", email:"darnellstrickland@gmail.com", status:"inactive",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg"},  
  { name: "Miro Badev", email:"mirobadev@gmail.com", status:"available",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg"},
  { name: "Martin Joseph", email:"marjoseph@gmail.com", status:"away",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg"},
  { name: "Tomas Kennedy", email:"omaskennedy@gmail.com", status:"inactive",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg"},
  { name: "Enrique Sutton", email:"enriquesutton@gmail.com", status:"inactive",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg"},
  { name: "Darnell Strickland", email:"darnellstrickland@gmail.com", status:"inactive",
    imgUrl:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg"},  
]

function buildFriendList(){
  // friends = await callAPI()
  var friendsListInHtml = "";
  
  for (var i=0; i < friends.length; i++){
    friendsListInHtml += '<li>'
                       + '<div class="friend">'
                       + '<img src="' + friends[i].imgUrl+'" />'
                       + '<p><strong>' + friends[i].name + ' </strong>'
//                       + '<span>' + friends[i].email + '</span></p>'
                       + '<span class="status ' + friends[i].status + '"></span></div></li>';
  }
  
  
  //console.log(friendsListInHtml);
  $("#friends").append(friendsListInHtml);
}


buildFriendList();

//var preloadbg = document.createElement("img");
//preloadbg.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/timeline1.png";
//
//$("#searchfield").focus(function(){
//    if($(this).val() == "Search contacts..."){
//        $(this).val("");
//    }
//});
//$("#searchfield").focusout(function(){
//    if($(this).val() == ""){
//        $(this).val("Search contacts...");
//
//    }
//});
//
//$("#sendmessage input").focus(function(){
//    if($(this).val() == "Send message..."){
//        $(this).val("");
//    }
//});
//$("#sendmessage input").focusout(function(){
//    if($(this).val() == ""){
//        $(this).val("Send message...");
//
//    }
//});


//$(".friend").each(function(){		
////  $(this).click(function(){
//    //var childOffset = $(this).offset();
//    //var parentOffset = $(this).parent().parent().offset();
//    //var childTop = childOffset.top - parentOffset.top;
//    //console.log("childTop:", childTop, $(this).index());
//
//
//
//    
//    $(this).click(function(){
//      $("#header-title").text("Chat");
//      $('#friendslist').fadeOut();
//      $('#chatview').fadeIn();      
//      
//    });    
//
//});	
