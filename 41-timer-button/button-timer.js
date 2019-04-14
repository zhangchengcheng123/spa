
var $timerBtn=(function(){
  var cfg={
      container:'.mian',
      title:'确定',
      time:9,
      enabled:false,
      clickHandler:null
                            
  };
    var n=cfg.time;
    var init=function(conf){
      $.extend(cfg,conf);
      var $container=$(cfg.container);
      var DOM='<input class="timer-button" type="button" value="' + cfg.title +' ('+n+'s)" disabled>';
      $container.html(DOM);
      var $btnAgree=$container.find('.timer-button'); 
      var timer=window.setInterval(function(){
        n--;
        if(n===0){
          window.clearInterval(timer);
          $btnAgree.removeAttr('disabled'); 
          $btnAgree.val(cfg.title);
        }else{
          $btnAgree.val(cfg.title+'('+n+'s)');
        }
      },1000);
      $btnAgree.click(function(){
        cfg.clickHandler();
      });
      return $btnAgree;
                                
    };
      
    var remove=function(){
      var $btn=$('.main').find('.timer-button');
      $btn.remove();
    };
    return {init:init,remove:remove};
}());
  function TimerBtn(){
    var cfg={
      container:'.mian',
      title:'确定',
      time:9,
      enabled:false,
      clickHandler:null
  };
    var n=cfg.time;
    this.init=function(conf){
      $.extend(cfg,conf);
      var $container=$(cfg.container);
      var DOM='<input class="timer-button" type="button" value="' + cfg.title +' ('+n+'s)" disabled>';
      $container.html(DOM);
      var $btnAgree=$container.find('.timer-button'); 
      var timer=window.setInterval(function(){
        n--;
        if(n===0){
          window.clearInterval(timer);
          $btnAgree.removeAttr('disabled'); 
          $btnAgree.val(cfg.title);                                             
        }else{
          $btnAgree.val(cfg.title+'('+n+'s)');
        }
      },1000);

      $btnAgree.click(function(){
        cfg.clickHandler();
                                      
      });
      return $btnAgree;
                                
    };
      

}

