$(document).ready(function(){$(".episode-list-grid").flickity({cellAlign:"left",wrapAround:!1,contain:!0,pageDots:!1,prevNextButtons:!0,groupCells:!0,adaptiveHeight:!0}),$(document).on("click",".fancy-toggle",function(){let t="input[name="+$(this).attr("data-controls")+"]";$(this).parent().find(t).prop("checked",!$(this).parent().find(t).prop("checked")),$(this).parent().find(t).trigger("change")}),$(document).on("change","input[type=checkbox]",function(){let e=".fancy-toggle[data-controls="+$(this).attr("name")+"]";$(this).prop("checked")?($(this).parent().find(e).removeClass("bg-gray-200").addClass("bg-primary-600"),$(this).parent().find(e+" span").removeClass("translate-x-0").addClass("translate-x-5")):($(this).parent().find(e).addClass("bg-gray-200").removeClass("bg-primary-600"),$(this).parent().find(e+" span").addClass("translate-x-0").removeClass("translate-x-5"))}),$("button[role=tab]").click(function(){$(this).closest(".tabs-container").find("[role=tabpanel]").addClass("hidden"),$(this).closest(".tabs-container").find("#"+$(this).attr("aria-controls")).removeClass("hidden"),$(this).closest(".tabs-container").find("[role=tab]").attr("aria-selected","false"),$(this).attr("aria-selected","true")})});