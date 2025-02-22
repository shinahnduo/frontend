import { Meta, StoryObj } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import { createI18n } from "vue-i18n";
import { MotionPlugin } from "@vueuse/motion";
import AboutInfo from "../components/page/about/AboutInfo.vue";

// ✅ i18n 설정
const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      about: {
        entity: {
          title: "About Us",
          description: "This is a sample about section.",
          bw: "Black & White",
          canvas: "Canvas Section",
        },
      },
      editor: {
        project: {
          control: {
            title: "Editor Title {suffix}",
          },
        },
      },
    },
  },
});

// ✅ 스토리북의 `setup()`에서 글로벌 플러그인 등록
setup((app) => {
  app.use(i18n);
  app.use(MotionPlugin); // v-motion도 함께 등록
});


const meta: Meta<typeof AboutInfo> = {
  title: "Components/AboutInfo",
  component: AboutInfo,
};

export default meta;
type Story = StoryObj<typeof AboutInfo>;

// ✅ 기본 스토리
export const Default: Story = {
  render: () => ({
    components: { AboutInfo },
    setup() {
      return {
        t: i18n.global.t, // ✅ t 함수 제공
      };
    },
    template: `<AboutInfo />`,
  }),
};
