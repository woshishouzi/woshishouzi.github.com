$(".ui-box1-in").hide();
      $(document).ready(function(){
        $(".ui-box1-in").hide();
        $(".ui-box2-top-lab").eq(0).css("background", "rgba(192,192,192,1)");
        $(".ui-box2-body-content").eq(0).show();
        $("body").on("click", ".ui-box2-top-lab", function() {
             $(".ui-box2-top-lab").css("background", "none");
             $(this).css("background", "rgba(192,192,192,1)");
             $(".ui-box2-body-content").hide();
            $(".ui-box2-body-content").eq($(this).index()).show();
         });

        $("body").on("click", ".ui-box3-button", function(){
        $(".ui-box3-list-content").eq(0).clone(true).appendTo(".ui-box3-list");
        $(".ui-box3-list-content:last").children(":first").html($(".ui-box3-list-content:last").index());
        $(".ui-box3-list-content:last").show();
    });
    $("body").on("click", ".ui-box3-list-content-Dele", function() {
        $(this).parent().hide(function() {
            $(this).remove();
            $(".ui-box3-list-content").each(function(index) {
                $(this).children(":first").html(index);
            });
        });
    });
     
            $("img").click(function(){
                $(".ui-box1-in")[0].src=$(this).attr("src");
               $(".ui-box1-in").show();
             // $(".ui-box1-out").fadeTo("slow",0.15);

      });
           $(".ui-box1-in").click(function(){
             $(".ui-box1-in").hide();
             // $(".ui-box1-out").fadeTo("fast",1);
      });
      });

      $(function(){
  $("#tsMb div:not(:first)").hide();
  $("#titOp li").each(function(index){
    $(this).mouseover(
     function(){
     $("#titOp li.current").removeClass("current");
     $(this).addClass("current");
     $("#tsMb > div:visible").hide();
     $("#tsMb div:eq(" + index + ")").show();
    });
  });
});
