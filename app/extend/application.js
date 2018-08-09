
'use strict';

const Saiyun = require('../../submail/');

module.exports = {
  get sms() {
    const config = this.config.submail
    const send = new Saiyun.MessageXSend(config.messageConfig)

    return {
      send,
    };
  },
};