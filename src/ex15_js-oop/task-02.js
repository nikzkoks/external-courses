/* eslint-disable no-return-assign */
class ElectricalAppliance {
	constructor(name, intake = 0) {
		this.name = name;
		this.enabled = false;
		this.intakePower = intake;
	}
	enable() {
		this.enabled = true;
		this.intakePower = this.intakePower;
	}
	disable() {
		this.enabled = false;
		this.intakePower = 0;
	}
	getPower() {
		return this.intakePower;
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
		for (let item of this.room) {
			if (item.name === nameElectricalAppliance) {
				return true;
			}
		}
		return false;
	},
	searchGlobal(nameElectricalAppliance) {
		return nameElectricalAppliance instanceof ElectricalAppliance;
	},
	getIntakePower() {
		result = 0;
		for (let item of this.room) {
			result += item.getPower();
		}
		return result + ' wwat';
	},
};

pc.enable();
tv.enable();
lamp.enable();
console.log(house.getIntakePower());
