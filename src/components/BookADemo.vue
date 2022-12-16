<template>
    <div class="book-a-demo">
        <div class="book-a-demo-title">
                Book a Demo
        </div>
        <div class="book-a-demo-form">
            <div class="book-a-demo-left">
                <textarea class="message-input" placeholder="Message">
                </textarea>
                <div class="email-section"> 
                    <img :src="emailIcon">
                    <div class="email-address">bussine@longevityintime.org</div>
                    <img :src="socialMedia">
                </div>
            </div>
            <div class="book-a-demo-right">
                <input class="enter-name" placeholder="Name">
                <input class="enter-email" placeholder="Email">
                <div class="enter-phone">
                    <div class="phone-areacode"><div>+1</div><img :src="usFlag" class="nation-flag"></div>
                    <input class="phone-number" placeholder="Phone">
                </div>
                <div class="send-button">Send</div>
            </div>
        </div>
    </div>
</template>
<script>
import usFlag from "@/assets/usflag.png"
import emailIcon from "@/assets/emailicon.png"
import socialMedia from "@/assets/socialmediagrou.png"


export default {
  setup() {
    return {
      usFlag,
      emailIcon,
      socialMedia
    }
  }
}
</script>
<style>
.book-a-demo{
    width: 1920px;
    height: 1080px;
    border-radius: 0px;
    background: rgba(54, 131, 252, 0.1);
    padding: 181px 153px 274px 152px;
    display: flex;
    flex-direction: column;
}
.book-a-demo-title{
    font-family: DM Sans;
    font-size: 48px;
    font-weight: 500;
    line-height: 62px;
    margin-bottom: 36px;
}
.book-a-demo-form{
    display: flex;
}
.book-a-demo-left{
    margin-right: 36px;
}
.message-input{
    background: rgba(54, 131, 252, 0.1);
    border-radius: 6px;
    height: 458px;
    width: 962px;
    border: none;
    padding: 0 0 403px 0;
    font-family: DM Sans;
    font-size: 24px;
    font-weight: 500;
    line-height: 31px;
    padding: 24px 0px 0px 18px;
    margin-bottom: 36px;
}
.enter-name{
    height: 47px;
    width: 617px;
    border-radius: 6px;
    padding: 8px 18px 8px 18px;
    background-color: #3683FC1A;
    margin-bottom: 40px;
    border: none;
;
}
.enter-email{
    height: 47px;
    width: 617px;
    border-radius: 6px;
    padding: 8px 18px 8px 18px;
    background-color: #3683FC1A;
    margin-bottom: 40px;
    border: none;
}
.enter-phone{
    display: flex;
    position: relative;
}
.phone-areacode{
    height: 47px;
    width: 114px;
    border-radius: 6px;
    padding: 8px 18px 8px 18px;
    background-color: #3683FC1A;
    margin-right: 26px;
    border: none;
}
.phone-number{
    background-color: #3683FC1A;
    height: 47px;
    width: 479px;
    border-radius: 6px;
    padding: 8px 18px 8px 18px;
    border: none;
}
.nation-flag{
   position: absolute;
   top:14px;
   right:18px
}
.send-button{
    height: 47px;
    width: 220px;
    border-radius: 140px;
    padding: 8px 81px 8px 81px;
    background-color:#3683FC;
    font-family: DM Sans;
    font-size: 24px;
    font-weight: 500;
    line-height: 31px;
    color: white;
    margin-top: 160px;
    margin-left: 397px;
}
.email-section{
    display: flex;
}
.email-address{
    margin-left: 21px;
    font-family: DM Sans;
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    margin-right: 96px;
}

</style>