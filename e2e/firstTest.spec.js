describe('Example', () => {

  it('should tap', async () => {

    for(let i = 0; i < 15; i++) {
      console.log('tapping for the ' + i + " time.")
      await (element(by.id('switch1'))).tap();
      await (element(by.id('switch2'))).tap();
      await (element(by.id('switch3'))).tap();
      await (element(by.id('switch4'))).tap();
      await (element(by.id('switch5'))).tap();
      await (element(by.id('switch6'))).tap();
      await (element(by.id('switch7'))).tap();
    }

  });

});
