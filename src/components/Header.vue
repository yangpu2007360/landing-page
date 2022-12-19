<template>
    <div class="landing-page-header">
        <div class="header-top">
            <img :src="longevityLogo">
            <div class="navagation">
                <div class="nav-item">RESOURCES</div>
                <div class="nav-item" @click="this.showallsolutions=!this.showallsolutions">
                    <div class="solutions-word">SOLUTIONS</div>
                    <div :class="{'all-solutions': showallsolutions, 'all-solutions-hidden':!showallsolutions }">
                        <div>API / Disease pediction</div>
                        <div>API / Disease Prediction Models</div>
                        <div>API / Depersonalization</div>
                        <div>API / Document Analysis</div>
                        <div>API / Data Structuring</div>
                        <div>API / Data Structuring</div>
                    </div>
                </div>
                <div class="nav-item">SUPPORT</div>
                <div class="nav-item">PRICING</div>
                <div class="nav-item">LOGIN</div>
            </div>
        </div>
        <div class="header-title">An AI that can predict </div>
        <div class="header-title">diseases of your patients  </div>
        <div class="sub-title">And help cure them InTime</div>
        <div class="book-a-demo-top">Book a Demo</div>
        <div class="discover-solutions">Discover Our Solutions For</div>
        <div class="discover-solutions">Business and Doctors</div>
        <svg width="31" height="17" viewBox="0 0 31 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.6422 3.68631L16.9143 16.4142C16.1333 17.1953 14.8669 17.1953 14.0859 16.4142L1.35797 3.68631C0.576916 2.90526 0.576916 1.63893 1.35797 0.857883C2.13901 0.0768337 3.40535 0.0768336 4.1864 0.857883L14.3285 11L16.6717 11L26.8138 0.857882C27.5949 0.0768326 28.8612 0.0768325 29.6422 0.857881C30.4233 1.63893 30.4233 2.90526 29.6422 3.68631Z" fill="#21355C"/>
        </svg>
        <svg width="31" height="17" viewBox="0 0 31 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6422 3.68631L16.9143 16.4142C16.1333 17.1953 14.8669 17.1953 14.0859 16.4142L1.35797 3.68631C0.576916 2.90526 0.576916 1.63893 1.35797 0.857883C2.13901 0.0768337 3.40535 0.0768336 4.1864 0.857883L14.3285 11L16.6717 11L26.8138 0.857882C27.5949 0.0768326 28.8612 0.0768325 29.6422 0.857881C30.4233 1.63893 30.4233 2.90526 29.6422 3.68631Z" fill="#21355C"/>
        </svg>
    </div>
</template>

<script>
import longevityLogo from "@/assets/longevitylogo.png"

export default {
  setup() {
    return {
        longevityLogo
    }
  },
  data() {
    return {
      showallsolutions: false, 
    }
  },
}
</script>

<style>
.landing-page-header{
    height: 1080px;
    width: 1920px;
    background: rgba(54, 131, 252, 0.1);
    padding: 47px 108px 78px 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header-top{
    display: flex;
    margin-bottom: 250px;
}
.navagation{
    display: flex;
    margin-left: 586px;
}
.nav-item{
    font-family: DM Mono;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    margin-right: 54px;
    position: relative;
}
.solutions-word:hover{
    background-color: #FFFFFF;
}
.all-solutions{
    position: absolute;
    width: 408px;
    bottom: -120px;
    left: 0px;
    background-color: white;
}
.all-solutions-hidden{
    position: absolute;
    width: 408px;
    bottom: -120px;
    left: 0px;
    visibility: hidden;
}
.header-title{
    font-family: DM Mono;
    font-size: 64px;
    font-weight: 500;
    line-height: 83px;
}
.sub-title{
    font-size: 48px;
    margin-bottom: 64px;
}
.book-a-demo-top{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 72px;
    background: #3683FC;
    border-radius: 10px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    color: #FFFFFF;
    margin-bottom: 122px;
}
.discover-solutions{
    font-family: DM Mono;
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    color: #21355C;
    margin-bottom: 35px;
}
</style>