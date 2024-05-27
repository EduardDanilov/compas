<template>
    <div class="container">
        <h2 class="container__heading">Документы</h2>
        <div class="container__documents documents">
            <Swiper
                :modules="[
                    SwiperController,
                    SwiperNavigation,
                    SwiperPagination,
                    SwiperMousewheel,
                ]"
                :slides-per-view="3"
                :loop="true"
                freeMode="true"
                navigation
                pagination
            >
                <SwiperSlide
                    v-for="doc in documents"
                    :key="doc"
                    class="documents__item"
                >
                    <div class="item-content">
                        <h3 class="item-content__heading">
                            {{ doc.heading }}
                        </h3>
                        <p class="item-content__text">{{ doc.text }}</p>
                    </div>
                    <NuxtLink :to="{name:doc.link}" class="button">Перейти</NuxtLink>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            documents: [
                {
                    heading: "Лицензионный договор",
                    text: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
                    link: "document",
                },
                {
                    heading: "Политика обработки персональных данных",
                    text: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
                    link: "document",
                },
                {
                    heading: "Информация об оплате",
                    text: "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
                    link: "document",
                },
                {
                    heading: "Блок 4",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a bibendum lectus, quis tincidunt tortor. Integer elementum nibh tellus, ut",
                    link: "document",
                },
                {
                    heading: "Блок 5",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a bibendum lectus, quis tincidunt tortor. Integer elementum nibh tellus, ut",
                    link: "document",
                },
                {
                    heading: "Блок 6",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a bibendum lectus, quis tincidunt tortor. Integer elementum nibh tellus, ut",
                    link: "document",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1148px;
    margin: 0 auto;
    padding-top: 85px;
    margin-bottom: 470px; // Создает пустое поле снизу

    // .container__heading

    &__heading {
        font-weight: 700;
        font-size: 34px;
        line-height: 120%;
        text-align: center;
        color: #000;
        margin-bottom: 40px;
    }

    // .container__documents

    &__documents {
        position: relative;
    }
}
.documents {
    &__control {
        position: absolute;
        z-index: 999;
        top: 50%;
        transform: translateY(-50%);
    }

    // .documents__item

    &__item {
        height: 450px;
        min-width: 340px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #eeeff1;
        border-radius: 10px;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
        background: #fff;
        flex: 0 0 340px;
        margin-bottom: 40px;
        margin-inline: 20px;
    }

    &__slider {
        overflow: hidden;
        position: relative;

        &-inner {
            display: flex;
            gap: 35px;
            transition: transform 0.3s;
            width: 100%;
        }
    }
}

.control-left {
    left: 0;
}
.control-right {
    right: 0;
}
.item-content {
    // .item-content__heading

    &__heading {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 31px;
        line-height: 120%;
        color: #1253a2;
        margin-bottom: 15px;
    }

    // .item-content__text

    &__text {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 120%;
        color: #000;
    }
}
.button {
    border-radius: 7px;
    background: #0584fe;
    color: #fff;
    padding-block: 11px;
    text-align: center;
}

.documents__slider-inner {
    display: flex;
    gap: 35px;
    transition: transform 0.3s;
    width: 100%;
}

@media (max-width: 768px) {
    .documents__item {
        flex: 0 0 100%;
    }
}
</style>
