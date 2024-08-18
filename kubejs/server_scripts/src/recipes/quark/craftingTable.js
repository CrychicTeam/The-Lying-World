/**
 * 
 * @param {$RecipesEventJS_} event 
 */
function CraftingTableQuark (event) {
    const {kubejs} = event.recipes

    kubejs.shaped("8x quark:pipe", [
        "ABA"
    ], {
        A: "embers:copper_plate",
        B: "#forge:glass"
    })
}