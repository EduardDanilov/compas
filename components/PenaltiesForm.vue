<template>
    <div>
        <section class="main">
            <div class="main-content">
                <h1 class="main-content__heading">
                    Проверьте штрафы и зарегестрируйтесь в 1 клик
                </h1>
                <form class="main-content__form">
                    <div class="horizontal-field">
                        <div class="form-field">
                            <label for="license-plate" class="label"
                                >Номер автомобиля</label
                            >
                            <input
                                type="text"
                                ref="license-plate"
                                class="form-field__input"
                                v-model="licensePlate"
                                :on-focus="deleteIncorrect('license-plate')"
                            />
                        </div>
                        <div class="form-field">
                            <label for="region" class="label">Регион</label>
                            <input
                                type="number"
                                ref="region"
                                class="form-field__input"
                                v-model="region"
                                :on-focus="deleteIncorrect('region')"
                            />
                        </div>
                    </div>
                    <div class="form-field">
                        <label for="sertificate" class="label"
                            >Свидетельство о регистрации</label
                        >
                        <input
                            type="text"
                            ref="sertificate"
                            class="form-field__input"
                            v-model="sertificate"
                            :on-focus="deleteIncorrect('sertificate')"
                        />
                    </div>
                    <div class="form-buttons">
                        <button
                            class="form-buttons__button submit-button"
                            @click.prevent="sendForm"
                        >
                            Проверить штрафы<svg
                                class="arrow"
                                width="15"
                                height="13"
                                viewBox="0 0 15 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.9226 6.67278L0.570412 6.66773C0.257929 6.66759 0.00472069 6.41416 0.00485992 6.10168L0.00487518 6.09709C0.00757599 5.781 0.26404 5.52588 0.580147 5.52485L11.9083 5.48784L7.46464 1.01635C7.23486 0.785138 7.23115 0.412947 7.45628 0.177198C7.67473 -0.051569 8.03728 -0.0599298 8.26604 0.158525C8.26915 0.161493 8.27222 0.164496 8.27526 0.167534L13.8712 5.75744C14.0666 5.9526 14.0668 6.26918 13.8716 6.46455L13.87 6.4662L8.18914 12.1003C7.95859 12.329 7.58633 12.3275 7.35767 12.0969C7.35452 12.0937 7.3514 12.0905 7.34832 12.0873C7.11811 11.8443 7.12347 11.4621 7.36039 11.2257L11.9226 6.67278Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <button
                            class="form-buttons__button about-button"
                            @click.prevent="openVideo"
                        >
                            <svg
                                class="youtube-icon"
                                width="32"
                                height="23"
                                viewBox="0 0 32 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2.5258 20.2492C1.61798 19.0743 1.16406 16.1905 1.16406 11.5976C1.16406 7.00468 1.52855 4.25596 2.25754 3.35141C2.75216 2.6247 3.22423 2.1221 3.67376 1.8436C4.12329 1.5651 4.71528 1.40847 5.44973 1.37371C10.5243 1.12406 14.3824 0.999492 17.0239 1C19.6655 1.00051 23.1675 1.12651 27.5299 1.37798C28.2271 1.51283 28.8478 1.77363 29.392 2.16038C29.9363 2.54714 30.3022 3.04098 30.4897 3.64191C31.0955 5.04118 31.3984 7.52884 31.3984 11.1049C31.3984 14.6809 31.1736 17.2829 30.7239 18.9108C30.4927 19.803 30.0488 20.5145 29.392 21.045C28.7353 21.5756 27.852 21.8344 26.7423 21.8215C21.892 22.0624 18.2543 22.1787 15.8292 22.1702C13.4042 22.1618 9.93055 22.0209 5.40843 21.7474C4.7907 21.7474 4.26489 21.6434 3.83098 21.4353C3.39708 21.2272 2.96202 20.8318 2.5258 20.2492Z"
                                    stroke="#1253A2"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.2152 7.03704L13.219 7.04004L21.3701 11.3065L20.3739 11.7778L13.2089 15.4787L13.2149 7.03804L13.2152 7.03704Z"
                                    fill="#1253A2"
                                />
                            </svg>
                            О сервисе<span class="video-time"
                                >(1 мин. 20 сек)</span
                            >
                        </button>
                    </div>
                    <p class="main-content__text">
                        Нажимая «Проверить штрафы» вы соглашаетесь с политикой
                        обработки персональных данных и принимаете оферту
                    </p>
                </form>
            </div>
            <div class="main-image">
                <img src="@/public/comp.png" alt="computer" />
            </div>
        </section>
        <DispatchNotification
            v-if="notification"
            @close="notification = false"
        />
        <ViewVideo v-if="showVideo" @close="closeVideo"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            licensePlate: "",
            region: "",
            sertificate: "",
            notification: false,
            showVideo: false,
        };
    },
    methods: {
        sendForm() {
            if (this.licensePlate && this.region && this.sertificate) {
                this.notification = true;
            } else {
                const inputFields =
                    document.querySelectorAll(".form-field__input");
                inputFields.forEach((field) => {
                    if (!field.value) {
                        field.classList.add("incorrect");
                    }
                });
            }
        },
        deleteIncorrect(target) {
            const inputElement = this.$refs[target];
            if (inputElement) {
                inputElement.classList.remove("incorrect");
            } else {
                return;
            }
        },
        openVideo() {
            this.showVideo = true;
        },
        closeVideo() {
            this.showVideo = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.main {
    max-width: 1135px;
    width: 100%;
    padding-inline: 10px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 79px;
}

.main-content {
    max-width: 563px;

    &__heading {
        font-weight: 700;
        font-size: 41px;
        line-height: 120%;
        margin-bottom: 25px;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__text {
        font-size: 13px;
        line-height: 120%;
        color: #8f8f8f;
    }
}

.horizontal-field {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.label {
    font-size: 12px;
    line-height: 120%;
    color: #000;
}

.form-field:nth-child(1) {
    max-width: 320px;
    width: 100%;
}

.form-field__input {
    padding-left: 10px;
}

.form-field__input:focus {
    border-color: rgb(133, 175, 238);
}

.incorrect {
    border-color: red;
}

.main-image {
    max-width: 532px;
}

.main-image img {
    width: 100%;
}

input {
    border: 1px solid #bcbcbc;
    border-radius: 5px;
    height: 40px;
}

.form-buttons {
    display: flex;
    gap: 21px;

    &__button {
        padding: 12px 20px;
        display: flex;
        border: 1px solid #0584fe;
        border-radius: 7px;
        stroke-width: 1px;
        align-items: center;
        gap: 5px;
    }

    &__button:hover {
        color: #fff;
        background-color: #0584fe;

        .arrow path {
            fill: #fff;
        }

        .video-time {
            color: #fff;
        }
    }
}

.arrow path {
    fill: #000;
}

.video-time {
    font-size: 15px;
    color: #1253a2;
}

@media (max-width: 1115px) {
    .main {
        justify-content: center;
    }

    .main-image {
        display: none;
    }
}

@media (max-width: 768px) {
    .horizontal-field {
        flex-direction: column;
    }

    .form-field:nth-child(1) {
        max-width: 100%;
    }

    .main-content__form {
        gap: 30px;
    }

    .form-buttons {
        flex-direction: column;

        &__button {
            justify-content: center;
        }
    }
    .main-content__heading {
        font-size: 30px;
    }
}
</style>
