console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-badges": (t, ops) => {
        console.log(ops);
        console.log("------------------------------------------------");
        console.log(t);
        return [];
    },
});
