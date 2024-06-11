<template>
  <div class="container-geral-footer">
    <div class="footer">
      <div class="linha-fundo">
        <h1 class="name-empresa">CAIQUE O CASTRO</h1>
        <h3 class="name-empresa-1"><strong>CAIQUE O CASTRO</strong></h3>

        <a
          class="links"
          href="https://wa.me/5511938001071"
          target="_blank"
          rel="noopener noreferrer"
          >(11) 93800-1071</a
        >
        <a
          class="links"
          href="mailto:caiqueocastro@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          >caiqueocastro@gmail.com</a
        >
      </div>
      <div class="icones-center">
        <div class="icones">
          <a
            href="https://www.instagram.com/caique_o_castro?igsh=MXU4eWJmZXF4MHB1Ng=="
            target="_blank"
            ><ion-icon class="icons" name="logo-instagram"></ion-icon
          ></a>
        </div>
        <div class="icones">
          <a
            href="www.linkedin.com/in/caique-oliveira-front-end"
            target="_blank"
            ><ion-icon class="icons" name="logo-linkedin"></ion-icon
          ></a>
        </div>
        <div class="icones">
          <a href="https://wa.me/5511938001071" target="_blank"
            ><ion-icon class="icons" name="logo-whatsapp"></ion-icon
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --gradient: linear-gradient(
      to right,
      #ff0000,
      #5b1325
  )
  
}
.container-geral-footer {
  width: 100%;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 20px 100px;
  background-color: black;
}
@media screen and (max-width: 786px) {
  .footer {
    padding: 20px 20px;
  }
}
.linha-fundo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #ff0000;
}
.name-empresa {
  font-weight: 600;
    font-size: 50px;
    background-image: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.name-empresa-1 {
  display: none;
}
@media screen and (max-width: 786px) {
  .footer {
    text-align: center;
    align-items: center;
  }
  .name-empresa {
    display: none;
  }
  .name-empresa-1 {
    display: flex;
    background-image: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}
.footer h1 {
  font-weight: 900;
}
.footer a {
  text-decoration: none;
  margin-bottom: 10px;
  width: 11rem;
}
.links{
  color: white;
}
.links:hover{
  color: red;
}
.icones-center {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.icones {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 35px;
  height: 35px;
  border: 1px solid #ff0000;
  border-radius: 99px;
}
.icones a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
.icones:hover {
  background-image: linear-gradient(140deg, #ff0000 0%, #5b1325 100%);
}
.icons {
  font-size: 25px;
  color: #ff0000;
  margin-top: 10px;
}
.icons:hover {
  color: white;
}
</style>