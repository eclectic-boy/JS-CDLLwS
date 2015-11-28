describe("enumerate", function() {
  it("properly enumerates", function() {
    let l = [];
    for(let i=0; i<100; i++) {
      l.push(Math.random());
    }
    let j = 0;
    for(let [i, x] of enumerate(l)) {
      expect(i).toEqual(j);
      expect(x).toEqual(l[i]);
      j++;
    }
  });
});

describe("CDLLwS.Node class", function() {
  it("can be instantiated", function() {
    expect(() => {
      new CDLLwS.Node();
    }).not.toThrow();
  });
});

describe("CDLLwS.Node instance", function() {
  it("can be printed", function() {
  	let n = new CDLLwS.Node("qwerty");
  	expect(String(n)).toEqual("qwerty");

  	n.data = "";
  	expect(String(n)).toEqual("");

  	n.data = 123;
  	expect(String(n)).toEqual("123");

  	n.data = null;
  	expect(String(n)).toEqual(String(null));
  });
});

describe("CDLLwS class", function() {
  it("can be instantiated", function() {
    expect(() => {
      new CDLLwS();
    }).not.toThrow();
  });

  it("has a sentinel node", function() {
    let x = new CDLLwS();
    expect(x.sentinel instanceof CDLLwS.Node).toBe(true);
  });
});

describe("CDLLwS instance", function() {
  it("is an iterable", function() {
    let x = new CDLLwS();

    expect(x[Symbol.iterator]).not.toBe(undefined);
    expect(() => {
      let x = new CDLLwS();
      for(let i of x) {}
    }).not.toThrow();
  });

  it("appends values and stores length", function() {
    let x = new CDLLwS();
    expect(x.length).toEqual(0);

    let tot = 100;
    for(let i=0; i<tot; i++) {
      let value = Math.random();
      x.append(value);
      expect(x.get(-1)).toEqual(value);
      expect(x.length).toEqual(i + 1);
    }

    expect(x.length).toEqual(tot);
  });

  it("inserts values and stores length", function() {
    let x = new CDLLwS();
    expect(x.length).toEqual(0);

    let tot = 100;
    
    for(let i=0; i<tot; i++) {
      let index = Math.floor(Math.random() * x.length);
      let value = Math.random();
      x.insert(index, value);
      expect(value).toEqual(x.get(index));
      expect(x.length).toEqual(i + 1);
    }

    //to insert in position -1 means to insert before the last item i.e. in position [-2]==[x.length-2]
    let value = Math.random();
    x.insert(-1, value);
    expect(value).toEqual(x.get(x.length - 2));
    
    expect(x.length).toEqual(tot + 1);
  });

  it("is an iterable and can return Node instances", function() {
    let x = new CDLLwS();
    let tot = 100;
    for(let i=0; i<tot; i++) {
      x.append(Math.random());
    }
    for(let y of x[Symbol.iterator](true)) {
      expect(y instanceof CDLLwS.Node).toBe(true);
    }
  });

  it("is an iterable and can return the values within the Node instances", function() {
    let x = new CDLLwS();
    let tot = 100;
    for(let i=0; i<tot; i++) {
      x.append(Math.random());
    }

    for(let y of x[Symbol.iterator](false)) {
      expect(y instanceof CDLLwS.Node).not.toBe(true);
    }
    
    for(let y of x) {
      expect(y instanceof CDLLwS.Node).not.toBe(true);
    }
  });

  it("gets values", function() {
    let x = new CDLLwS();
    var l = [1, "a", null, undefined, "z", 0.5454, {}, function() {}];
    for(let v of l) {
      x.append(v);
    }
    for(let [i, v] of enumerate(l)) {
     expect(x.get(i) instanceof CDLLwS.Node).not.toBe(true);
     expect(x.get(i)).toEqual(v);
    }
    expect(() => { x.get(-2) }).toThrow();
    expect(() => { x.get(x.length) }).toThrow();
    expect(() => { x.get(x.length + 1) }).toThrow();
  });

  it("gets values as Node instances", function() {
    let x = new CDLLwS();
    var l = [1, "a", null, undefined, "z", 0.5454, {}];
    for(let v of l) {
      x.append(v);
    }
    for(let [i, v] of enumerate(l)) {
     expect(x.get(i, true) instanceof CDLLwS.Node).toBe(true);
     expect(x.get(i, true).data).toEqual(v);
    }
    expect(() => { x.get(-2) }).toThrow();
    expect(() => { x.get(x.length) }).toThrow();
    expect(() => { x.get(x.length + 1) }).toThrow();
  });

  it("correctly outputs a string as a normal list", function() {
    let x = new CDLLwS();
    let l = [];
    for(let i=0; i<100; i++) {
      let value = Math.random(); 
      x.append(value);
      l.push(value);
    }
    expect(x.toString()).toEqual(l.toString());
  });

  it("has its valueOf method which outputs a normal list", function() {
    let x = new CDLLwS();
    let l = [];
    for(let i=0; i<100; i++) {
      let value = Math.random(); 
      x.append(value);
      l.push(value);
    }
    expect(x.valueOf()).toEqual(l);
  });

  it("pop values", function() {
    let x = new CDLLwS();
    let l = [];
    var tot = 100;

    for(let i=0; i<tot; i++) {
      let value = Math.random(); 
      x.append(value);
      l.push(value);
    }
    
    expect(x.valueOf()).toEqual(l);

    let len = x.length;
    for(let i=0; i<len; i++) {
      expect(x.pop()).toEqual(l.pop());
      expect(x.valueOf()).toEqual(l);
    }
  });

  it("pop values by index", function() {
    let x = new CDLLwS();
    let l = [];
    var tot = 100;

    for(let i=0; i<tot; i++) {
      let value = Math.random(); 
      x.append(value);
      l.push(value);
    }
    
    expect(x.valueOf()).toEqual(l);

    let popped = x.pop(-1);
    let spliced = l.splice(tot-1, 1)[0];
    expect(popped).toEqual(spliced);
    expect(x.valueOf()).toEqual(l);

    for(let i=0; i<tot-1; i++) {
      let index = Math.floor(Math.random() * x.length);
      let popped = x.pop(index);
      let spliced = l.splice(index, 1)[0];
      expect(popped).toEqual(spliced);
      expect(x.valueOf()).toEqual(l);
    }
  });
});