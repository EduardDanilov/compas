<template>
    <Swiper
        :slides-per-view="3"
        :modules="[
            SwiperPagination,
            SwiperNavigation,
            SwiperMousewheel,
            SwiperController,
        ]"
        :loop="true"
        :pagination="{ clickable: true }"
        mousewheel
        navigation
    >
        <SwiperSlide
            v-for="({ heading, text }, index) in documents"
            :key="index"
        >
            <div class="documents__item">
                <div class="item-content">
                    <h3 class="item-content__heading">{{ heading }}</h3>
                    <p class="item-content__text">
                        {{ text }}
                    </p>
                </div>
                <NuxtLink to="#"
                    ><button class="button">Перейти</button></NuxtLink
                >
            </div>
        </SwiperSlide>

    </Swiper>
</template>
<script>
export default {
    data() {
        return {
            documents: [
                {
                    heading: "Лицензионный договор",
                    text: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
                },
                {
                    heading: "Политика обработки персональных данных",
                    text: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
                },
                {
                    heading: "Информация об оплате",
                    text: "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
                },
                { heading: "Блок 4", text: "Текст блока 4" },
                { heading: "Блок 5", text: "Текст блока 5" },
                { heading: "Блок 6", text: "Текст блока 6" },
            ],
        };
    },
};
</script>
<style scoped>
.documents__item {
    height: 450px;
    width: 340px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #eeeff1;
    border-radius: 10px;
    width: 340px;
    height: 450px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
    background: #fff;
}
.item-content__heading {
    font-weight: 700;
    font-size: 31px;
    line-height: 120%;
    color: #1253a2;
    margin-bottom: 10px;
}
.item-content__text {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #000;
}
.button {
    border-radius: 7px;
    background: #0584fe;
    color: #fff;
    padding-block: 11px;
    width: 100%;
}
</style>
