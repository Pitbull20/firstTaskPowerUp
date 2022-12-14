console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-badges": (t, ops) => {
        t.card()
            .then((card) => {
                console.log(card);
            })
            .catch((err) => {
                console.log(err);
            });
        return [];
    },
});
