import {MC} from "../ts/src/mc-basic";

interface KittyPicture {
  id: string;
  url: string;
  rating: number;
}

interface AllTheKittyPicturesEverCollection {
  [key: string]: KittyPicture;
}

class KittyPictureModelController extends MC<AllTheKittyPicturesEverCollection>{
  private _url:string;
  constructor(id:string, data: AllTheKittyPicturesEverCollection, url:string){
    super(id, data);
    this._url = url
  }
  queryData() {
    //Insert query using this._url
    //The call back needs to at least be something like below
    let data: AllTheKittyPicturesEverCollection = {};
    this.setData(data);
  }

  pushData(){
    //Insert favorite server update code and you can use a POST to the GET  url,
    //only if you are an API wizord!
  }
}
