<template>
    <nav class="nav">
        <NuxtLink to="/"><Logo class="nav-logo" /></NuxtLink>
        <div class="nav-menu">
            <ul
                v-if="!isMobile || isMenuActive"
                class="nav-menu__links menu-links"
            >
                <NuxtLink to="rates">
                    <li class="menu-links__item">Тарифы</li>
                </NuxtLink>
                <NuxtLink to="contacts">
                    <li class="menu-links__item">Контакты</li>
                </NuxtLink>
            </ul>
            <div
                v-if="!isMobile || isMenuActive"
                class="nav-menu__service menu-service"
            >
                <a href="tel:+74951184422" class="menu-service__phone"
                    >+7 495 118-44-22</a
                >
                <button class="menu-service__button">Вход</button>
                <button class="menu-service__button">Регистрация</button>
            </div>
        </div>
        <button
            v-if="isMobile"
            class="menu__burger"
            @click="toggleMenu"
            :class="{ active: isMenuActive }"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isMenuActive: false,
            isMobile: false,
        };
    },
    mounted() {
        if (process.client) {
            this.checkWindowSize();
            window.addEventListener("resize", this.checkWindowSize);
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
            const navMenu = document.querySelector(".nav-menu");
            navMenu.classList.toggle("animated-menu");
        },
        checkWindowSize() {
            if (process.client && window.innerWidth) {
                this.isMobile = window.innerWidth <= 768;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.nav {
    margin: 0 auto;
    width: 100%;
    max-width: 1160px;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    padding-inline: 10px;
}
.nav-logo {
    margin-right: 15px;
    font-size: 0;
}
.nav-menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // .nav-menu__links

    &__links {
        display: flex;
        align-items: center;
    }

    // .nav-menu__service

    &__service {
        display: flex;
        align-items: center;
    }
}
.menu-links {
    // .menu-links__item

    &__item {
        padding: 9px 15px;
        transition: all 0.25s linear;
    }
    &__item:hover {
        transform: scale(1.2);
        transition: all 0.25s ease-in-out;
    }
}
.menu-service {
    // .menu-service__phone

    &__phone {
        font-weight: 700;
        margin-right: 15px;
    }

    // .menu-service__button

    &__button {
        padding: 9px 15px;
        transition: all 0.25s ease-in-out;
    }
    &__button:hover {
        background-color: #0584fe;
        border-radius: 7px;
        transition: all 0.25s ease-in-out;
    }
}

.menu__burger {
    display: block;
    cursor: pointer;
    background: none;
    border: none;
    padding: 10px;
}

.menu__burger span {
    display: block;
    width: 30px;
    height: 3px;
    margin: 5px;
    background-color: #fff;
    transition: all 0.3s ease;
}

.menu__burger.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.menu__burger.active span:nth-child(2) {
    opacity: 0;
}

.menu__burger.active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
    .nav {
        justify-content: space-between;
        position: relative;
    }
    .nav-menu {
        background-color: #000;
        flex-direction: column;
        align-items: center;
        position: absolute;
        z-index: 0;
        left: 50%;
        transform: translateX(-50%);
        top: calc(100% - 15px);
        padding-bottom: 20px;
        width: 100%;

        &__links {
            flex-direction: column;
        }
        &__service {
            flex-direction: column;
        }
    }

    .menu-links__item,
    .menu-service__phone,
    .menu-service__button {
        transition: none;
        background: none;
        transform: none;
        padding: 0;
        padding-top: 15px;
    }

    .menu-links__item:hover,
    .menu-service__phone:hover,
    .menu-service__button:hover {
        transition: none;
        background: none;
        transform: none;
    }
    .animated-menu {
        animation: open-menu 1s forwards;
    }
}
@keyframes open-menu {
    from {
        top: -400%;
        opacity: 0;
    }
    to {
        top: calc(100% - 15px);
        opacity: 1;
    }
}
</style>
