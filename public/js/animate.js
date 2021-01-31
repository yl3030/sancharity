//蝘餃�𠤖unction
function pageMoving(ID, offset, delay) {
	var _body = window.opera
		? document.compatMode === "CSS1Compat"
			? $("html")
			: $("body")
		: $("html,body");
	_body
		.stop(false, true)
		.delay(delay)
		.animate(
			{
				scrollTop: $(ID).offset().top - offset,
			},
			500
		);
}

//��𧢲�罸�詨鱓��蓥��
function mobileBTN(BTN, MainBtn) {
	var $Block = $(".block");

	$(BTN).click(function (e) {
		$(this).toggleClass("active");
		$("body").toggleClass("freeze");
		$Block.toggleClass("active");
		$(MainBtn).toggleClass("active");
		e.preventDefault();
	});

	$Block.click(function (e) {
		$(this).removeClass("active");
		$("body").removeClass("freeze");
		$(BTN).removeClass("active");
		$(MainBtn).removeClass("active");
		e.preventDefault();
	});
}

//蝵桅�Function
function btnTop() {
	$(".btnTop a").click(function (e) {
		pageMoving("body", 0, 0);
		e.preventDefault();
	});
}

function pricelink() {
	$(".donationMethod li a").click(function (e) {
		$(this).parent().toggleClass("active").siblings().removeClass("active");
		e.preventDefault();
	});
}

function paymentlink() {
	$(".donationPayment li a").click(function (e) {
		$(this).parent().toggleClass("active").siblings().removeClass("active");
		e.preventDefault();
	});
}

function mainNavActive() {
	var URLname = url(-1);
	var $navName = $("html").attr("navName");

	if (URLname == "" || URLname == "undefined") {
		$(".mainNav>ul>li:eq(0)").addClass("active");
	}

	//console.log(URLname);
	//var URLname=url(1);

	$(".mainNav>ul>li>a")
		.filter(function () {
			var $th = $(this).attr("href");
			$th = $th.substring($th.lastIndexOf("/") + 1);
			//console.log($th);
			return $th === URLname;
		})
		.parent()
		.addClass("active");

	$(".mainNav>ul>li")
		.filter(function () {
			var $anchor = $(this).attr("anchor");
			//console.log($anchor);
			return $anchor === $navName;
		})
		.addClass("active");
}

function subNavActive(ID, E) {
	$(ID).find("li").eq(E).addClass("active");
}

function repeatList(ID, Num) {
	//var ID=$('.caseList');
	var $ct = $(ID).html();
	var $dathPath = $(ID).find("img").attr("dataPath");
	$(ID).empty();

	for (i = 0; i < Num; i++) {
		$(ID).append($ct);
	}

	$(ID)
		.find("li")
		.each(function (i) {
			$(this)
				.find("img")
				.attr("src", $dathPath + (i + 1) + ".jpg");
		});
}

function imgFancyBox(TA) {
	$(TA).each(function (i) {
		//$(this).after($(this).clone());
		//console.log($clone);
		var $href = $(this).attr("src");
		var html =
			'<a href="' +
			$href +
			' " data-fancybox="images">' +
			'<img src="' +
			$href +
			'">' +
			"</a>";
		$(this).after(html).remove();
	});
}

//��嘥�见��
$(function () {
	mobileBTN(".btn-mobile", ".mainNav");
	pricelink();
	paymentlink();
	mainNavActive();
	btnTop();
});

// birthday
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
console.log(year + "/" + month + "/" + date + " " + hour + ":" + minute);
var Btoday = year + "/" + month + "/" + date;
$("#birth").val(Btoday);

var Qswiper = new Swiper("#qrcode", {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});
