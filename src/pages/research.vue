<template>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Familienname*" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Vorname*" outlined></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
</template>

<script>
export default {
  props: {
  },
  data: () => ({})
};
</script>
