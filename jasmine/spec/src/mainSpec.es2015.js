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
    //console.log(x, Symbol.iterator, x[Symbol.iterator]);
    for(let y of x[Symbol.iterator](true)) {
      console.log("--->", y);
      expect(y instanceof CDLLwS.Node).toBe(true);
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

  xit("gets values", function() {
    let x = new CDLLwS();
    x.append(1);
    x.append("a");
    x.append(null);
    x.append(undefined);
    x.append("z");
    
    expect(x.get(0)).toEqual(1);
    expect(x.get(1)).toEqual("a");
    expect(x.get(2)).toEqual(null);
    expect(x.get(3)).toEqual(undefined);
    expect(x.get(4)).toEqual("z");
    expect(x.get(-1)).toEqual("z");
    expect(() => { x.get(-2) }).toThrow();
    expect(() => { x.get(x.length) }).toThrow();
    expect(() => { x.get(x.length + 1) }).toThrow();
  });

  xit("inserts values", function() {
    let x = new CDLLwS();
    let tot = 100;
    for(let i=0; i<tot; i++) {
      x.append(true);
    }

    console.log("22222222222222");
    for(let i=0; i<10; i++) {
      let index = Math.floor(Math.random() * x.length) - 1;
      let value = Math.random() * 1000000;
      console.log("---------------");
      console.log(index, value);
      console.log("---");
      x.insert(index, value);
      expect(x.get(index)).toEqual(value);
    }

  });
});