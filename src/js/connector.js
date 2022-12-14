console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-badges": (t, ops) => {
        console.log(t);
        return [];
    },
});
