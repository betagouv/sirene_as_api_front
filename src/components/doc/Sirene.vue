<template>
  <div>
      <documentation-sirene-intro />
      <documentation-sirene-endpoint-v3 />
      <documentation-sirene-endpoint-v2 />
      <documentation-sirene-search />
      <documentation-sirene-geo-search />
      <documentation-sirene-use-case />

      <br/>
      <form class="text-center">
        <h4>Envie de garder contact ? Inscrivez-vous à notre mailing-List</h4>
        <p>
          Vos données sont traitées par Mailjet.<br />
          Vos informations ne seront jamais utilisées à des fins commerciales.
        </p>
        <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://app.mailjet.com/widget/iframe/zR1/ack"
          width="340"
          height="95"
        ></iframe>
      </form>
  </div>
</template>

<script>
import DocumentationSireneIntro from "@/components/doc/sirene/Intro.vue";
import DocumentationSireneEndpointV3 from "@/components/doc/sirene/EndpointV3.vue";
import DocumentationSireneEndpointV2 from "@/components/doc/sirene/EndpointV2.vue";
import DocumentationSireneSearch from "@/components/doc/sirene/Search.vue";
import DocumentationSireneGeoSearch from "@/components/doc/sirene/GeoSearch.vue";
import DocumentationSireneUseCase from "@/components/doc/sirene/UseCase.vue";

export default {
  name: "DocumentationSirene",

  metaInfo: {
    title: "Documentation API Sirene Données Ouvertes"
  },

  components : {
    "documentation-sirene-intro": DocumentationSireneIntro,
    "documentation-sirene-search": DocumentationSireneSearch,
    "documentation-sirene-geo-search": DocumentationSireneGeoSearch,
    "documentation-sirene-use-case": DocumentationSireneUseCase,
    "documentation-sirene-endpoint-v3": DocumentationSireneEndpointV3,
    "documentation-sirene-endpoint-v2": DocumentationSireneEndpointV2
  }
};
</script>

<style lang="scss" scoped>
</style>
