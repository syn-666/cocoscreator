export enum signType {
    COIN = 1,
    INTERFACE
}

export interface sign{
    index:number,
    type: signType,
    reward: any,
}

export let weeks: sign[] = [
    {
        index : 0,//星期天
        type: null,
        reward: null,
    },
    {
        index : 1,//星期一
        type: null,
        reward: null,
    },
    {
        index : 2,
        type: null,
        reward: null,
    },
    {
        index : 3,
        type: null,
        reward: null,
    },
    {
        index : 4,
        type: null,
        reward: null,
    },
    {
        index : 5,
        type: null,
        reward: null,
    },
    {
        index : 6,
        type: null,
        reward: null,
    }
]