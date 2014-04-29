// Include sources
// -------------------------------

$( "#svg-filters" ).load( "/assets/img/svg/filters.svg", function() {
  console.log( "Filters were loaded." );
});
$( "#svg-fills" ).load( "/assets/img/svg/fills.svg", function() {
  console.log( "Fills were loaded." );
});
$( "#svg-masks" ).load( "/assets/img/svg/masks.svg", function() {
  console.log( "Masks were loaded." );
});
$( "#svg-images" ).load( "/assets/img/svg/svg-lib.svg", function() {
  console.log( "Images were loaded." );
});


var curSlideClass = ".slide.active";

// Resize div
// -------------------------------
$(function() {
    $( ".resizable" ).resizable();
  });

// Show Shapes
// -------------------------------
var showShapeClass = "demo__view";


$(".demo--live").each ( function(){
    var svgCode = $(this).find(".demo__code");
    var shape_code = svgCode.val();
    
    var demoContent = $(this).find(".demo__content");    
    var svgViewCode = "<div class='" + showShapeClass + "'>" + shape_code + "</div>";
    var svgView = $(svgViewCode).insertBefore($(demoContent));

    $(svgCode).change ( function(){
        $(svgView).html( $(this).val() ); 
    });
    
    svgCode.bind('keydown keyup', function(event){
        event.stopPropagation();
        $(svgView).html( $(this).val() ); 
    });

});

// Show Demos
// -------------------------------
var switchCheckedClass = "switch--checked";
$(".demo-switch dd").each( function(){
    $(this).click( function(){
        $("." + switchCheckedClass, $(this).parent()).removeClass(switchCheckedClass);
        $(this).addClass( switchCheckedClass );

        var changeAttr = $(this).parent().attr("data-attr");
        var changeVal = $(this).attr("data-val");

        var svgGroup = $(curSlideClass).find("g");
        svgGroup.attr(changeAttr,changeVal);
        
        var svgElem = $(curSlideClass).find("svg");   
        var svgElem_n = document.querySelector(".active svg");
        var svgViewbox = svgElem_n.getAttribute("viewBox"); //svg.attr("viewBox");
        var svgContent = svgElem.html();
        var demoCode = $(curSlideClass).find(".demo__code");
        demoCode.val("<svg viewbox='" + svgViewbox + "'>" + svgContent + "</svg>");
        // console.log("demoCode");
        // console.log(demoCode);
        // demoCode.val("2233");
        });
    });

// Popup Images
// -------------------------------
var popupClass = "popup";
var popupImgClass = popupClass + "__img";
 $(".img-preview").click ( function(){
    var img = "<img src='" + $(this).attr("href") + "' class='" + popupImgClass + "'>";
    $( "<div class='" + popupClass + "'>" + img + "</div>" ).insertBefore( this );
    var imgWidth = $("." + popupImgClass).width();
    $(".popup img").load(function() {
        $(".popup").height( $(this).height() ); 
        $(".popup").width( $(this).width() ); 
    });

    $(".popup").click ( function(event){
        event.stopPropagation();
        $(this).remove();
    });

    return false;
 });
