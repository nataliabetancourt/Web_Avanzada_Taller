<script>
import { mapStores } from "pinia";
import { useAuthenticationStore } from "../stores/authentication";
import { useFirestoreStore } from "../stores/firestore";

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      lastname: "",
      emailCreated: "",
      passwordCreated: "",
      passwordConfirmation: "",
      isSignIn: true,
      isSignUp: false,
    };
  },

  methods: {
    signIn(e) {
      e.preventDefault();
      this.authenticationStore.signIn(this.email, this.password);

      this.email = "";
      this.password = "";
    },

    async signUp(e) {
      e.preventDefault();
      //Create user object
      const userInfo = {
        'name': this.name,
        'lastname': this.lastname,
        'email': this.emailCreated
      };

      //Add to authentication
      if (this.passwordCreated == this.passwordConfirmation) {
        this.authenticationStore.signUp(this.emailCreated, this.passwordCreated);
        console.log(this.authenticationStore.auth.currentUser.uid);
      }

      //Add additional info to firestore
      await this.firestoreStore.addUserDatabase(this.authenticationStore.auth.currentUser.uid, userInfo);

      this.name = "";
      this.lastname = "";
      this.emailCreated = "";
      this.passwordCreated = "";
      this.passwordConfirmation = "";

    },

    makeChange(e) {
      e.preventDefault();
        this.isSignIn = !this.isSignIn;
        this.isSignUp = !this.isSignUp;
    },

    logOut(e) {
        e.preventDefault();
        this.authenticationStore.logOut();
        this.$router.go()
    }
  },

  computed: {
    ...mapStores(useAuthenticationStore, useFirestoreStore),
    userIsLogged(){
        return this.authenticationStore.getUser() !== null
    }
  },

  mounted() {
    console.log(this.authenticationStore.getUser());
  }
};
</script>

<template>
    <section class="signin" :class="{'signin--hide': isSignUp }" v-if="!userIsLogged">
        <h1 class="title">Sign in</h1>
        <form action="">
            <label for="email" class="label">EMAIL</label>
            <input type="email" name="email" id="email" v-model="email" class="input">
            <label for="password" class="label">PASSWORD</label>
            <input type="password" name="password" id="password" v-model="password" class="input">
            <button @click="signIn" class="submit">SIGN IN</button>
            <button class="link" @click="makeChange">Don't have an account? Sign up here</button>
        </form>
    </section>

    <section class="signup" :class="{'signup--hide': isSignIn }" v-if="!userIsLogged">
        <h1 class="title">Sign up</h1>
        <form action="">
            <label for="name" class="label">NAME</label>
            <input type="text" name="name" id="name" v-model="name" class="input">
            <label for="lastname" class="label">LAST NAME</label>
            <input type="text" name="lastname" id="lastname" v-model="lastname" class="input">
            <label for="email2" class="label">EMAIL</label>
            <input type="email" name="email2" id="email2" v-model="emailCreated" class="input">
            <label for="password2" class="label">PASSWORD</label>
            <input type="password" name="password2" id="password2" v-model="passwordCreated" class="input">
            <label for="confirmPassword" class="label">CONFIRM PASSWORD</label>
            <input type="password" name="confirmPassword" id="confirmPassword" v-model="passwordConfirmation" class="input">
            <button @click="signUp" class="submit">Create account</button>
            <button class="link">Already have an account? Sign in here</button>

        </form>
    </section>

    <section v-if="userIsLogged">
        <h1 class="title">Ready to leave?</h1>
        <button class="submit" @click="logOut">LOG OUT</button>
    </section>
</template>


<style scoped lang="scss">
$background: #fdfaf3;
$fontColor: #391b00;
$mainColor: #6739cb;

section {
  margin: 120px 0 0 45px;
  font-family: "Outfit", sans-serif;
  font-weight: 600;
}

.signup {
    &--hide {
        display: none;
    }
}

.signin {
    &--hide {
        display: none;
    }
}
.title {
  font-size: 1.6em;
  margin-bottom: 35px;
  color: $fontColor;
}

.label {
  font-weight: 500;
  font-size: 1em;
}

.input {
  font-family: "Outfit", sans-serif;
  display: block;
  font-size: 1em;
  border: solid 2px $fontColor;
  padding: 5px;
  width: 50%;
  height: 25px;
  margin-top: 5px;
  margin-bottom: 18px;
}

.submit {
  font-family: "Outfit", sans-serif;
  font-size: 1em;
  color: $fontColor;
  background-color: transparent;
  border: 2px solid $fontColor;
  padding: 10px 40px;
  width: 35%;
  margin-top: 20px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    border: 2px solid $fontColor;
    background-color: $mainColor;
    font-weight: normal;
    color: $background;
  }
}

.link {
  display: block;
  font-family: "Outfit", sans-serif;
  font-size: 1em;
  color: $mainColor;
  background: none;
  border: none;
  margin: 20px 0;

  &:hover {
    cursor: pointer;
  }
}
</style>>