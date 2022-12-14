console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-badges": (t, ops) => {
        return t
            .card("all")
            .then((card) => {
                console.log(card);
                return [];
            })
            .catch((err) => {
                console.log(err);
            });
    },
});
