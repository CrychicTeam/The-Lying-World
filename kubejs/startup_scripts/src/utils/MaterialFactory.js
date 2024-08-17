export const defaultBlockPrototype = {
    hardness: 1.0,
    deepslate: true,
    resistance: 3.0,
    lightLevel: 0.0,
    noDrops: true,
    jumpFactor: 1.0,
    speedFactor: 1.0,
    slipperiness: 0.6,
    requiresTool: true,
}

export function MaterialFactory(event) {
    this.event = event;
    this.block = false;
    this.material = new Map();
    this.type = new Set();
    this.tagItem = true;
    this.blockPrototype = {
        hardness: 1.0,
        deepslate: true,
        resistance: 3.0,
        lightLevel: 0.0,
        noDrops: true,
        jumpFactor: 1.0,
        speedFactor: 1.0,
        slipperiness: 0.6,
        requiresTool: true,
    };
    this._initChainableSetters();
};

/**
 * @description public method
 */
MaterialFactory.prototype = {
    setBlockProperty: function(callback) {
        callback(this.blockPrototype);
        return this;
    },
    isBlock: function(boolean) {
        if (typeof boolean === 'boolean') {
            this.block = boolean
        }
        return this
    },
    isTagItem: function(boolean) {
        if (typeof boolean === 'boolean') {
            this.tagItem = boolean
        }
        return this
    },
    setMaterial: function(material, color) {
        this.material.set(material, color)
    },
    setMaterials: function(array) {
        array.forEach(element => {
            this.addReplaceMap(element[0], element[1])
        });
        return this
    },
};

/**
 * @description private method
 */
MaterialFactory.prototype._initChainableSetters = function() {
    const setters = {
        hardness: 'setHardness',
        deepslate: 'isDeepslate',
        resistance: 'setResistance',
        lightLevel: 'setLightLevel',
        noDrops: 'isNoDrops',
        jumpFactor: 'setJumpFactor',
        speedFactor: 'setSpeedFactor',
        slipperiness: 'setSlipperiness',
        requiresTool: 'isRequiresTool',
    };

    Object.keys(setters).forEach(key => {
        const setterName = setters[key];
        this.blockPrototype[setterName] = function(value) {
            this[key] = value;
            return this; 
        };
    });
};