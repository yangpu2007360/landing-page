<template>
    <div class="use-cases">
    <div class="use-cases-title">Use Cases</div>
        <div class="four-cases">
            <div class="left-side">
                <div class="left-side-top">
                    <div class="case-description">
                        Use our app to get insights and track your health in the palm of your hand, or tough your browser
                    </div>
                    <div class="case-name">People</div>
                    <div class="open-icon"><img :src="openIcon"></div>
                </div>
                <div class="left-side-bottom">
                    <div class="case-description">
                        Boost your doctor needs and quickly get biomarkers to run diagnosis
                    </div>
                    <div class="case-name">For Clinics and Doctors</div>
                    <div class="open-icon"><img :src="openIcon"></div>
                </div>
            </div>
            <div class="right-side">
                <div class="right-side-top">
                    <div class="case-description">
                        Create and use custom AI models to diagnose your patients using our platform
                    </div>
                    <div class="case-name">For Hospitals</div>
                    <div class="open-icon"><img :src="openIcon"></div>
                </div>
                <div class="right-side-bottom">
                    <div class="case-description">
                        Manage multiple orgnizations in our panel with unlimited custom models and doctors {more text to be added}
                    </div>
                    <div class="case-name">For Organizations</div>
                    <div class="open-icon"><img :src="openIcon"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import openIcon from "@/assets/openicon.png"

export default {
  setup() {
    return {
        openIcon
    }
  }
}
</script>

<style>
.use-cases{
    width: 1920px;
    padding: 204px 159px 180px 159px;
}
.use-cases-title{
    font-family: DM Sans;
    font-size: 48px;
    font-weight: 500;
    line-height: 62px;
    margin-bottom: 96px;
}
.four-cases{
    display: flex;
}
.left-side{
    width: 736px;
    background: rgba(54, 131, 252, 0.1);
}
.left-side-top{
    padding: 48px 48px 0px 48px;
    height: 487px;
    border: 3px solid rgba(54, 131, 252, 0.1);
    position: relative;
}
.left-side-bottom{
    padding: 48px 48px 0px 48px;
    height: 415px;
    border: 1px solid rgba(54, 131, 252, 0.1);
    position: relative;
}
.right-side{
    width: 867px;
    background: rgba(54, 131, 252, 0.1);
}
.right-side-top{
    padding: 48px 48px 0px 48px;
    height: 374px;
    border: 3px solid rgba(54, 131, 252, 0.1);
    position: relative;
}
.right-side-bottom{
    padding: 48px 48px 0px 48px;
    height: 528px;
    border: 1px solid rgba(54, 131, 252, 0.1);
    position: relative;
}
.case-description{
    font-family: DM Sans;
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
}
.case-name{
    font-family: DM Sans;
    font-size: 48px;
    font-weight: 500;
    line-height: 62px;
    position: absolute;
    bottom:48px;
    left:48px;
    width:350px

}
.open-icon{
    position: absolute;
    bottom: 55px;
    right: 48px
}
</style>