exports.onCreatePage=async({page,actions})=>{
    if(page.path.match(/^\/virtuallolly/)){
        page.matchPath="/virtuallolly/*"
        actions.createPage(page)
    }
}