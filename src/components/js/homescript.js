import ScrollReveal from 'scrollreveal'
import FooterWorld from '../FooterWorld.vue';


export default {
  
  data() {
    return {
      
    }
  },
  components: {
    FooterWorld
  },
  computed: {
    
  },
  methods: {
    
  },
  
  mounted() {
    const sr = ScrollReveal({
      duration: 4000, // duração da animação em milissegundos
      distance: '10rem', // distância de deslocamento
    });

    // Configure as animações para os elementos desejados

    // Primeiro parallax
    sr.reveal('.area-1', { origin: 'top', scale: 0.90 });
    sr.reveal('.texto-1', { origin: 'top', scale: 0.90 });
    sr.reveal('.totao', { origin: 'right', scale: 0.90 });

    // primeiro texto
    sr.reveal('.image-about', { duration: '1000', origin: 'left', scale: 0.30 });
    sr.reveal('.texto-2', { duration: '4000', origin: 'right', scale: 1, distance: '10rem' });

    // Segundo parallax
    sr.reveal('.texto-2', { origin: 'left', scale: 1 });
    sr.reveal('.texto-3', { origin: 'right', scale: 1 });

    // Segundo texto
    sr.reveal('.cards-1', { duration: '2000', origin: 'top', scale: 0.10 });
    sr.reveal('.cards-2', { duration: '4000', origin: 'top', scale: 0.30 });
    sr.reveal('.cards-3', { duration: '6000', origin: 'top', scale: 0.50 });
    sr.reveal('.cards-4', { duration: '8000', origin: 'top', scale: 0.70 });

  }
}



