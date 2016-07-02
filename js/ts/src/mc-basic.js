"use strict";
class MC {
    constructor(id, data, ...children) {
        this._warnPush = false;
        this._warnQuery = false;
        this._id = null;
        this._data = null;
        this.cbs = {};
        this._id = id;
        this._data = data;
    }
    getData() {
        return this._data;
    }
    setData(data, refresh = true, push = false) {
        this._data = data;
        this.runCBs(refresh);
        if (push) {
            this.pushData();
        }
    }
    pushData(...children) {
        if (!this._warnPush) {
            this._warnPush = true;
            console.warn(`mc-basic: pushData has not been overriden for mc with id of ${this._id}`);
        }
    }
    queryData(...children) {
        if (!this._warnQuery) {
            this._warnQuery = true;
            console.warn(`mc-basic: queryData has not been overriden for mc with id of ${this._id}`);
        }
    }
    runCBs(refresh) {
        if (refresh) {
            var keys = Object.keys(this.cbs);
            for (let i = 0; i < keys.length - 1; i++) {
                this.cbs[i](this._data);
            }
        }
    }
    addCB(id, cb) {
        if (!this.cbs[id]) {
            this.cbs[id] = cb;
        }
        else {
            console.log(`There is an id collision please remove the id of "${id}" first
                    or use the replaceCB function`);
        }
    }
    replaceCB(id, cb) {
        if (!this.cbs[id]) {
            console.log(`Could not find id of "${id}" to replace adding it anyways`);
        }
        this.cbs[id] = cb;
    }
    removeCB(id) {
        if (this.cbs[id]) {
            delete this.cbs[id];
        }
        else {
            console.log(`could not find id of "${id}" in the deptartments callback dict`);
        }
    }
}
exports.MC = MC;
//# sourceMappingURL=mc-basic.js.map