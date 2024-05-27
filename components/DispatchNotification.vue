<template>
    <div class="container">
        <div class="notification">
            <h3>Уведомление</h3>
            <p>Форма отправлена</p>
        </div>
        <button class="button" @click="closeNotification">OK</button>

    </div>
</template>
<script>
export default {
    methods: {
        closeNotification() {
            this.$emit('close');
        }
    }
};
</script>
<style scoped>
.container {
    width: 300px;
    padding: 30px;
    border: 1px solid black;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, -250%);
}
.button {
    border: 1px solid black;
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>