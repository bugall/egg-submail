var Message = require('./message.js');

function MessageXSend(options) {
    this.set_to = function(mob) {
        this.to = mob;
    };

    this.set_project = function(project) {
        this.project = project;
    };

    this.add_var = function(key, val) {
        this.vars[key] = val;
    };
    this.set_tag = function(tag) {
        this.tag = tag;
    }

    this.build_params = function() {
        var params = {};
        if (this.to != '') {
            params['to'] = this.to;
        }
        if (this.project != '') {
            params['project'] = this.project;
        }
        if (Object.keys(this.vars).length > 0) {
            params['vars'] = JSON.stringify(this.vars);
        }
        if(this.tag != ''){
            params['tag'] = this.tag;
        }
        return params;
    };
    this.xsend = function(params) {
        var message = new Message(options);
        message.xsend(params);
    }
};

module.exports = MessageXSend;
