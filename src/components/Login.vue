<template>
  <div class="login-background">
    <v-container bg fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="headline">Sign In</h3>
              </v-layout>
            </v-card-title>
            <v-divider />

            <v-card-text>
              <p>Sign in with your username and password</p>
              <v-form>
                <v-text-field
                  outlined
                  label="Username"
                  type="text"
                  v-model="usernmae"
                />
                <v-text-field
                  outlined
                  label="Password"
                  type="password"
                  v-model="password"
                />
              </v-form>
              <p v-if="failAuth" class="red--text">
                Incorrect username or password
              </p>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="info"
                :large="$vuetify.breakpoint.smAndUp"
                @click="handleLogin"
              >
                <v-icon left>mdi-lock</v-icon>
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    usernmae: "",
    password: "",
    auth: { usernmae: "admin", password: "Pa$$w0rd" },
    failAuth: false
  }),
  methods: {
    handleLogin() {
      if (
        this.usernmae === this.auth.usernmae &&
        this.password === this.auth.password
      ) {
        localStorage.setItem("isAuth", true);

        this.$emit("handleLogin", true);
        this.$router.push("/products");
      } else {
        this.failAuth = true;
      }
    }
  }
};
</script>

<style>
.login-background {
  background-image: url("../assets/bg-login.jpg");
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
