import heroImage from "@/assets/12345.jpg";
import aboutImage from "@/assets/nekoneko.jpg";
import productionImage from "@/assets/onair.jpg";
import designImage from "@/assets/Design.jpg";

export const siteContent = {
  siteName: "Lab",
  navigation: [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Topics", target: "topics" },
    { label: "Contact", target: "contact" },
  ],
  hero: {
    id: "home",
    backgroundImage: heroImage,
    title: "Web制作を、わかりやすく実装する",
    lead: "LabはWeb制作・デザイン・実装の知見を整理して発信するメディアです。",
    primaryAction: "Aboutを見る",
    primaryTarget: "about",
  },
  about: {
    id: "about",
    label: "About",
    title: "Lab",
    image: aboutImage,
    imageAlt: "Labのプロフィール画像",
    description:
      "こちらはLabが運営するメディアです。Web制作の参考になる情報を、実装しやすい形でまとめています。",
  },
  topics: {
    id: "topics",
    label: "Topics",
    title: "できること",
    items: [
      {
        image: productionImage,
        imageAlt: "Web制作のイメージ",
        title: "Web制作",
        description:
          "法人・個人向けのWebサイト制作を想定し、構成設計から画面実装までを扱います。",
      },
      {
        image: designImage,
        imageAlt: "Webデザインのイメージ",
        title: "Webデザイン",
        description:
          "見た目だけでなく、読みやすさ・操作しやすさを重視したUI設計を行います。",
      },
    ],
  },
  contact: {
    id: "contact",
    label: "Contact",
    title: "制作相談・お問い合わせ",
    description:
      "Web制作やデザイン相談があれば、ボタンをクリックするとGoogleフォームが開きます。要件・目的・希望納期を送信してください。",
    formUrl: "https://docs.google.com/forms/d/1IzHr0LJN7UERNupOW5KeWtD7Ch5lBxMZ5Bv0Z2Hmcfk/viewform",
    buttonLabel: "フォームを開く",
    note: "別タブでGoogleフォームを開きます。",
  },
  footer: {
    copyright: "© 2026 Lab",
  },
};


