export declare type StoreCB = (data: any) => void;
export declare type cbs = {
    [key: string]: StoreCB;
};
export declare class ModelController<DT> {
    private _warnPush;
    private _id;
    private _data;
    private cbs;
    constructor(id: string, data: DT);
    private getData();
    private _setData(data, refresh?, push?);
    pushData(): void;
    setData(data: DT, refresh?: boolean, push?: boolean): void;
    runCBs(refresh: boolean): void;
    addCB(id: string, cb: StoreCB): void;
    replaceCB(id: string, cb: StoreCB): void;
    removeCB(id: string): void;
}
