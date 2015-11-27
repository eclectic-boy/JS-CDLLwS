xdescribe("enumerate", function() {
  it("properly enumerates", function() {});
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
    expect(() => {
      let x = new CDLLwS();
      for(let i of x) {}
    }).not.toThrow();
  });

  it("is an iterable and can return Node instances", function() {
    let x = new CDLLwS();
    let tot = 100;
    for(let i=0; i<tot; i++) {
      var val = Math.random();
      x.append(val);
    }
    for(let y of x[Symbol.iterator](true)) {
      expect(y instanceof CDLLwS.Node).toBe(true);
    }
  });

  it("is an iterable and can return the values within the Node instances", function() {
    let x = new CDLLwS();
    let tot = 100;
    for(let i=0; i<tot; i++) {
      var val = Math.random();
      x.append(val);
    }

    for(let y of x[Symbol.iterator](false)) {
      expect(y instanceof CDLLwS.Node).not.toBe(true);
    }
    
    for(let y of x) {
      expect(y instanceof CDLLwS.Node).not.toBe(true);
    }
  });

  it("stores its length", function() {
    let x = new CDLLwS();
    expect(x.length).toEqual(0);

    let tot = 100;
    for(let i=0; i<tot; i++) {
      var val = Math.random();
      x.append(val);
    }
    expect(x.length).toEqual(tot);    
  });

  it("appends values -> correct length", function() {
    let x = new CDLLwS();
    let tot = 100;

    expect(() => {
      for(let i=0; i<tot; i++) {
        var val = Math.random();
        x.append(val);
      }
    }).not.toThrow();

    expect(x.length).toEqual(tot);
  });

  it("gets values", function() {
    let x = new CDLLwS();
    var l = [1, "a", null, undefined, "z", 0.5454, {}];
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

  it("inserts values", function() {
    let x = new CDLLwS();

    for(let i=0; i<100; i++) {
      let index = Math.floor(Math.random() * x.length);
      let value = Math.random();
      x.insert(index, value);
      expect(value).toEqual(x.get(index));
    }

    //to insert in position -1 means to insert before the last item i.e. in position [-2]==[x.length-2]
    let value = Math.random();
    x.insert(-1, value);
    expect(value).toEqual(x.get(x.length - 2));
  });
});