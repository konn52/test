<template>
  <nav class="navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- pc -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/">HelloWorld</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/IntroDuction">
              Introduction
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/Uselanguage">
              Used Languages
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/InTern">
              Intern Experience
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/JikoSyokai">
              Portfolio
            </router-link>
          </li>
        </ul>
      </div>
      <!-- sp -->
      <ul class="sp px-5">
        <li>
          <router-link class="ancar text-white" to="/">HelloWorld</router-link>
        </li>
        <li>
          <router-link class="ancar text-white" to="/IntroDuction">
            Introduction
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-white" to="/Uselanguage">
            Used Languages & Library
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-white" to="/InTern">
            Intern Experience
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-white" to="/JikoSyokai">
            Portfolio
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
nav {
  height: 56px;
}
.nav-link:hover {
  background-color: rgba(65, 184, 131, 0.5);
  transition: 0.5s;
}
.sp {
  display: none;
}
@media screen and (max-width: 800px) {
  .collapse {
    display: none;
  }
  .sp {
    display: block;
  }
  nav {
    height: 80px;
  }
  ul {
    overflow: hidden;
  }
  ul li {
    float: left;
    list-style: none;
  }
  .ancar {
    display: block;
    padding: 4px 4px;
  }
}
</style>
