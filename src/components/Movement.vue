<script type="module">
import { createApp } from "vue";
import {myFunction} from "/src/script.js";

const app = createApp({
  data() {
    return {
      aboutSection: [{ image: "/src/assets/nekoneko.jpg", alt: "neko" }],
      aboutSectionTitle: "Lab",
      aboutSectionDescription:
        "こちらはLabが運営するメディアです。Web制作のために参考になればぜひ使ってください。",
      programmingTopics: [
        {
          image: "/src/assets/onair.jpg",
          alt: "on air",
          title: "Web制作",
          description:
            "法人・個人向けにWebサイトを制作することです。ホームページ制作やサイト制作とも呼ばれます。Web制作を行うことで、コンテンツの発信や、自社サービス・アプリとの連携などが可能になります。",
        },
        {
          image: "/src/assets/Design.jpg",
          alt: "web design",
          title: "Webデザイン",
          description:
            "ウェブサイトやウェブアプリケーションの外観やユーザーインターフェース（UI）を計画し、構築するプロセスやスキルのことを行います。",
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      let speed = 500;
      let type = "swing";
      let target = sectionId === "index" ? "html" : `#${sectionId}`;
      let position = document.querySelector(target).offsetTop;
      window.scrollTo({ top: position, behavior: type });
    },
    Scroll() {
      // Your Scroll method logic goes here
    },
  },
  mounted() {
    this.Scroll();
    window.addEventListener("scroll", this.Scroll);
  },
});

// Mount the app to the specified element
app.mount("#app");
myFunction();
</script>