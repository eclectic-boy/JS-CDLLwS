function * enumerate(iterable) {
	let i = 0;
	for(let x of iterable) {
		yield [i, x];
		i++;
	}
}

class CDLLwS {
	constructor() {
		this.sentinel = new CDLLwS.Node(null);
		this.sentinel.next = this.sentinel.prev = this.sentinel;

		this.length = 0;
	}

	*[Symbol.iterator](getNode) {
		let x = this.sentinel.next;
		while(x != this.sentinel) {
			yield getNode ? x : x.data;
			x = x.next;
		}
	}

	get(i, getNode) {
		let out;

		if(i < -1 || this.length <= i) {
			throw new Error("index not valid");
		}
		else if(i == 0) {
			out = this.sentinel.next;
		}
		else if(i == -1) {
			if(this.length > 0) {
				out = this.sentinel.prev;
			} else {
				throw new Error("index not valid");
			}
		}
		else {
			for(let [j, x] of enumerate(this[Symbol.iterator](true))) {
				if(j == i) {
					out = x;
					break;
				}
			}
		}

		return getNode ? out : out.data;
	}

	_insert_data(data, nextNode) {
 		let node = new CDLLwS.Node(data);
		node.prev = nextNode.prev;
		node.next = nextNode;
		node.prev.next = node;
		node.next.prev = node;

		this.length++;
	}

	insert(i, data) {
		this._insert_data(
			data,
			this.length > 0 ? this.get(i, true) : this.sentinel
		);
	}

	append(data) {
		this._insert_data(
			data,
			this.sentinel
		);
	}
}


CDLLwS.Node = class {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}

	toString() {
		return String(this.data);
	}
}