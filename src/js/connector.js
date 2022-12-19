console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-detail-badges": (t, ops) => {
        return t
            .get("all")
            .then((card) => {
                console.log(card);
                return [];
            })
            .catch((err) => {
                console.log(err);
            });
    },
});
