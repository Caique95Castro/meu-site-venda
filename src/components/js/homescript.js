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
      reset: true,
    });

    // Configure as animações para os elementos desejados

    // Primeiro parallax
    sr.reveal('.content-inicio-text', { origin: 'left', scale: 0.90 });
    sr.reveal('.content-inicio-text-2', { origin: 'left', scale: 0.90 });
    sr.reveal('.content-inicio-text-1', { origin: 'right', scale: 0.90 });
    sr.reveal('.content-inicio-image', { origin: 'right', scale: 0.90 });
    

    // primeiro texto
    sr.reveal('.itens-conteudo', { duration: '2000', origin: 'top', scale: 0.10 });
    sr.reveal('.itens-conteudo-1', { duration: '4000', origin: 'top', scale: 0.30 });
    sr.reveal('.itens-conteudo-2', { duration: '6000', origin: 'top', scale: 0.50 });

    // Segundo texto
    sr.reveal('.box-meio-final-1', { duration: '2000', origin: 'bottom', scale: 0.10 });
    sr.reveal('.box-meio-final-2', { duration: '4000', origin: 'bottom', scale: 0.30 });
    sr.reveal('.box-meio-final-3', { duration: '6000', origin: 'bottom', scale: 0.50 });

  }
}



