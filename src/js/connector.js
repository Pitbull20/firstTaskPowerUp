console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-badges": (t, ops) => {
        t.card("name")
            .get("name")
            .then((cardName) => {
                console.log(cardName);
            })
            .catch((err) => {
                console.log(err);
            });
        return [];
    },
});
