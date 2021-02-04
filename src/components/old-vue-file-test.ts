import { Options, Vue } from "vue-class-component";

@Options({})
export class OldVueFileTest extends Vue {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public mounted() {
    console.log("It is mounted");
  }
}
