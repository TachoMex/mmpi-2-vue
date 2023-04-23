<script>
import * as VueChartJs from "vue-chartjs"

export default {
  extends: VueChartJs.Line,
  name: 'LineChart',
  components: { Line: VueChartJs.Line },
  mixins: [VueChartJs.mixins.reactiveProp],
  props: ["options"],
  mounted: function () {
    this.renderChart(this.chartData, this.options);
  }
}
</script>
