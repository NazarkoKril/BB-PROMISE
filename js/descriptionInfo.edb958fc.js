$(document).ready(() => {
  !(function () {
    let i = $(".description-info");
    i.each(function () {
      let i = $(this).find(".description-info__tabs").find("button"),
        t = $(this)
          .find(".description-info__info")
          .find(".description-info__block");
      i.click(function () {
        i.removeClass("active"), $(this).toggleClass("active");
        let e = $(this).data("target");
        t.removeClass("active"), $(`#${e}`).toggleClass("active");
      });
    });
  })();
});
//# sourceMappingURL=descriptionInfo.edb958fc.js.map
