<template>
  <div>
    <v-row justify="space-around" class="pb-4"
      ><h1>This is the {{ headernm }} page</h1></v-row
    >
    <div class="text-center pb-8">
      <v-btn rounded color="teal darken-2" small dark>
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
  props: ["headernm"],
};
</script>
