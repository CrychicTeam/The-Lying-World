// priority: -1
// const { CraftingTableCobblefordays } = require("../recipes/cobblefordays/craftingTable")
// const { removeCobblefordays } = require("../recipes/cobblefordays/remove")
// const { CraftingTableQuark } = require("../recipes/quark/craftingTable")

ServerEvents.recipes(event => {
    removeCobblefordays(event)
    CraftingTableQuark(event)
    CraftingTableCobblefordays(event)
})