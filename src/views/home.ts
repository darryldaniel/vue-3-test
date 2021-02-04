import { Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import { Prop, Watch } from "vue-decorator";
import { emitter } from "@/services/timer.service";
import { Component } from "@/decorators/component"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @Prop()
  public input = "test";

  public inputChanged = 0;

  public counter: number | undefined = 0;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public mounted() {
    emitter.on<number>("tick", this.updateTickValue.bind(this));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Watch("input")
  public onPropChange() {
    this.inputChanged++;
  }

  private updateTickValue(counter: number | undefined): void {
    this.counter = counter;
  }
}
