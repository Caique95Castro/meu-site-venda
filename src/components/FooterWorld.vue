<template>
  <div class="container-geral-footer">
    <div class="footer">
      <div class="linha-fundo">
        <h1 class="name-empresa">CAIQUE O CASTRO</h1>
        <h3 class="name-empresa-1"><strong>CAIQUE O CASTRO</strong></h3>

        <a
          class="links"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          >(11) 00000-0000</a
        >
        <a
          class="links"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          >email.email@teste.com</a
        >
      </div>
      <div class="icones-center">
        <div class="icones">
          <a href="#"
            ><ion-icon class="icons" name="logo-instagram"></ion-icon
          ></a>
        </div>
        <div class="icones">
          <a href="#"
            ><ion-icon class="icons" name="logo-linkedin"></ion-icon
          ></a>
        </div>
        <div class="icones">
          <a href="#"
            ><ion-icon class="icons" name="logo-whatsapp"></ion-icon
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-geral-footer{
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
  color: #fff;
}
@media screen and (max-width: 786px){
  .footer {
    padding: 20px 20px;
  }
}
.linha-fundo{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #ff0000;
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
  }
}
.footer h1 {
  font-weight: 900;
  color: #fff;
}
.footer a {
  text-decoration: none;
  color: #fff;
  margin-bottom: 10px;
  width: 11rem;
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