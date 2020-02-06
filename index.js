const Koa = require("koa");
const app = new Koa();
const httpPort = 23435;
// add a date method to the context
app.context.studentNams = ["Maung Maung", "Aung Aung", "Aye Aye"];
app.context.date = new Date().getFullYear();
app.context.useraData = {
    'first' : 'Myat',
    'last'  : 'Ko Ko',
    'programming' : 'HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, MYSQL, Laravel, Node.js, Express.js, Kos.js',
    'region' : 'Yangon',
    'township' : 'Tarmwe'
}
// Response
app.use(ctx => {
    ctx.state.user = "Hello, How are you feeling today " ;
    // Request object usage
    let from = ctx.request.method;
    console.log(from);
    console.log(ctx.userData);
    if(ctx.userData) { // Is user data true
        return ctx.response.body = ctx.userData;
    } else {
        return ctx.throw(400, ' data required');
    }
    // Print out name with date
   // ctx.body = ctx.state.user + " " + ctx.studentNams[0] + " " + ctx.date;
});
app.listen(httpPort);
console.log("Server Running follower ip: " + httpPort);
console.log(app.subdomainOffset);

// CTX Object Examples
// * ctx.state   state similar to React
// * ctx.cookies manage cookies
// * ctx.throw  error handling
// * ctx.body print to the browser