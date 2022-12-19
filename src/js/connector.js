console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-badges": (t, ops) => {
        console.log(ops);
        console.log("------------------------------------------------");
        console.log(t);
        console.log("================================================");
        t.getAll().then((card) => {
            console.log(card);
        });
        return [];
    },
});
