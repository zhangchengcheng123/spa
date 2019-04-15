
var $dlgAbout = (function() {
    var DOM = ''
        + '<div class="notepad-dlg-about">'
        + '<div class="dialogbox">'
        + '<div class="titlebar">'
        + '<p class="title">关于“记事本”</p>'
        + '<span class="btn-close">✖</span>'
        + '</div>'
        + '<div class="main">'
        + '<h1 class="slogan">JSNotepad</h1>'
        + '<hr>'
        + '<img class="app-logo" src="https://raw.githubusercontent.com/wangding/jsnotepad/master/images/notepad-icon-32.png" alt="JSNotepad">'
        + '<div class="info">'
        + '<p>作者:张成成</p>'
        + '<p>QQ：1306073684</p>'
        + '<p>仓库地址：<a href="https://github.com/zhangchengcheng123/spa" target="_blank">https://github.com/zhangchengcheng123/spa/</a></p>'
        + '</div>'
        + '<input class="btn-ok" type="button" value="确定">'
        + '</div>'
        + '</div>'
        + '</div>';
  var $dlg = $(DOM),
        $btnOk = $dlg.find('.btn-ok'),
        $btnClose = $dlg.find('.btn-close');

  function show() {
        $('body').append($dlg);
            $btnOk.click(function() { $dlg.remove();   });
            $btnClose.click(function() { $dlg.remove();   });
                  
  }

    return {show:show};

})();
