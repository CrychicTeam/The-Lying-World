import { TireUpgrade } from "../../utils/tireUpgrade"

/**
 * 
 * @param {$RecipesEventJS_} event 
 */
export function CraftingTableCobblefordays (event) {
    const {kubejs} = event.recipes
    
    kubejs.shaped("cobblefordays:tier_1", [
        "ABA",
        "CDE",
        "AFA"
    ],{
        "A": "#minecraft:logs",
        "B": "embers:excavation_buckets",
        "C": "minecraft:water_bucket",
        "D": "#forge:glass",
        "E": "minecraft:lava_bucket",
        "F": "embers:ember_bore"
    }).replaceIngredient("minecraft:lava_bucket", "minecraft:bucket")
    .replaceIngredient("minecraft:water_bucket", "minecraft:bucket")

    new TireUpgrade(event, ["ABA","C#D","ABA"])
        .setBaseItem("cobblefordays:tier_1")
        .addUpgrade(1, [["A", "#forge:cobblestone"], ["B", "#forge:storage_blocks/copper"]], "cobblefordays:tier_2")
        .addUpgrade(2, [["A", "#forge:storage_blocks/iron"], ["B", "#forge:storage_blocks/silver"]], "cobblefordays:tier_3")
        .addUpgrade(3, [["A", "#forge:storage_blocks/gold"], ["B", "#forge:storage_blocks/dawnstone"]], "cobblefordays:tier_4")
        .addUpgrade(4, [["A", "#forge:storage_blocks/diamond"], ["B", "#forge:storage_blocks/netherite"]], "cobblefordays:tier_5")
        .addItemMaps([["C", "minecraft:water_bucket"], ["D", "minecraft:lava_bucket"]])
        .addReplaceMap("minecraft:lava_bucket", "minecraft:bucket")
        .addReplaceMap("minecraft:water_bucket", "minecraft:bucket")
        .build()
}