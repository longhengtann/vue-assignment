<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-group prepend-icon="mdi-view-dashboard" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Product</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-view-list-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/">Product List</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-plus-box</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/products/create">Create Product</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["drawer"],
  data: () => ({})
};
</script>
