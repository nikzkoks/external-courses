/* eslint-disable no-return-assign */
class ElectricalAppliance {
	constructor(name, intake = 0) {
		this.name = name;
		this.enabled = false;
		this.intakePower = intake;
	}
	enable() {
		this.enabled = true;
	}
	disable() {
		this.enabled = false;
	}
	getPower() {
		if (this.enabled) {
			return this.intakePower;
		}
		return 0;
	}
}

class Computer extends ElectricalAppliance {
	constructor(typePC) {
		super('PC', 400);
		this.typePC = typePC;
	}
}

class TV extends ElectricalAppliance {
	constructor(brand) {
		super('TV', 300);
		this.brand = brand;
	}
}

let lamp = new ElectricalAppliance('Lamp', 70);
let pc = new Computer('Gaming');
let tv = new TV('Sony');

let house = {
	room: [pc, tv, lamp, lamp],
	search(nameElectricalAppliance) {
		return this.room.some((item) => item.name === nameElectricalAppliance);
	},
	searchGlobal(nameElectricalAppliance) {
		return nameElectricalAppliance instanceof ElectricalAppliance;
	},
	getIntakePower() {
		return (
			this.room.reduce(
				(accumulator, currentValue) => accumulator + currentValue.getPower(),
				0
			) + ' wwat'
		);
	},
};

pc.enable();
tv.enable();
lamp.enable();
console.log(house.getIntakePower());
