<script setup>
import AboutSection from "./components/AboutSection.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import ContactSection from "./components/ContactSection.vue";
import HeroSection from "./components/HeroSection.vue";
import TopicCards from "./components/TopicCards.vue";
import { useSectionNavigation } from "./composables/useSectionNavigation";
import { siteContent } from "./data/siteContent";

const sectionIds = siteContent.navigation.map((link) => link.target);
const { activeSectionId, navigateTo } = useSectionNavigation(sectionIds);
</script>

<template>
  <AppHeader
    :site-name="siteContent.siteName"
    :links="siteContent.navigation"
    :active-section-id="activeSectionId"
    @navigate="navigateTo"
  />

  <main>
    <HeroSection :hero="siteContent.hero" @navigate="navigateTo" />
    <AboutSection :about="siteContent.about" />
    <TopicCards :topics="siteContent.topics" />
    <ContactSection :contact="siteContent.contact" />
  </main>

  <AppFooter :copyright="siteContent.footer.copyright" @back-to-top="navigateTo('home')" />
</template>
