const expect = require('expect');
const rewire = require('rewire');
var app = rewire('./app');

describe('App', () =>{
  var db = {
    saveUser : expect.createSpy()
  };
  app.__set__('db', db);

  it('should call spy correctly', () => {
    var spy = expect.createSpy();
    spy('Arg', 24);
    expect(spy).toHaveBeenCalledWith('Arg', 24);
  });
  it('should call save user with user object', () => {
    var email = 'abc@gmail.com';
    var password = '12345678';
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email : email,
      password : password
    })
  });
});
