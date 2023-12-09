<template>
    <header>
        <nav>
        <router-link to="/">Kodu</router-link> |
        <router-link to="/lisa">Lae üles</router-link>
      </nav>
      <router-view/>
    </header>
    </template>
    
    <script>
    export default {
      name: 'HeaderComp'
    }
    </script>