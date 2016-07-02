import _ = require("lodash");

export type StoreCB = (data: any) => void;
export type cbs = { [key: string]: StoreCB };
export type DataType = Object | any[];

export class MC<DT extends DataType> {
  private _warnPush: boolean = false;
  private _warnQuery: boolean = false;
  private _id: string = null;
  private _data: DT = null;
  private cbs: { [key: string]: (data: DT) => void } = {};

  constructor(id: string, data: DT, ...children:any[]) {
    this._id = id;
    this._data = data;
  }

  // Gets the current Data from the store
  // If you are using react this would be primarly for componentWillMount
  getData() {
    return this._data
  }

  //base function that is not to be overriden
  setData(data: DT, refresh: boolean = true, push: boolean = false) {
    this._data = data;
    this.runCBs(refresh);
    if (push) {
      this.pushData();
    }
  }

  /**
    The Below code is either place holders to be overriden or can be overriden
    if more complex control is desired.
  **/

  //place holder function for you to override and push changes to the server.
  pushData(...children: any[]) {
    if (!this._warnPush) {
      this._warnPush = true;
      console.warn(`mc-basic: pushData has not been overriden for mc with id of ${this._id}`)
    }
  }

  //override this function! To query the server and use the private method of
  // _setData to actually set the data, which  will trigger the callbacks/push.
  queryData(...children: any[]) {
    if (!this._warnQuery) {
      this._warnQuery = true;
      console.warn(`mc-basic: queryData has not been overriden for mc with id of ${this._id}`)
    }
  }

  //Runs the callbacks override this if you want to do any fancier handling
  runCBs(refresh: boolean) {
    if (refresh) {
      var keys = Object.keys(this.cbs);
      for(let i = 0; i< keys.length -1; i++){
        this.cbs[i](this._data);
      }
    }
  }
  
  addCB(id: string, cb: StoreCB) {
    if (!this.cbs[id]) {
      this.cbs[id] = cb;
    } else {
      console.log(`There is an id collision please remove the id of "${id}" first
                    or use the replaceCB function`)
    }
  }

  replaceCB(id: string, cb: StoreCB) {
    if (!this.cbs[id]) {
      console.log(`Could not find id of "${id}" to replace adding it anyways`)
    }
    this.cbs[id] = cb;
  }

  removeCB(id: string) {
    if (this.cbs[id]) {
      delete this.cbs[id]
    } else {
      console.log(`could not find id of "${id}" in the deptartments callback dict`)
    }
  }

}
