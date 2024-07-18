class Character {
	constructor(name) {
    this.name = name;
	}
  }
  
  class Team {
	constructor() {
    this.members = new Set();
	}
  
	add(character) {
    if (this.members.has(character)) {
		throw new Error('Character is already in the team');
    }
    this.members.add(character);
	}
  
	addAll(...characters) {
    characters.forEach(character => {
		this.members.add(character);
    });
	}
  
	toArray() {
    return Array.from(this.members);
	}
  }
  
  export { Character, Team };
  