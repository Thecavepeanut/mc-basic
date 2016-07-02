"use strict";
const mc_basic_1 = require("../ts/src/mc-basic");
class KittyPictureModelController extends mc_basic_1.MC {
    constructor(id, data, url) {
        super(id, data);
        this._url = url;
    }
    queryData() {
        let data = {};
        this.setData(data);
    }
    pushData() {
    }
}
//# sourceMappingURL=example-mc.js.map