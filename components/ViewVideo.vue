<template>
    <div class="video-overlay" @click="closeVideo">
      <div class="video-container" @click.stop>
        <iframe
          width="560"
          height="315"
          :src="'https://www.youtube.com/embed/3uI2KWRZBXM?si=KA4vUgaPrXkrnARk'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      closeVideo(event) {
        if (event.target.classList.contains('video-overlay')) {
          this.$emit('close');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .video-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    width: 70%; 
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .video-container {
        width: 100%;
        transform: translateY(-100%);
    }
  }
  </style>