let myMap;

const init = () => {
	myMap = new ymaps.Map("map", {
		center: [59.948338, 30.334604],
		zoom: 12,
		controls: []
	});

	const coords = [
		[59.865362, 30.320416],
		[59.942431, 30.278719],
		[59.916789, 30.545884],
		[59.972710, 30.402785],
		[59.92741, 30.36064],
		[60.015313, 30.320806]
	];

	const myCollection = new ymaps.GeoObjectCollection({}, {
		draggable: false,
		iconLayout: 'default#image',
		iconImageHref: "./img/icons/marker.svg",
		iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
	});

	coords.forEach(coord => {
		myCollection.add(new ymaps.Placemark(coord));
	});

	myMap.geoObjects.add(myCollection);
	myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);