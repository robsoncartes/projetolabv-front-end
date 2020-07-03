<template>
  <b-container>
    <div class="bloco_conteudo">
      <div>
        <h1 class="text-white animated fadeInDown">
          Bem vindo ao
          <span class="text-color2">Fatec QuiZ</span>
        </h1>
        <p
          class="text-muted animated fadeInUp"
        >Projeto de LAB V - Parte 1: Desenvolvimento do Back-end com Java, Spring Boot, Sprint Security e JWT.</p>
        <p class="text-muted animated fadeInUp">
          Disciplina: Laboratório de Desenvolvimento de Banco de Dados V
          <br />Professor: Emanuel Mineda Carneiro
        </p>
        <p class="text-muted animated fadeInUp">
          Membros do Grupo:
          <br />
          <a href="https://github.com/robsoncartes">Robson Sousa - robsoncartes@outlook.com</a>,
          <a href="https://github.com/rodolfo-santos">Rodolfo Santos - Rodolfodossantos29@gmail.com</a>
        </p>
        <p class="text-muted animated fadeInUp">FATEC SJC - Professor Jessen Vidal</p>
      </div>

      <img src="@/assets/img/fundo02.svg" alt class="img-fundo animated fadeIn delay-1s" />
    </div>
    <div class="d-flex justify-content-center start">
      <b-button
        to="/login"
        class="btn-color2 animated fadeInDown delay-05s btn-secondary"
      >Clique para Começar</b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mensagem: "Olá Mundo"
    };
  }
};
</script>

<style lang="scss">
.start {
  margin-top: -50px;

  .btn {
    padding: 20px;
  }
}
</style>

  