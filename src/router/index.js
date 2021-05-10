import VueRouter from "vue-router";
import Vue from "vue";

import store from "@/store";

import Homepage from "@/components/pages/Home";
import NotFound from "@/components/NotFound";
import LegalNotes from "@/components/pages/LegalNotes";
import Cgu from "@/components/pages/Cgu";
import CodesNaf from "@/components/doc/sirene/CodesNaf";
import DocumentationHome from "@/components/doc/Home";
import DocumentationSirene from "@/components/doc/Sirene";
import DocumentationRna from "@/components/doc/Rna";
import SearchResults from "@/components/pages/SearchResults";
import SireneEtablissement from "@/components/pages/Sirene";
import RNAEtablissement from "@/components/pages/Rna";
import Rncs from "@/components/pages/Rncs";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage
    },
    {
      path: "/search",
      name: "search-results",
      component: SearchResults,
      props: route => ({
        fullText: route.query.fullText,
        page: parseInt(route.query.page)
      })
    },
    {
      path: "/sirene/:sirenOrSiret",
      name: "sirene-etablissement",
      props: true,
      component: SireneEtablissement
    },
    {
      path: "/rna/:assoId",
      name: "rna-etablissement",
      props: true,
      component: RNAEtablissement
    },
    {
      path: "/rncs/:siren",
      name: "rncs",
      props: true,
      component: Rncs
    },
    {
      path: "/api_doc",
      name: "api-doc",
      component: DocumentationHome
    },
    {
      path: "/api_doc/sirene",
      name: "api-doc-sirene",
      component: DocumentationSirene
    },
    {
      path: "/api_doc/rna",
      name: "api-doc-rna",
      component: DocumentationRna
    },
    {
      path: "/api_doc/rncs",
      name: "api-doc-rncs",
      beforeEnter: () => {
        // redirect
        window.location.replace("https://api.gouv.fr/les-api/api-rncs");
      }
    },
    {
      path: "/api-doc/codes_naf",
      name: "codes-naf",
      component: CodesNaf
    },
    {
      path: "/mentions_legales",
      name: "legal-notes",
      component: LegalNotes
    },
    {
      path: "/cgu",
      name: "cgu",
      component: Cgu
    },

    // Redirect to old routes
    {
      path: "/etablissement/:etaId",
      redirect: to => {
        // Since the legacy route is the same for SIRENE and RNA data look for the
        // resource id format and redirect to the valid SIRENE or RNA accordingly
        const param = to.params.etaId;
        if (param.match(/^\d+$/)) {
          return {
            name: "sirene-etablissement",
            params: { sirenOrSiret: param }
          };
        } else {
          return { name: "rna-etablissement", params: { assoId: param } };
        }
      }
    },

    {
      path: "*",
      name: "not-found",
      component: NotFound
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// Reset the boolean to avoid a persistent NotFound component
// Ex without this hook:
//  1. SIRENE API returns a 404
//  2. The vue app displays the NotFound component
//  3. User clicks on the top left logo (he wants to go to the homepage)
//  4. No homepage, still the NotFound component (no API call so the boolean
//  isn't reset to true)
router.beforeEach((to, from, next) => {
  store.commit("setApiDataAvailability", true);
  next();
});

export default router;
