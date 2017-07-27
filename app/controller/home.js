'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }

    test(ctx) {
      const query = ctx.query;
      console.log(query);
      this.ctx.body = 'hello, world!';
    }
  }
  return HomeController;
};
