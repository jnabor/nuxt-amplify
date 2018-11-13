<template>
  <v-container fluid grid-list-md class="pa-1 ma-1">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <transition name="slide-fade">
          <v-card
            v-if="show0"
            hover
            color="purple lighten-2" dark @click="onNavigate('/')">
            <v-card-title primary class="title">
              <div>
                <v-btn
                  :to="'/auth/signup'"
                  outline
                  nuxt
                  class="mb-3"
                  color="purple lighten-5"
                  large
                >
                  Sign Up
                </v-btn>
              </div>
            </v-card-title>
            <v-card-text class="ml-3 subheading">SYSTEM DEMO</v-card-text>
          </v-card>
        </transition>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <transition name="slide-fade">
              <v-card
                v-if="show1"
                hover
                color="amber lighten-2"
                @click="onNavigate('/')"
              >
                <v-card-text>Events and Seminars</v-card-text>
              </v-card>
            </transition>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>

              <v-flex d-flex xs12 >
                <transition name="slide-fade">
                  <v-card
                    v-if="show2"
                    hover
                    color="red lighten-2"
                    dark
                    @click="onNavigate('/')"
                  >
                    <v-card-text>Registration and Attendance</v-card-text>
                  </v-card>
                </transition>
              </v-flex>

              <v-flex d-flex xs12 >
                <transition name="slide-fade">
                  <v-card
                    v-if="show3"
                    hover
                    color="light-green lighten-2"
                    @click="onNavigate('/')"
                  >
                    <v-card-text>Payments and Dues</v-card-text>
                  </v-card>
                </transition>
              </v-flex>

            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <transition name="slide-fade">
          <v-card
            v-if="show4"
            hover
            color="green"
            dark
            @click="onNavigate('/')"
          >
            <v-card-text>User Profiles and Groups</v-card-text>
          </v-card>
        </transition>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <transition name="slide-fade">
          <v-card
            v-if="show5"
            hover
            color="blue lighten-2"
            dark
            @click="onNavigate('/')"
          >
            <v-card-text>Polls and Surveys</v-card-text>
          </v-card>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show0: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false
  }),
  // lifecycle hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    setTimeout(() => {
      this.show0 = true
    }, 10)
    setTimeout(() => {
      this.show1 = true
    }, 60)
    setTimeout(() => {
      this.show2 = true
    }, 110)
    setTimeout(() => {
      this.show3 = true
    }, 160)
    setTimeout(() => {
      this.show4 = true
    }, 210)
    setTimeout(() => {
      this.show5 = true
    }, 260)
    setTimeout(() => {
      this.show6 = true
    }, 310)
  },
  beforeUpdate() {},
  updated() {},
  methods: {
    onNavigate() {
      console.log('navigating..')
    }
  }
}
</script>
<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
</style>
