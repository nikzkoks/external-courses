/* eslint-disable no-return-assign */
function Sweet(name, weight) {
	this.name = name;
	this.getWeight = function () {
		return (this.weight = weight);
	};
	this.isSweet = function () {
		return this instanceof Sweet;
	};
}

class ChocolateSweet extends Sweet {
	constructor(color) {
		super('ChocolateSweet', 95);
		this.color = color;
	}
}

let twix = new ChocolateSweet('Twix');
let mars = new ChocolateSweet('Mars');
let bounty = new Sweet('Bounty', 80);

let gifts = {
	gift: [twix, mars, bounty],
	search(sweet) {
		return this.gift.some((item) => item.name === sweet);
	},

	getWeight() {
		return (
			this.gift.reduce(
				(accumulator, currentValue) => accumulator + currentValue.getWeight(),
				0
			) + ' gramm'
		);
	},
};

console.log(gifts.getWeight());
