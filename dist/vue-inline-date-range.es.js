import moment from 'moment';
import 'v2-datepicker/lib/index.css';
import V2Datepicker from 'v2-datepicker/lib/date-picker';

var vueInlineDateRange = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('span', {
      staticClass: "date-range"
    }, [_c('span', [_c('i', {
      staticClass: "fas fa-caret-left",
      on: {
        "click": _vm.goLeft
      }
    })]), _vm._v(" "), _c('v2-datepicker', {
      attrs: {
        "lang": "en"
      },
      on: {
        "change": _vm.change
      },
      model: {
        value: _vm.start,
        callback: function callback($$v) {
          _vm.start = $$v;
        },
        expression: "start"
      }
    }), _vm._v(" - "), _c('v2-datepicker', {
      attrs: {
        "lang": "en"
      },
      on: {
        "change": _vm.change
      },
      model: {
        value: _vm.end,
        callback: function callback($$v) {
          _vm.end = $$v;
        },
        expression: "end"
      }
    }), _vm._v(" "), _c('span', [_c('i', {
      staticClass: "fas fa-caret-right",
      on: {
        "click": _vm.goRight
      }
    })])], 1);
  },
  staticRenderFns: [],
  data: function data() {
    return {
      start: moment().subtract(30, 'days'),
      end: moment()
    };
  },
  components: {
    'v2-datepicker': V2Datepicker
  },
  methods: {
    goLeft: function goLeft() {
      this.start = moment(this.start).subtract(7, 'days');
      this.end = moment(this.end).subtract(7, 'days');
      this.change();
    },
    goRight: function goRight() {
      this.start = moment(this.start).add(7, 'days');
      this.end = moment(this.end).add(7, 'days');
      this.change();
    },
    change: function change() {
      this.$emit('change', [this.start, this.end]);
    }
  }
};

export default vueInlineDateRange;
