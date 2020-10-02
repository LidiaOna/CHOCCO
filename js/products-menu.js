
const mesureWidth = (items) => {
	let reqItemsWidth = 0;
	const screenWidth = $(window).width();
	const container = items.closest(".products-menu");
	const titlesBlocks = container.find(".products-menu__title");
	const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

	const textContainer = items.find(".products-menu__container");
	const paddingLeft = parseInt(textContainer.css("padding-left"));
	const paddingRight = parseInt(textContainer.css("padding-right"));

	const isMobile = window.matchMedia("(max-width: 768px)").matches;

	if (isMobile) {
		reqItemsWidth = screenWidth - titlesWidth;
	} else {
		reqItemsWidth = 500;
	}

	return {
		container: reqItemsWidth,
		textContainer: reqItemsWidth - paddingRight - paddingLeft
	}
};

const closeEveryItemInContainer = (container) => {
	const items = container.find(".products-menu__item");
	const content = container.find(".products-menu__content");

	items.removeClass("active");
	content.width(0);
};

const openItems = items => {
	const hiddenContent = items.find(".products-menu__content");
	const reqWidth = mesureWidth(items);
	const textBlock = items.find(".products-menu__container");

	items.addClass("active");
	hiddenContent.width(reqWidth.container);
	textBlock.width(reqWidth.textContainer);
};

$(".products-menu__title").on("click", (e) => {
	e.preventDefault();

	const $this = $(e.currentTarget);
	const items = $this.closest(".products-menu__item");
	const itemsOpened = items.hasClass("active");
	const container = $this.closest(".products-menu");

	if (itemsOpened) {
		closeEveryItemInContainer(container);
	} else {
		closeEveryItemInContainer(container);
		openItems(items);
	}
});

$(".products-menu__close").on("click", (e) => {
	e.preventDefault();

	closeEveryItemInContainer($(".products-menu"));
});