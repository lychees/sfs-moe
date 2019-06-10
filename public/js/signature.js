
/**
 * Created by fuguang on 2017/7/6.
 */
//$(function () {
    // $("#op_container_text").attr("style","max-height: 100rem;");
    // $("#expand").parent().attr("style","display: none");
    // $("#expand").remove();
//}

$(document).ready(() => {
    $(document).dblclick((event) => {
        alert("变色");
        $(".share-module button").css('background','green');
    });
});
