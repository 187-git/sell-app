<template>
    <div class="header">
        <div class="bgone">
            <img :src="seller.avatar" alt="">
            <div class="conter-list">
                <div class="one">
                    <img src="./img/brand@2x.png" alt="">
                    <p>{{seller.name}}</p>
                </div>
                <p>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
                <div class="two">
                    <img src="./img/decrease_1@2x.png" alt="">
                    <p>在线支付满28减5，满50减10</p>
                </div>
                
            </div>
            <div class="option">5个 ></div>
        </div>
        <div class="bgtwo">
            <img src="./img/bulletin@2x.png" alt="">
            <p>{{seller.bulletin}} </p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        seller:{
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
width:100%;
height:1.34rem;
background-image:url('img/avatar.jpg');
background-repeat:no-repeat;
background-size:100% 200%;
position: relative;
}
.bgone{
background:rgba(7,17,27,0.8);
height:1.06rem;
display:flex;
}
.bgone>img{
width:0.64rem;
height:0.64rem;
margin:0.24rem 0 0.18rem 0.24rem;
border-radius:4px;
}
.conter-list{ 
height:0.62rem;
margin-top:0.26rem;
display:flex;
flex-direction:column;
}
.one{
display:flex; 
}
.one img{
width: 0.3rem;
height:0.18rem;
margin:0.02rem 0 0 0.16rem;
}
.conter-list .one p{
font-size:0.16rem;
color:rgb(255,255,255);
line-height:0.18rem;
font-weight:bold;
margin:0.02rem 0 0 0.06rem;
}
.conter-list>p{
font-size:0.1rem;
color:rgb(255,255,255);
font-weight:200;
line-height:0.12rem;
margin:0.08rem 0 0 0.18rem;
}
.two{
display:flex;
margin:0.1rem 0 4px 0.18rem;
}
.two img{
width:0.12rem;
height:0.12rem;
}
.conter-list .two p{
font-size:0.1rem;
color:rgb(255,255,255);
font-weight:200;
line-height:0.12rem;
margin-left:8px;
}
.option{
    width:.42rem;
    height:.24rem;
    border-radius:0.15rem;
    background:rgba(0,0,0,0.3);
    font-size: .1rem;
    color:white;
    position: absolute;
    top:.67rem;
    right:.12rem;
    box-sizing: border-box;
    padding:.04rem .05rem;
}
.bgtwo{
height:0.28rem;
width:100%;
background:rgba(7,17,27,0.2);
display:flex;
}
.bgtwo img{
width:0.22rem;
height:0.15rem;
margin:0.08rem 0 0 0.12rem;
}
.bgtwo p{
font-size:0.1rem;
color:rgb(255,255,255);
font-weight:200;
line-height:0.28rem;
margin-left:8px;
width:3.11rem;
white-space: nowrap;
overflow: hidden;
text-overflow:ellipsis;
}
</style>