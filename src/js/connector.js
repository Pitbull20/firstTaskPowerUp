console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-badges": (t, ops) => {
        return t
            .card("name")
            .get("name")
            .then((card) => {
                console.log(card);
                return [];
            })
            .catch((err) => {
                console.log(err);
            });
    },
});
