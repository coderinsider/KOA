const Koa = require("koa");
const app = new Koa();
const ports = 5434;
// Add a date method to the context
app.context.userData = {
    'first' : 'Myat',
    'last'  : 'Ko Ko'
};


// Log
app.use(async (ctx, next) => {
    await next();
    const responseTime = ctx.response.get('X-Response-Time');
    console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const miliseconds = Date.now() - start;
    ctx.set('X-Response-Time', `${miliseconds} ms`);
});
// Response

app.use(async (ctx) => {
    ctx.response.body =  ctx.userData;
});
app.listen(ports);