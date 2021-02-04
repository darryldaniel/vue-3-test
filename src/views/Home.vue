<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <label>
      <input type="text" v-model="input" />
    </label>
    <p>Input: {{ input }}</p>
    <p>Output has changed: {{ inputChanged }} times.</p>
    <p>Counter: {{ counter }}s</p>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
