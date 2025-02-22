// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Pages")
    .items([
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("homepage")),
      S.listItem()
        .title("About Page")
        .child(S.document().schemaType("aboutpage")),
      S.listItem()
        .title("Product Page")
        .child(S.document().schemaType("productpage")),
    ]);
