<template>
  <span class="date-range">
    <span><i class="fas fa-caret-left" @click="goLeft"></i></span>
      <v2-datepicker v-model='start' lang="en" @change="change"></v2-datepicker> -
      <v2-datepicker v-model='end' lang="en" @change="change"></v2-datepicker>
    <span><i class="fas fa-caret-right" @click="goRight"></i></span>
  </span>
</template>

<script>
import moment from 'moment'
import 'v2-datepicker/lib/index.css'
import V2Datepicker from 'v2-datepicker/lib/date-picker'

export default {
  data () {
    return {
      start: moment().substract(30, 'days'),
      end: moment()
    }
  },
  components: {
    'v2-datepicker': V2Datepicker
  },
  methods: {
    goLeft () {
      this.start = moment(this.start).subtract(7, 'days')
      this.end = moment(this.end).subtract(7, 'days')
      this.change()
    },
    goRight () {
      this.start = moment(this.start).add(7, 'days')
      this.end = moment(this.end).add(7, 'days')
      this.change()
    },
    change () {
      this.$emit('change', [
        this.start,
        this.end
      ])
    }
  }
}
</script>

<style lang="scss">
.date-range {
  height: 40px;
  display: inline-flex;
  align-items:center;
  .v2-date-wrap {
    min-width:6rem !important;
    background:transparent;
  }
  .v2-date-wrap .v2-picker-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .fa-caret-left {
    cursor: pointer;
    font-size: 1rem;
  }
  .fa-caret-right {
    cursor: pointer;
    font-size: 1rem;
  }
  .v2-date-wrap {
    border: 0;
    min-width: 7rem;
    .v2-picker-panel-wrap {
      right: -100px;
    }
    height: 40px;
  }
  svg {
    display: none;
  }
}
</style>
