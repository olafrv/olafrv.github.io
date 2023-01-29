<template>
    <canvas ref="canvas"></canvas>
</template>
<script setup>
    import { Application } from '@splinetool/runtime';
    import { ref , onMounted } from 'vue'
    const canvas = ref(null)
    onMounted(()=>{
        const app = new Application(canvas.value);
        app.load('https://prod.spline.design/AcbEQtObst6voXMZ/scene.splinecode?t=' + Math.random());
    })
</script>