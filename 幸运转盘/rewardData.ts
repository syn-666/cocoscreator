export enum REWAED_TYPE{
    COIN_REWARD = 1,//金币
    INTERFACE,//皮肤
}

export interface reward{
    readonly min: number;
    readonly max: number;
    readonly type: REWAED_TYPE;
    readonly content:any;
    readonly rotate: number;
}

export let rewards: reward[] = [
    {
        min:0,
        max:0.3,
        type:REWAED_TYPE.COIN_REWARD,
        content:'XXXXXXXXXXXXX1',
        rotate: 22.5,
    },
    {
        min:0.3,
        max:0.57,
        type:REWAED_TYPE.COIN_REWARD,
        content:'XXXXXXXXXXXXX2',
        rotate: 67.5,
    },
    {
        min:0.57,
        max:0.73,
        type:REWAED_TYPE.COIN_REWARD,
        content:'XXXXXXXXXXXXX3',
        rotate:112.5,
    },
    {
        min:0.73,
        max:0.83,
        type:REWAED_TYPE.COIN_REWARD,
        content:'XXXXXXXXXXXXX4',
        rotate: 157.5,
    },
    {
        min:0.83,
        max:0.9,
        type:REWAED_TYPE.COIN_REWARD,
        content:'XXXXXXXXXXXXX5',
        rotate:202.5,
    },
    {
        min:0.9,
        max:0.95,
        type:REWAED_TYPE.COIN_REWARD,
        content:'XXXXXXXXXXXXX6',
        rotate: 247.5,
    },
    {
        min:0.95,
        max:0.975,
        type:REWAED_TYPE.COIN_REWARD,
        content:'XXXXXXXXXXXXX7',
        rotate: 292.5,
    },
    {
        min:0.975,
        max:1,
        type:REWAED_TYPE.INTERFACE,
        content:'XXXXXXXXXXXXX8',
        rotate:337.5,
    },
]
