<template>
    <div class="solutions">
        <div class="solutions-title">Solutions</div>
        <div class="solutions-subtitle">Solutions / <div class="blue">APIs</div></div>
        <div class="solutions-selections">
            <div class="each-selection"><div class="each-selection-word">Depersonalization</div></div>
            <div class="each-selection">Prediction</div>
            <div class="each-selection">Custom Prediction Models</div>
            <div class="each-selection">Document analysis</div>
            <div class="each-selection">Data structuring</div>
        </div>
        <div class="solution-card">
        <div class="solution-image"><img :src="solutionImage"></div>
        <div class="solution-right">
            <div class="solution-right-title">
            Depersonalization APT
            </div>
            <div class="solution-right-description">
                Remove information that can identify patients<br>
                <br>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
            <div class="learn-more">Learn More <img :src="inputIcon"></div>
        </div>
        </div>
        <div class="solution-title-word">Solutions / <div class="blue">App</div></div>
        <div class="solution-card">
        <div class="solution-image"><img :src="phoneIcon"></div>
        <div class="solution-right">
            <div class="solution-right-title">
            Depersonalization APT
            </div>
            <div class="solution-right-description">
                Remove information that can identify patients<br>
                <br>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
            <div class="learn-more">Learn More <img :src="inputIcon"></div>
        </div>
        </div>
        <div class="solution-title-word">Solutions / <div class="blue">Simulation</div></div>
        <div class="solution-card">
        <div class="solution-image"><img :src="brainIcon"></div>
        <div class="solution-right">
            <div class="solution-right-title">
                Simulation of Clinical trials with AI
            </div>
            <div class="solution-right-description">
                Using AI algorithms we simulate effects of drugs and chnage of habits to give personalized results for patient biomarkers
            </div>
            <div class="learn-more">Learn More <img :src="inputIcon"></div>
        </div>
        </div>
    </div>
</template>

<script>
import solutionImage from "@/assets/solutionimage.png"
import inputIcon from "@/assets/inputicon.png"
import phoneIcon from "@/assets/phoneicon.png"
import brainIcon from "@/assets/brainicon.png"
export default {
  setup() {
    return {
        solutionImage,
        inputIcon,
        phoneIcon,
        brainIcon
    }
  }
}
</script>

<style>
.solutions{
    padding-left: 152px;
}
.solutions-title{
    font-family: DM Sans;
    font-size: 48px;
    font-weight: 500;
    line-height: 62px;
    margin-bottom: 96px;
}
.solutions-subtitle{
    font-family: DM Mono;
    font-size: 36px;
    font-weight: 500;
    line-height: 47px;
    margin-bottom: 36px;
    display: flex;
}
.solutions-selections{
    display: flex;
    column-gap: 48px;
    margin-bottom: 64px;
}
.each-selection{
    height: 50px;
    border-radius: 48px;
    padding: 12px 24px 12px 24px;
    background-color: rgba(54, 131, 252, 1);
    color: white;
    font-family: DM Mono;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
}
.solution-card{
    display: flex;
    margin-bottom: 200px;
}
.solution-image{
    margin-right: 96px;
}
.solution-right-title{
    font-family: DM Mono;
    font-size: 36px;
    font-weight: 400;
    line-height: 47px;
    margin-bottom: 28px;
}
.solution-right-description{
    font-family: DM Mono;
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    margin-bottom: 126px;
}
.learn-more{
    font-family: DM Sans;
    font-size: 24px;
    font-weight: 500;
    line-height: 31px;
    color: rgba(54, 131, 252, 1);
}
.solution-title-word{
    font-family: DM Mono;
    font-size: 36px;
    font-weight: 500;
    line-height: 47px;
    margin-bottom: 84px;
    display: flex;
}
.blue{
    color: rgba(54, 131, 252, 1)
}

</style>