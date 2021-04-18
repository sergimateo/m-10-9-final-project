<template>
  <div>
    <v-row justify="space-around" class="pb-4"
      ><h1>{{ headername }} Section</h1></v-row
    >
    <div class="text-center pb-8">
      <v-btn @click="$router.go(-1)" class="secondary" rounded small>
        Back
        <v-icon small class="pl-2"
          >mdi-arrow-left-thin-circle-outline</v-icon
        ></v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  props: ["headername"],
  methods: {},
};
</script>
