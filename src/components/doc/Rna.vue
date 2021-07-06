<template>
  <div>
    <documentation-rna-intro />
    <documentation-rna-endpoint />
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
import DocumentationRnaIntro from "@/components/doc/rna/Intro";
import DocumentationRnaEndpoint from "@/components/doc/rna/Endpoint";

export default {
  name: "DocumentationRnaEndpoint",

  metaInfo: {
    title: "Documentation API RNA"
  },

  components: {
    "documentation-rna-intro": DocumentationRnaIntro,
    "documentation-rna-endpoint": DocumentationRnaEndpoint,
  }
};
</script>

<style lang="scss" scoped>
</style>
