import date from "lume/plugins/date.ts";
import { gl } from "npm:date-fns/locale/gl";
import jsx from "lume/plugins/jsx.ts";
import lume from "lume/mod.ts";
import mdx from "lume/plugins/mdx.ts";

const site = lume();

site.copy("/styles.css");

site.use(date({
    locales: { gl, },
    formats: { "HORA": "h:mm BBB" }
}));
site.use(jsx());
site.use(mdx());

export default site;
