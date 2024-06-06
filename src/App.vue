<template>
  <div class="container-geral-header">
    <div class="logo-pizza">
      <img class="pizza" src="./assets/img/Logo-Caique-O-Castro-2.png" alt="Logo" />
    </div>
    <a class="btn-orçamento" href=""><button  class="btn-orçamento">Solicite um Orçamento</button></a>
    
  </div>

  <router-view/>
</template>

<script>

</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container-geral-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  gap: 50px;
  width: 100%;
  height: 80px;
  background-color: black;
}

.logo-pizza {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pizza {
  width: 100px;
  height: 100px;
}
.btn-orçamento{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  border-radius: 50px;
  background-image: linear-gradient(140deg, #ff0000 0%, #5b1325 100%);
  outline: none;
  color: #ffff;
  font-size: 20px;
  transition: all .6s;
  border: none;
}
.btn-orçamento:hover{
  background-image: linear-gradient(140deg, #ff0000 0%, #5b1325e3 100%);
  text-decoration: none;
}
</style>