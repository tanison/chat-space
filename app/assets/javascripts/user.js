$(function() {
  $(".user__input").on("keyup", function() {
    var input = $(".user__input").val();
    console.log(1)
    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { name: input },
      dataType: 'json'
    })

  //  .done(function(users) {
  //    $(".chat-group-users.clearfix.js-chat-member").empty();
  //    if (users.length !== 0) {
  //      user.forEach(function(users){
  //        appendProduct(user);
  //      });
  //    }
    //  else {
    //    appendErrMsgToHTML("一致する映画はありません");
    //  }
   })
  });
// });
// $(function(){
//   $('#new_message').on('submit', function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       var html = buildHTML(data);
//       $('.messages').append(html);
//       $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
//       $('form')[0].reset();
//     })
//     .fail(function(){
//       alert('error');
//     })
//     return false;
//   });
// });
