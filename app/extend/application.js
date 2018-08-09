
'use strict';

const Saiyun = require('../../submail/');

module.exports = {
  get sms() {
    const config = this.config.sms
    const send = new Saiyun.MessageXSend(config)

    return {
      send,
    };
  },
};