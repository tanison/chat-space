$(function(){
  function buildHTML(message){
      var image = message.image_url ? `<img src=${message.image_url}>` : "";
      var html =
       `<div class="message" data-message-id=${message.id}>
          <div class="upper-info">
            <div class="upper-info__user">
              ${message.user_name}
            </div>
            <div class="upper-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          ${image}
        </div>`
      return html;
    }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    return false;
  });
  var reloadMessages = function() {
    var last_message = $('.message:last');
    last_message_id = last_message.data('message-id');
    path = location.pathname;
    group_id = path.replace(/[^0-9]/g,'');
    $.ajax({
      url:  `/groups/${group_id}/api/messages`,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
    })
    .fail(function() {
      alert('error');
    });
  }
  setInterval(reloadMessages, 2500);
});
