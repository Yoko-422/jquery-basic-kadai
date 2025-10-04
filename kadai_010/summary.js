//テキストのカラーを変更する
$('#change-color').on('click', function() {
    $('#target').css('color','pink');
  });

//テキストの内容を変更する
$('#change-text').on('click', function() {
    $('#target').text('Hello!');
})

//フェードアウトさせる
 $('#fade-out').on('click', function() {
   $('#target').fadeOut();
 });

//フェードインさせる
$('#fade-in').on('click', function() {
    $('#target').fadeIn();
})