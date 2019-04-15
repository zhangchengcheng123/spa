var $dlgGoto=(function(){ //加$表示页面上的UI元素
  var init=function(){
    var DOM=''
          + '<div class="notepad-goto-dlg">'
          + '<div class="dialogbox">'
          + '<div class="titlebar">'
          + '<p class="title">转到指定行</p>'
          + '<span class="btn-close">×</span>'
          + '</div>'
          + '<div class="main">'
          + '<label>行号(L):</label><br>'
          + '<input type="text" class="line-num"><br>'
          + '<input type="button" value="转到" class="btn-goto">'
          + '<input type="button" value="取消" class="btn-cancel">'
          + '</div>'
          + '</div>'
          + '</div>';
    var $dlg=$(DOM);
        var $btnClose=$dlg.find('.btn-close'),
            $btnCancel=$dlg.find('.btn-cancel');
    $('body').append($dlg);
    lg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
    $btnClose.click(function(){
            $dlg.remove();
                
    });
    $btnCancel.click(function(){
            $dlg.remove();
                
    });
      };
    return {init:init};
}());
