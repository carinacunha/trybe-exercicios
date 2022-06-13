const {encode, decode} = require('./encode-decode.js');

describe('Functions encode and decode', () => {
  it('Encode function is defined', () => {
    expect(encode).toBeDefined();
  })

  it('Verify if encode is a functions', () => {
    expect(typeof encode).toBe('function');
  });

  it("Convert 'a' in 1", () => {
    expect(encode('ar')).toEqual('1r');
  });
  
  it("Convert 'e' in 2", () => {
    expect(encode('et')).toEqual('2t');
  });

  it("Convert 'i' in 3", () => {
    expect(encode('ir')).toEqual('3r');
  });

  it("Convert 'o' in 4", () => {
    expect(encode('on')).toEqual('4n');
  });

  it("Convert 'u' in 5", () => {
    expect(encode('us')).toEqual('5s');
  });

  it('Lenght result is equal lenght input', () => {
    expect(encode('ser').length).toEqual(3);
  });

  it('Decode function is defined', () => {
    expect(decode).toBeDefined();
  })

  it('Verify if encode is a functions', () => {
    expect(typeof decode).toBe('function');
  });

  it("Convert 1 in 'a'", () => {
    expect(decode('1r')).toEqual('ar');
  });
  
  it("Convert 2 in 'e'", () => {
    expect(decode('2t')).toEqual('et');
  });

  it("Convert 3 in 'i'", () => {
    expect(decode('3r')).toEqual('ir');
  });

  it("Convert 4 in 'o'", () => {
    expect(decode('4n')).toEqual('on');
  });

  it("Convert 5 in 'u'", () => {
    expect(decode('5s')).toEqual('us');
  });

  it('Lenght result is equal lenght input', () => {
    expect(decode('5s').length).toEqual(2);
  });

});


