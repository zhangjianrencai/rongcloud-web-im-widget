angular.module('rongWebimWidget').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./src/ts/conversation/template.tpl.html',
    "<div class=\"kefuChatBox both kefuChatBox am-fade-and-slide-top\" ng-class=\"{'fullScreen':fullScreen}\" ng-show=resoures.display><div class=\"kefuChat kefuChat\"><div id=header class=\"header blueBg online\"><div class=\"infoBar pull-left\"><div class=infoBarTit><span class=\"Presence Presence--stacked\"></span> <span class=kefuName>客服4{{\"a\"+fullScreen}}</span></div></div><div class=\"toolBar headBtn pull-right\"><a href=javascript:; class=\"kefuChatBoxMin sprite\" ng-click=\"fullScreen=false;\" title=最小化></a> <a href=javascript:; class=\"kefuChatBoxMax sprite\" ng-click=\"fullScreen=true;\" title=最大化></a> <a href=javascript:; class=\"kefuChatBoxClose sprite\" title=结束对话></a></div></div><div class=\"outlineBox hide\"><div class=sprite></div><span>网络连接断开</span></div><div id=Messages style=\"height: 320px\"><div class=emptyBox>暂时没有新消息</div><div class=MessagesInner><div class=Message-wrapper><div class=Messages-date><b>2015 年 8 月 6日</b></div><div class=Message><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" src=./src/images/webBg.png alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">融云</a></div></div></div><div class=Message-body><div><div class=Message-text><pre class=Message-entry>开心麻花本周日的话剧票还有嘛？<br></pre></div></div></div></div><div class=Message><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" src=./src/images//webBg.png alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">融云</a></div></div></div><div class=Message-body><div><div class=Message-text><pre class=Message-entry>开心麻花本周日的话剧票还有嘛？<br></pre></div></div></div></div></div><div class=Message-wrapper><div class=Messages-date><b>2015 年 8 月 21日</b></div><div class=Message><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" src=./src/images/webBg.png alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">融云</a></div></div></div><div class=Message-body><div><div class=Message-text><pre class=Message-entry>维护中 由于我们的服务商出现故障，融云官网及相关服务也受到影响，给各位用户带来的不便，还请谅解。  您可以通过 <a href=#>【官方微博】</a>了解</pre></div></div></div></div><div class=Message><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" src=./src/images/webBg.png alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">融云</a></div></div></div><div class=Message-body><div><div class=Message-img><span class=Message-entry><p>发给您一张示意图</p><img src=./src/images/webBg.png alt=\"\"></span></div></div></div></div><div class=Message><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" src=./src/images/webBg.png alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">融云</a></div></div></div><div class=Message-body><div><div class=Message-audio><span class=Message-entry><span class=\"audioBox clearfix animate\"><i></i><i></i><i></i></span><div style=\"display: inline-block\"><span class=audioTimer>30”</span><span class=audioState></span></div></span></div></div></div></div><div class=Message><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" src=./src/images/webBg.png alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">融云</a></div></div></div><div class=Message-body><div><div class=Message-map><span class=Message-entry><div class=mapBox><img src=./src/images/webBg.png alt=\"\"> <span>朝阳区北苑路北</span></div></span></div></div></div></div><div class=Message><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" src=./src/./src/images/webBg.png alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">融云</a></div></div></div><div class=Message-body><div><div class=Message-image-text><span class=Message-entry><div class=image-textBox><h4>理性设计</h4><div class=\"cont clearfix\"><img src=./src/images/webBg.png alt=\"\"><div>苹果公司设计师年薪高达 17.4 万美元，约合人民币 110 万，而苹果官网也被业界捧为大师之作，受到世界各国产品经理和设计师的追捧。为什么苹果公司设计的网页如此受欢迎，有什么技巧在其中吗？</div></div></div></span></div></div></div></div><div class=sys-tips><span>会话已结束</span></div></div></div></div><div id=footer class=footer style=\"display: block\"><div class=footer-con><div class=text-layout><div id=funcPanel class=\"funcPanel robotMode\"><div class=mode1><div class=MessageForm-tool id=expressionWrap><i class=\"sprite iconfont-smile\"></i><div class=expressionWrap style=\"display: none\"><i class=arrow></i></div></div><div class=MessageForm-tool><i class=\"sprite iconfont-upload\" id=upload-file style=\"position: relative; z-index: 1\"></i><div class=\"moxie-shim moxie-shim-html5\" style=\"position: absolute; top: 5px; left: 0px; width: 20px; height: 15px; overflow: hidden; z-index: 0\"><input type=file style=\"font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%\" multiple accept=\"\"></div></div></div><div class=mode2><a href=javascript:; id=chatSwitch class=chatSwitch>转人工服务</a></div></div><textarea cols=50 rows=5 id=inputMsg class=\"text grey\">请输入...</textarea></div><div class=powBox><button type=button class=\"btn send-btn\" id=sendBtn>发送</button></div></div></div></div></div>"
  );

}]);
