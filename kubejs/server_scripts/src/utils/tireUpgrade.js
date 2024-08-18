// priority: 999
/**
 * 
 * @param {String[]} shape 
 * @param {$RecipesEventJS_} event 
 */
function TireUpgrade(event,shape) {
    /**
     * @type {Map<number, string[]>}
     */
    this.upgrade = new Map()
    this.shape = shape
    this.event = event
    this.itemMap = {}
    this.replaceMap = new Map()
}

TireUpgrade.prototype = {
    /**
     * @description 设置升级物品的层级，升级材料，升级后的物品
     * @param {int} level 
     * @param {String[][]} tire 
     * @param {$ItemStack_} item 
     * @returns 
     */
    addUpgrade: function(level, tire, item) {
        this.upgrade.set(level, [tire, item])
        return this
    },
    /**
     * @description 设置最基础的物品，层级为0
     * @param {$ItemStack_} item 
     * @returns 
     */
    setBaseItem: function(item) {
        this.upgrade.set(0, ["", item])
        return this
    },
    /**
     * 
     * @param {String} T 
     * @param {$ItemStack_} item 
     * @returns 
     */
    addItemMap: function(T, item) {
        this.itemMap[T] = item
        return this
    },
    /**
     * 
     * @param {String[][]} map 
     */
    addItemMaps: function(map) {
        map.forEach(entries => {
            this.addItemMap(entries[0], entries[1])
        })
        return this
    },
    addReplaceMap: function(origin, replaced) {
        this.replaceMap.set(origin, replaced)
        return this
    },
    /**
     * 
     * @param {String[][]} array 
     */
    addReplaceMaps: function(array) {
        array.forEach(element => {
            this.addReplaceMap(element[0], element[1])
        });
        return this
    },
    build: function() {
        this.upgrade.forEach((value, key)=>{
            if(key != 0){
                let recipe = this.event.recipes.kubejs.shaped(value[1], this.shape, 
                    Object.assign({}, this.itemMap, fromEntries(value[0]), {"#": this.upgrade.get(key-=1)[1]}))
                if (this.replaceMap.size > 0) {
                    this.replaceMap.forEach((replaced, origin) => {
                        recipe.replaceIngredient(origin, replaced)
                    })
                }
            }
        })
    }
}

function fromEntries(array) {
    var obj = {};
    array.forEach(function(entry) {
        obj[entry[0]] = entry[1];
    });
    return obj;
}
