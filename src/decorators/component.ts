import { Options, Vue } from "vue-class-component";
import { ComponentOptions } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Component<V extends Vue>(
  options: ComponentOptions & ThisType<V>
) {
  return Options(options);
}
