const {ccclass, property} = cc._decorator;
import {rewards,reward,REWAED_TYPE} from './rewardData'
@ccclass
export default class lucky_wheel extends cc.Component {

    @property(cc.Node)
    private pointer: cc.Node = null;

    @property(cc.Button)
    private startBtn: cc.Button = null;

    @property(cc.Node)
    private wheel : cc.Node = null;

    @property(cc.Button)
    private closeBtn: cc.Button = null;

    private rewardArray: reward[] = [];

    //**方法区***************************************************/


    onLoad () {
        this.wheel.angle = 0;
        let self = this;
        this.rewardArray = rewards;
        this.closeBtn.node.on('touchend',this.luckeyWheel_Close,this);
        this.startBtn.node.on('touchend',this.luckeyWheel_Start,this);

        this.scheduleOnce(function(){
           self.closeBtn.node.getComponent(cc.Animation).play('close_enter'); 
           self.closeBtn.node.active = true;
        },3);
    }

    private luckeyWheel_Close():void{
        this.node.active = false;
    }

    private luckeyWheel_Start():void{
        this.wheel.angle = 0;
        this.startBtn.interactable = false;//图片变灰
        this.startBtn.node.off('touchend',this.luckeyWheel_Start,this);//取消监听点击事件
        let random : number = Math.random();//得到随机数,得到转动角度和奖励
        random = 0.23;
        let randomAround : cc.ActionInterval = null;
        let data : reward = null;
        this.rewardArray.forEach((e:reward) => {
            if(random >= e.min && random < e.max){
                randomAround = cc.rotateTo(2,e.rotate+360);
                data = e;
            }
        })
        let endAction : cc.ActionInstant = cc.callFunc(function(){
            this.startBtn.node.on('touchend',this.luckeyWheel_Start,this);
            this.startBtn.interactable = true;
            this.getReward(data);
        },this);
        this.wheel.runAction(cc.sequence(cc.rotateTo(0.5,2*360),cc.rotateTo(1,2*360),cc.rotateTo(1.2,2*360),cc.rotateTo(1.5,2*360),randomAround,endAction));
    }

    //获得奖励
    private getReward(data : reward):any {
        //判断奖励类型
        if(data.type === REWAED_TYPE.COIN_REWARD){

        }else{

        }
        console.log('......asd..asd...:',data.content)
    }

    start () {

    }

    // update (dt) {}
}
