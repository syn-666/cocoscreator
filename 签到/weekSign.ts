const {ccclass, property} = cc._decorator;

import {signType,sign,weeks} from './signData'

@ccclass
export default class NewClass extends cc.Component {

    //签到父节点
    @property(cc.Node)
    private signs: cc.Node = null;

    //签到按钮
    @property(cc.Button)
    private signBtn: cc.Button = null;

    @property(cc.Button)
    private closeBtn: cc.Button = null;

    //签到类型枚举
    private type_enum: signType = null;

    //今日签到
    private current_sign: sign = null;

    //签到子节点
    private signNodes: cc.Node[] = null;

    //本地存储的签到数组
    private local_signs: string[] = null;
    
    //上次签到时间毫秒值
    private beforeTime: number = null;

    //上次签到日期
    private beforeDate: Date = null;






    //**方法区***************************************************/


    onLoad () {
        this.closeBtn.node.opacity = 0;
        this.scheduleOnce(function(){
            this.closeBtn.node.getComponent(cc.Animation).play('closeBtn_show');
        },3);
        this.signBtn.interactable = true;
        let date = new Date();
        //得到今日应得得签到奖励对象
        this.current_sign = weeks[date.getDay()];
        //得到所有签到子节点
        this.signNodes = this.signs.children;
        //得到之前签到的数组进行渲染
        let str = cc.sys.localStorage.getItem('signArr') || null;
        if(str != null){
            this.local_signs = str.split(',');
        }
        this.beforeTime = parseInt(cc.sys.localStorage.getItem('signTime')) || null;
        if(!this.beforeTime){
            this.beforeDate = new Date(this.beforeTime);
            if((date.getDay()<=this.beforeDate.getDay())||(Math.floor(date.getTime()/86400000) - Math.floor(this.beforeTime/86400000)>=7)){
                this.local_signs = [];
            }
            if(Math.floor(date.getTime()/86400000) - Math.floor(this.beforeTime/86400000) < 1){
                this.signBtn.interactable = false;
            }
        }
        this.local_signs.forEach((e) => {
            let sprite:cc.Sprite =  this.signNodes[parseInt(e)].getComponent(cc.Sprite);
            cc.loader.loadRes('signed',cc.SpriteFrame,function(err,spriteFrame){
                if(err){
                    cc.error(err.message || err)
                    return;
                }
                sprite.spriteFrame = spriteFrame;
            })
        })
    }

    //绑定点击按钮
    private signClick():void{
        let date: Date = new Date();
        if(this.signBtn.interactable){
            let sprite:cc.Sprite =  this.signNodes[date.getDay()].getComponent(cc.Sprite);
            cc.loader.loadRes('signed',cc.SpriteFrame,function(err,spriteFrame){
                if(err){
                    cc.error(err.message || err)
                    return;
                }
                sprite.spriteFrame = spriteFrame;
            })
            this.signBtn.interactable = false;
            //奖励方法
            this.weekSign(date.getDay());


            this.local_signs.push(date.getDay().toString());
            cc.sys.localStorage.setItem('signArr',this.local_signs);
            cc.sys.localStorage.setItem('signTime',date.getTime());
        }
    }

    //奖励方法
    private weekSign(index: number):void{
        
    }

    private closeSign():void{
        this.node.active = false;
    }

    start () {

    }

    // update (dt) {}
}
