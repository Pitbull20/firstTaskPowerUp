console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-badges": (t, ops) => {
        return t
            .card("name")
            .get("name")
            .then((card) => {
                console.log(card);
                return [
                    {
                        text: "Test!!",
                    },
                ];
            })
            .catch((err) => {
                console.log(err);
            });
    },
});
