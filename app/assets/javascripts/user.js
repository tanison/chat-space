$(function() {

  var search_list = $(".chat-group-users.clearfix.js-chat-member");

  function appendUser(user) {
    var html =  `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add", id="user-add" data-user-id=${user.id} data-user-name="${user.name}">追加</div>
                </div>`
  search_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${ msg }</p>
                </div>`
    search_list.append(html);
  }

  // var search_list = $(".chat-group-users.clearfix.js-chat-member");

  function buildHTML(user_name, user_id){
    var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-${user_id}'>
                <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                <p class='chat-group-user__name'>${user_name}</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn', id="user-adder">削除</div>
              </div>`
          console.log(9)
    return html;
  }

  $(".user__input").on("input", function() {
    var input = $(".user__input").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json'
    })

    .done(function(users) {
      $(".chat-group-users.clearfix.js-chat-member").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーはみつかりません");
      }
    })

    .fail(function(){
      console.log(3)
      // alert('error');
    })
    return false;

   });
    // ドキュメント上すべてのinput要素に対して
    // inputイベントを設定する
    // onの第1引数にイベント名を
    // 第2引数に設定対象のid等を記述する
    $(document).on("click", "#user-add", function() {
      var user_id = $(this).data("user-id");
      var user_name = $(this).data("user-name");
      var html = buildHTML(user_name, user_id);
      $('.chat-group-users.clearfix.js-add-user').append(html);
      // $('.chat-group-users').remove();
      $(this).parent().remove()
      console.log(7)
    });

    $(document).on("click", "#user-adder", function() {
      $(this).parent().remove()
      console.log(9)
    });

    // ここで追加したコントロールにもイベントが設定される
    // $('#container').after('<input type="text" id="fuga-text">');

  });

