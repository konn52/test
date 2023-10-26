<template>
  <div>
    <div class="container mt-5 px-5">
      <h1>LANGUAGES & Library</h1>
      <div class="row mt-4">
        <!-- HTML & CSS -->
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="html"></div>
          <div class="card-body">
            <h4 class="card-title">C++</h4>
            <p style="color: gray">経験年数: 2年</p>
          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="css"></div>
          <div class="card-body">
            <h4 class="card-title">DirectX</h4>
            <p style="color: gray">経験年数: 2年</p>
          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

      </div>
    </div>
  </div>
</template>

<script></script>

<style>
h4 {
  font-size: 30px;
}

.html {
  background-color: rgb(227, 77, 37);
  height: 50px;
}

.css {
  background-color: rgb(91, 67, 128);
  height: 50px;
}

.ruby {
  background-color: rgb(193, 39, 45);
  height: 50px;
}

.php {
  background-color: rgb(136, 146, 191);
  height: 50px;
}

.python {
  background-color: rgb(52, 115, 165);
  height: 50px;
}

.js {
  background-color: rgb(241, 223, 90);
  height: 50px;
}

@media screen and (max-width: 800px) {
  .sp-block {
    display: none;
  }
}
</style>
