var baseUrl;
process.env.NODE_ENV==="development"?baseUrl="http://localhost:8888":"https://usama-bootcamp-virtual-lolly.netlify.app"

module.exports = {
  /* Your site config here */
  
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Lolly",
        fieldName: "lollies",
        url: `${baseUrl}/.netlify/functions/virtual_lolly`,
      },
    },
  ],
}