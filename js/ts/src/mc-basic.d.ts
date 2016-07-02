export declare type StoreCB = (data: any) => void;
export declare type cbs = {
    [key: string]: StoreCB;
};
export declare type DataType = Object | any[];
export declare class MC<DT extends DataType> {
    private _warnPush;
    private _warnQuery;
    private _id;
    private _data;
    private cbs;
    constructor(id: string, data: DT, ...children: any[]);
    getData(): DT;
    setData(data: DT, refresh?: boolean, push?: boolean): void;
    pushData(...children: any[]): void;
    queryData(...children: any[]): void;
    runCBs(refresh: boolean): void;
    addCB(id: string, cb: StoreCB): void;
    replaceCB(id: string, cb: StoreCB): void;
    removeCB(id: string): void;
}
