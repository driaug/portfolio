export const BIO =
  "Dries Augustyns is a Belgian entrepreneur and software engineer, founder of Plunk, the open-source email platform, and Swyp, automated procurement for European dentists.";

// TODO: Add Swyp foundingDate, and add Wikidata and Product Hunt profile URLs to the Person's sameAs once available.
export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.driaug.com/#person",
      name: "Dries Augustyns",
      alternateName: "driaug",
      url: "https://www.driaug.com",
      image: "https://www.driaug.com/assets/headshot.jpg",
      jobTitle: "Founder",
      description: BIO,
      nationality: { "@type": "Country", name: "Belgium" },
      email: "i@driaug.com",
      knowsAbout: [
        "Email infrastructure",
        "SaaS",
        "Open source software",
        "Procurement",
      ],
      founder: [
        { "@id": "https://www.useplunk.com/#organization" },
        { "@id": "https://www.swyp.be/#organization" },
      ],
      sameAs: [
        "https://www.linkedin.com/in/driaug/",
        "https://x.com/driaug_",
        "https://github.com/driaug",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.useplunk.com/#organization",
      name: "Plunk",
      url: "https://www.useplunk.com",
      foundingDate: "2022-08",
      founder: { "@id": "https://www.driaug.com/#person" },
      sameAs: ["https://github.com/useplunk/plunk"],
    },
    {
      "@type": "Organization",
      "@id": "https://www.swyp.be/#organization",
      name: "Swyp",
      url: "https://www.swyp.be",
      founder: { "@id": "https://www.driaug.com/#person" },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.driaug.com/#website",
      url: "https://www.driaug.com",
      name: "Dries Augustyns",
      about: { "@id": "https://www.driaug.com/#person" },
    },
  ],
};
