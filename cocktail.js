$(document).ready(function () {
    // Hover over cocktail card to display the recipe
    $(".cocktail-card").hover(
        function () {
            $(this).find(".recipe").show();
            $(this).find("h2").text("Recipe:");
        },
        function () {
            $(this).find(".recipe").hide();
            $(this).find("h2").text($(this).data("name"));
        }
    );

    // Click on cocktail card to display calories
    $(".cocktail-card").click(function () {
        let calories = $(this).data("calories");
        alert(`Calories: ${calories}`);
    });
});