"use strict";
const _ = require("lodash");
class ModelController {
    constructor(id, data) {
        this._warnPush = false;
        this._id = null;
        this._data = null;
        this.cbs = {};
        this._id = id;
        this._data = data;
    }
    getData() {
        return this._data;
    }
    _setData(data, refresh = true, push = false) {
        this._data = data;
        this.runCBs(refresh);
        if (push) {
            this.pushData();
        }
    }
    pushData() {
        if (!this._warnPush) {
            this._warnPush = true;
            console.warn(`mc-basic push has not been overriden for mc with id of ${this._id}`);
        }
    }
    setData(data, refresh = true, push = false) {
        this._setData(data, refresh, push);
    }
    runCBs(refresh) {
        if (refresh) {
            _.each(this.cbs, (cb) => {
                cb(this._data);
            });
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
exports.ModelController = ModelController;
//# sourceMappingURL=mc-basic.js.map