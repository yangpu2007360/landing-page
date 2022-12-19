<template>
    <div class="Pricing">
        <div class="pricing-title">
            Pricing
        </div>
        <div class="pricing-options">
            <div class="single-option">
                <div class="single-option-title">
                Starter
                </div>
                <div class="single-option-description">
                Boost your clinic exams with fast diagnosis with help of AI
                </div>
                <div class="options-features">
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>Predictions</div>
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>Depersonalization</div>
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>Data Structuring</div>
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>up to 5 doctors</div>
                </div>
                <div class="price-tage">USD <div class="price-number"> $39</div>/mo</div>
            </div>
            <div class="single-option">
                <div class="single-option-title">
                Professional
                </div>
                <div class="single-option-description">
                    For Clinics and hospitals that want to giver personalized experience
                </div>
                <div class="options-features">
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>All in starter</div>
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>10 Custom models</div>
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>100 doctors</div>
                </div>
                <div class="price-tage">USD <div class="price-number"> $99</div>/mo</div>
            </div>
            <div class="single-option">
                <div class="single-option-title">
                Enterprise
                </div>
                <div class="single-option-description">
                    For organizations that need powerful tools and custom services
                </div>
                <div class="options-features">
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>All in professional</div>
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>Unlimited models and doctors</div>
                    <div class="single-feature"><div class="check-mark"><img :src="checkMark"></div>Multiple organizations panel</div>
                </div>
                <div class="price-tage">USD <div class="price-number"> $39</div>/mo</div>
            </div>
        </div>
        <div class="full-pricing-table">Full Pricing Table <img :src="inputIcon"></div>
    </div>
</template>

<script>
import inputIcon from "@/assets/inputicon.png"
import checkMark from "@/assets/checkmark.png"

export default {
  setup() {
    return {
        inputIcon,
        checkMark,
    }
  }
}
</script>

<style>
.Pricing{
    padding-left: 152px;
}
.pricing-title{
    font-family: DM Sans;
    font-size: 48px;
    font-weight: 500;
    line-height: 62px;
    margin-bottom: 96px;
}
.pricing-options{
    display: flex;
    padding-left: 77px;
    column-gap: 162px;
    margin-bottom: 42.5px;
}
.single-option{
    height: 502px;
    width: 378px;
    border-radius: 18px;
    background-color: rgba(54, 131, 252, 0.1);
    padding: 48px 38px 48px 64px;
}
.full-pricing-table{
    font-family: DM Sans;
    font-size: 16px;
    font-weight: 500;
    color: rgba(54, 131, 252, 1);
    text-align: center;
    margin-right: 15px;
    margin-bottom: 80px;
}
.single-option-title{
    font-family: DM Sans;
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    text-align: center;
    margin-bottom: 24px;
}
.single-option-description{
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 36px;
}
.options-features{
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 29px;
}
.check-mark{
    margin-right: 20px;
}
.single-feature{
    display: flex;
    margin-bottom: 24px;
}
.price-tage{
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 42px;
    color: rgba(33, 53, 92, 1);
    display: flex;
    justify-content: center;
    column-gap: 5px;
}
.price-number{
    font-size: 32px;
    font-weight: 550;
}
</style>