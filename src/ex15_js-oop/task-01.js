/* eslint-disable no-return-assign */
function Sweet(name, weight) {
	this.name = name;
	this.weight = weight;
	Sweet.prototype.getWeight = function () {
		return this.weight;
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
		for (let item of this.gift) {
			if (item.name === sweet) {
				return true;
			}
		}
		return false;
	},
	searchGlobal(sweet) {
		return sweet instanceof Sweet;
	},
	getWeight() {
		result = 0;
		for (let item of this.gift) {
			result += item.getWeight();
		}
		return result + ' gramm';
	},
};

console.log(gifts.getWeight());
