export default {
  retina_detect: true,
  fullscreen: { enable: true },
  particles: {
    number: {
      value: 33,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        opacity_max: 0.8,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 1.5,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: false,
      speed: 1,
      direction: 'none',
      random: true,
      straight: true,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  }
};
