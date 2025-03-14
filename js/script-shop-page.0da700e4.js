function e() {
	$(".choices-group").each(function () {
		let e = $(this).find(".choices-item");
		e.click(function () {
			let e = $(this).parent().find(".choices-group-title").text(),
				i = $(`[data-category="${e}"]`),
				n = $(this).find("span").text(),
				c = i.find(`span:contains("${n}")`).prev();
			c.removeClass("is-checked"), c.prop("checked", !1), t(e, n);
		});
	});
}
function t(t, n) {
	$(".choices-group").each(function () {
		let e = $(this).children(".choices-item").length;
		$(this).find(".choices-group-title").text() === t &&
			$(this)
				.find(".choices-item")
				.each(function () {
					$(this).find("span").text() === n &&
						$(this).fadeOut("normal", function () {
							0 == --e &&
								$(this)
									.parent()
									.fadeOut("normal", function () {
										$(this).remove(),
											0 === i() &&
											$(".choices-container").addClass("is-hidden");
									}),
								$(this).remove();
						});
				});
	}),
		e();
}
function i() {
	return $(".choices").children().length;
}
function n() {
	window.matchMedia("screen and (max-width: 64em)").matches
		? $(".filter__content").prepend($(".choices-container"))
		: $("#filters").prepend($(".choices-container"));
}
$(document).ready(function () {
	let c;
	n(),
		$(".buttons-settings").each(function () {
			let e = $(this).find(".buttons-settings__button");
			e.click(function () {
				e.filter(".active").not($(this)).removeClass("active"),
					$(this).addClass("active");
			});
		}),
		e(),
		(c = {}),
		$(".categories-checkbox").each(function () {
			let n = $(this).find("input");
			n.click(function () {
				n.is(":checked")
					? ((c.parentName = n.closest("[data-category]").data("category")),
						(c.itemName = $(this).next().text()),
						$(".choices-container").hasClass("is-hidden") &&
						$(".choices-container").removeClass("is-hidden"),
						(function (t, i) {
							let n = $(".choices").children(".choices-group").length;
							if (
								($(".choices-group").each(function () {
									$(this).find(".choices-group-title").text() === t
										? (console.log("found"),
											$(this).append(`
	  	<div class="choices-item btn">
		  <span>${i}</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <path d="M12.6668 3.8335L3.3335 13.1668M3.33351 3.8335L12.6668 13.1668" stroke="#8D8D8E" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
  	    </div>`))
										: n--;
								}),
									0 == n)
							) {
								let e = `
    	<div class="choices-group">
    	  <p class="choices-group-title">${t}</p>
    	  <div class="choices-item btn">
  		    <span>${i}</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <path d="M12.6668 3.8335L3.3335 13.1668M3.33351 3.8335L12.6668 13.1668" stroke="#8D8D8E" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
    	  </div>
  	    </div>`;
								$(".choices").append(e);
							}
							e();
						})(c.parentName, c.itemName))
					: (0 === i() && $(".choices-container").addClass("is-hidden"),
						(c.itemName = $(this).next().text()),
						(c.parentName = $(this)
							.closest("[data-category]")
							.data("category")),
						t(c.parentName, c.itemName));
			});
		}),
		$(".link-category-list").each(function () {
			let e = $(this).find(".link-category");
			e.click(function () {
				e
					.filter(".active")
					.not($(this))
					.removeClass("active")
					.next()
					.animate({ opacity: "toggle", height: "toggle" }, 200),
					$(this).toggleClass("active"),
					$(this).next().animate({ opacity: "toggle", height: "toggle" }, 200);
			});
		}),
		document.querySelectorAll(".range").forEach((e) => {
			let t = e.querySelector(".range__selected"),
				i = e.querySelectorAll(".range__input input"),
				n = e.querySelectorAll(".range__price input");
			console.log(t, i, n),
				i.forEach((e) => {
					e.addEventListener("input", (e) => {
						var c = parseInt(i[0].value),
							a = parseInt(i[1].value);
						a - c < 100
							? "min" === e.target.className
								? (i[0].value = a - 100)
								: (i[1].value = c + 100)
							: ((n[0].value = c),
								(n[1].value = a),
								(t.style.left = (c / i[0].max) * 100 + "%"),
								(t.style.right = 100 - (a / i[1].max) * 100 + "%"));
					});
				}),
				n.forEach((e) => {
					var c = n[0].value,
						a = n[1].value;
					(i[0].value = c),
						(t.style.left = (c / i[0].max) * 100 + "%"),
						(i[1].value = a),
						(t.style.right = 100 - (a / i[1].max) * 100 + "%"),
						e.addEventListener("input", (e) => {
							var c = parseInt(n[0].value),
								a = parseInt(n[1].value);
							a - c >= 100 &&
								a <= i[1].max &&
								("min" === e.target.className
									? ((i[0].value = c),
										(t.style.left = (c / i[0].max) * 100 + "%"))
									: ((i[1].value = a),
										(t.style.right = 100 - (a / i[1].max) * 100 + "%")));
						});
				});
		}),
		$(".dropdown-products__trigger").each(function () {
			let e = $(this);
			e.click(function () {
				let t = e.next();
				t.hasClass("is-open")
					? t.removeClass("is-open").fadeOut()
					: t.addClass("is-open").fadeIn();
			});
		}),
		$(window).resize(
			$.debounce(250, function () {
				n();
			})
		);
});
//# sourceMappingURL=script-shop-page.0da700e4.js.map


document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".categories-checkbox input");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            let label = this.closest(".colors_l"); 
            if (this.checked) {
                label.classList.add("selected"); 
            } else {
                label.classList.remove("selected"); 
            }
        });
    });
});
