$(document).ready(function(){//加载完成
    $("a").click(function(event){//触发click事件
        event.preventDefault();//屏蔽默认事件
        $( this ).hide("slow");//缓慢消失
        $(this).hide("fast");//快速消失
    });
);

