// priority: 0

const ingotGen = [ "ingot" ]
const doubleIngotGen = [ "double_ingot"]
const nuggetGen = [ "nugget" ]
const dustGen = [ "dust", "dust_small", "dust_tiny" ]
const oreGen = [ "poor_raw", "raw", "rich_raw" ]
const partGen = [ "sheet", "double_sheet", "rod", "block", "block_stairs", "block_slab" ]
const armorGen = [ "boots", "greaves", "chestplate", "helmet", "shield", "unfinished_boots", "unfinished_chestplate", "unfinished_greaves", "unfinished_helmet" ]
const utilityGen = [ "anvil", "bars", "chain", "lamp", "trapdoor", "unfinished_lamp" ]
const gtToolGen = [
    "axe_head",
    "axe",
    "hammer_head",
    "hammer",
    "hoe",
    "hoe_head",
    "knife_blade",
    "knife",
    "saw_blade",
    "saw",
    "pickaxe_head",
    "pickaxe",
    "scythe_blade",
    "scythe",
    "shovel_head",
    "shovel",
    "sword_blade",
    "sword",
]
const tfcToolGen = [
    "chisel_head",
    "chisel",
    "fish_hook",
    "fishing_rod",
    "horse_armor",
    "javelin_head",
    "javelin",
    "mace_head",
    "mace",
    "propick_head",
    "propick",
    "shears",
    "tuyere"
]

const ItemHeats = {
    "nugget": { heat_capacity: 0.124, metal_amount: { 
        "default": 16,
        "bismuth": 16,
        "cassiterite": 16,
        "copper": 16,
        "garnierite": 14,
        "gold": 16,
        "hematite": 13,
        "iron": 16,
        "yellow_limonite": 14,
        "magnetite": 14,
        "malachite": 13,
        "nickel": 16,
        "pyrite": 12,
        "silver": 16,
        "sphalerite": 16,
        "tetrahedrite": 14,
        "tin": 16,
        "chalcopyrite": 10,
        "goetite": 15
    }, input: (name) => { return { tag: `forge:nuggets/${name}` } }, output: (name) => { return { item: `gtceu:${name}_nugget` } }  },
    
    "dust": { heat_capacity: 1.429, metal_amount: { 
        "default": 144,
        "bismuth": 144,
        "cassiterite": 144,
        "copper": 144,
        "garnierite": 126,
        "gold": 144,
        "hematite": 117,
        "iron": 144,
        "yellow_limonite": 126,
        "magnetite": 126,
        "malachite": 117,
        "nickel": 144,
        "pyrite": 123,
        "silver": 144,
        "sphalerite": 144,
        "tetrahedrite": 126,
        "tin": 144,
        "chalcopyrite": 112,
        "cassiterite_sand" : 144,
        "goetite": 142
    }, input: (name) => { return { tag: `forge:dusts/${name}` } }, output: (name) => { return { item: `gtceu:${name}_dust` } } },
    
    
    "dust_small": { heat_capacity: 0.714, metal_amount: { 
        "default": 36,
        "bismuth": 36,
        "cassiterite": 36,
        "copper": 36,
        "garnierite": 31,
        "gold": 36,
        "hematite": 29,
        "iron": 36,
        "yellow_limonite": 31,
        "magnetite": 31,
        "malachite": 29,
        "nickel": 36,
        "pyrite": 27,
        "silver": 36,
        "sphalerite": 36,
        "tetrahedrite": 31,
        "tin": 36,
        "chalcopyrite": 22,
        "cassiterite_sand": 36,
        "goetite": 34
    }, input: (name) => { return { tag: `forge:dusts/small/${name}` } }, output: (name) => { return { item: `gtceu:${name}_dust_small` } }  },
    
    
    "dust_tiny": { heat_capacity: 0.357, metal_amount: { 
        "default": 16,
        "bismuth": 16,
        "cassiterite": 16,
        "copper": 16,
        "garnierite": 14,
        "gold": 16,
        "hematite": 13,
        "iron": 16,
        "yellow_limonite": 14,
        "magnetite": 14,
        "malachite": 13,
        "nickel": 16,
        "pyrite": 12,
        "silver": 16,
        "sphalerite": 16,
        "tetrahedrite": 14,
        "tin": 16,
        "chalcopyrite": 10,
        "cassiterite_sand" : 16,
        "goetite": 15
    }, input: (name) => { return { tag: `forge:dusts/tiny/${name}` } }, output: (name) => { return { item: `gtceu:${name}_dust_tiny` } } },
    
    
    "poor_raw": { heat_capacity: 1.429, metal_amount: { 
        "default": 24,
        "bismuth": 24,
        "cassiterite": 24,
        "copper": 24,
        "garnierite": 21,
        "gold": 24,
        "hematite": 18,
        "iron": 24,
        "yellow_limonite": 21,
        "magnetite": 21,
        "malachite": 18,
        "nickel": 24,
        "pyrite": 18,
        "silver": 24,
        "sphalerite": 24,
        "tetrahedrite": 21,
        "tin": 24,
        "chalcopyrite": 14,
        "cassiterite_sand" : 24,
        "goetite": 22
    }, input: (name) => { return { tag: `forge:poor_raw_materials/${name}` } }, output: (name) => { return { item: `gtceu:poor_raw_${name}` } } },
    
    
    "raw": { heat_capacity: 1.429, metal_amount: { 
        "default": 36,
        "bismuth": 36,
        "cassiterite": 36,
        "copper": 36,
        "garnierite": 31,
        "gold": 36,
        "hematite": 29,
        "iron": 36,
        "yellow_limonite": 31,
        "magnetite": 31,
        "malachite": 29,
        "nickel": 36,
        "pyrite": 27,
        "silver": 36,
        "sphalerite": 36,
        "tetrahedrite": 31,
        "tin": 36,
        "chalcopyrite": 28,
        "cassiterite_sand" : 36,
        "goetite": 34
    }, input: (name) => { return { tag: `forge:raw_materials/${name}` } }, output: (name) => { return { item: `gtceu:raw_${name}` } } },
    
    
    "rich_raw": { heat_capacity: 1.429, metal_amount: { 
        "default": 48,
        "bismuth": 48,
        "cassiterite": 48,
        "copper": 48,
        "garnierite": 42,
        "gold": 48,
        "hematite": 39,
        "iron": 48,
        "yellow_limonite": 42,
        "magnetite": 42,
        "malachite": 39,
        "nickel": 48,
        "pyrite": 36,
        "silver": 48,
        "sphalerite": 48,
        "tetrahedrite": 42,
        "tin": 48,
        "chalcopyrite": 36,
        "cassiterite_sand" : 48,
        "goetite": 45
    }, input: (name) => { return { tag: `forge:rich_raw_materials/${name}` } }, output: (name) => { return { item: `gtceu:rich_raw_${name}` } } },
    
    "block_slab": { heat_capacity: null }, // can't melt
    "block_stairs": { heat_capacity: null }, // can't melt
    
    "block": { heat_capacity: 2.857, metal_amount: 1296, 
        input: (name) => { return { tag: `forge:storage_blocks/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_block` } } },
    "anvil": { heat_capacity: 40.0, metal_amount: 2016, 
        input: (name) => { return { item: `tfc:metal/anvil/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/anvil/${name}` } } },
    "chain": { heat_capacity: 0.171, metal_amount: 9, rules: [ "hit_any", "hit_any", "draw_last" ], anvilFrom: "ingot", outputCount: 16,
        input: (name) => { return { item: `tfc:metal/chain/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/chain/${name}` } } },
    "bars": { heat_capacity: 0.714, metal_amount: 36, rules: [ "upset_last", "punch_second_last", "punch_third_last" ], anvilFrom: "sheet", outputCount: 8,
        input: (name) => { return { item: `tfc:metal/bars/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/bars/${name}` } } },
    "trapdoor": { heat_capacity: 5.714, metal_amount: 144, rules: [ "bend_last", "draw_second_last", "draw_third_last" ], anvilFrom: "sheet",
        input: (name) => { return { item: `tfc:metal/trapdoor/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/trapdoor/${name}` } } },
    "lamp": { heat_capacity: 2.857, metal_amount: 144, rules: [ "bend_last", "bend_second_last", "draw_third_last" ], anvilFrom: "ingot",
        input: (name) => { return { item: `tfc:metal/lamp/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/lamp/${name}` } } },
    "unfinished_lamp": { heat_capacity: 2.857, metal_amount: 144, 
        input: (name) => { return { item: `tfc:metal/unfinished_lamp/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/unfinished_lamp/${name}` } } },
    
    "helmet": { heat_capacity: 17.143, metal_amount: 432, hasDur: true, 
        input: (name) => { return { item: `tfc:metal/helmet/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/helmet/${name}` } } },
    "chestplate": { heat_capacity: 22.857, metal_amount: 576, hasDur: true, 
        input: (name) => { return { item: `tfc:metal/chestplate/${name}` }}, 
        output: (name) => { return { item: `tfc:metal/chestplate/${name}` } } },
    "greaves": { heat_capacity: 17.143, metal_amount: 432, hasDur: true, 
        input: (name) => { return { item: `tfc:metal/greaves/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/greaves/${name}` } } },
    "boots": { heat_capacity: 11.429, metal_amount: 432, hasDur: true, 
        input: (name) => { return { item: `tfc:metal/boots/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/boots/${name}` } } },
    "unfinished_boots": { heat_capacity: 5.714, metal_amount: 144, rules: [ "bend_last", "bend_second_last", "shrink_third_last" ], anvilFrom: "sheet",
        input: (name) => { return { item: `tfc:metal/unfinished_boots/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/unfinished_boots/${name}` } } },
    "unfinished_chestplate": { heat_capacity: 11.429, metal_amount: 288, rules: [ "hit_last", "hit_second_last", "upset_third_last" ], anvilFrom: "double_sheet",
        input: (name) => { return { item: `tfc:metal/unfinished_chestplate/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/unfinished_chestplate/${name}` } } },
    "unfinished_greaves": { heat_capacity: 11.429, metal_amount: 288, rules: [ "bend_any", "draw_any", "hit_any" ], anvilFrom: "double_sheet",
        input: (name) => { return { item: `tfc:metal/unfinished_greaves/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/unfinished_greaves/${name}` } } },
    "unfinished_helmet": { heat_capacity: 11.429, metal_amount: 288, rules: [ "hit_last", "bend_second_last", "bend_third_last" ], anvilFrom: "double_sheet",
        input: (name) => { return { item: `tfc:metal/unfinished_helmet/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/unfinished_helmet/${name}` } } },
    
    "horse_armor": { heat_capacity: 34.286, metal_amount: 864, hasDur: true, 
        input: (name) => { return { item: `tfc:metal/horse_armor/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/horse_armor/${name}` } } },

    "sword_blade": { heat_capacity: 5.714, metal_amount: 288, hasMold: true, rules: [ "hit_last", "bend_second_last", "bend_third_last" ], anvilFrom: "double_ingot",
        input: (name) => { return { tag: `forge:sword_heads/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_sword_head` } } },
    "sword": { heat_capacity: 5.714, metal_amount: 288, hasDur: true,
        input: (name) => { return { item: `gtceu:${name}_sword` } }, 
        output: (name) => { return { item: `gtceu:${name}_sword` } } },
    "pickaxe_head": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "punch_last", "bend_not_last", "draw_not_last" ], anvilFrom: "ingot",
        input: (name) => { return { tag: `forge:pickaxe_heads/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_pickaxe_head` } }  },
    "pickaxe": { heat_capacity: 2.857, metal_amount: 144, hasDur: true, 
        input: (name) => { return { item: `gtceu:${name}_pickaxe` } }, 
        output: (name) => { return { item: `gtceu:${name}_pickaxe` } } },
    "axe_head": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "punch_last", "hit_second_last", "upset_third_last" ], anvilFrom: "ingot",
        input: (name) => { return { tag: `forge:axe_heads/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_axe_head` } } },
    "axe": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `gtceu:${name}_axe` } }, 
        output: (name) => { return { item: `gtceu:${name}_axe` } } },
    "shovel_head": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "punch_last", "hit_not_last" ], anvilFrom: "ingot",
        input: (name) => { return { tag: `forge:shovel_heads/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_shovel_head` } } },
    "shovel": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `gtceu:${name}_shovel` } }, 
        output: (name) => { return { item: `gtceu:${name}_shovel` } } },
    "hammer_head": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "punch_last", "shrink_not_last" ], anvilFrom: "ingot",
        input: (name) => { return { tag: `forge:hammer_heads/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_hammer_head` } } },
    "hammer": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `gtceu:${name}_hammer` } }, 
        output: (name) => { return { item: `gtceu:${name}_hammer` } } },
    "hoe_head": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "punch_last", "hit_not_last", "bend_not_last" ], anvilFrom: "ingot",
        input: (name) => { return { tag: `forge:hoe_heads/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_hoe_head` } } },
    "hoe": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `gtceu:${name}_hoe` } }, 
        output: (name) => { return { item: `gtceu:${name}_hoe` } } },
    "knife_blade": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "hit_last", "draw_second_last", "draw_third_last" ], anvilFrom: "ingot",
        input: (name) => { return { tag: `forge:knife_heads/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_knife_head` } } },
    "knife": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `gtceu:${name}_knife` } },
        output: (name) => { return { item: `gtceu:${name}_knife` } } },
    "saw_blade": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "hit_last", "hit_second_last" ], anvilFrom: "ingot",
        input: (name) => { return { tag: `forge:saw_heads/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_saw_head` } } },
    "saw": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `gtceu:${name}_saw` } }, 
        output: (name) => { return { item: `gtceu:${name}_saw` } } },
    "scythe_blade": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "hit_last", "draw_second_last", "bend_third_last" ], anvilFrom: "ingot",
        input: (name) => { return { tag: `forge:scythe_heads/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_scythe_head` } } },
    "scythe": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `gtceu:${name}_scythe` } }, 
        output: (name) => { return { item: `gtceu:${name}_scythe` } } },
    "chisel_head": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "hit_last", "hit_not_last", "draw_not_last" ], anvilFrom: "ingot",
        input: (name) => { return { item: `tfc:metal/chisel_head/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/chisel_head/${name}` } }, },
    "chisel": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `tfc:metal/chisel/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/chisel/${name}` } } },
    "javelin_head": { heat_capacity: 2.857, metal_amount: 144, hasMold: true, rules: [ "hit_last", "hit_second_last", "draw_third_last" ], anvilFrom: "ingot",
        input: (name) => { return  { item: `tfc:metal/javelin_head/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/javelin_head/${name}` } } },
    "javelin": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `tfc:metal/javelin/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/javelin/${name}` } } },
    "propick_head": { heat_capacity:  2.857, metal_amount: 144, hasMold: true, rules: [ "punch_last", "draw_not_last", "bend_not_last" ], anvilFrom: "ingot",
        input: (name) => { return { item: `tfc:metal/propick_head/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/propick_head/${name}` } } },
    "propick": { heat_capacity: 2.857, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `tfc:metal/propick/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/propick/${name}` } } },
    "mace_head": { heat_capacity: 5.714, metal_amount: 288, hasMold: true, rules: [ "hit_last", "shrink_not_last", "bend_not_last" ], anvilFrom: "double_ingot",
        input: (name) => { return { item: `tfc:metal/mace_head/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/mace_head/${name}` } } },
    "mace": { heat_capacity: 5.714, metal_amount: 288, hasDur: true,
        input: (name) => { return { item: `tfc:metal/mace/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/mace/${name}` } } },
    "fish_hook": { heat_capacity: 5.714, metal_amount: 144, rules: [ "draw_not_last", "bend_any", "hit_any" ], anvilFrom: "sheet",
        input: (name) => { return { item: `tfc:metal/fish_hook/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/fish_hook/${name}` } } },
    "fishing_rod": { heat_capacity: 5.714, metal_amount: 144, hasDur: true,
        input: (name) => { return { item: `tfc:metal/fishing_rod/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/fishing_rod/${name}` } } },
    "tuyere": { heat_capacity: 11.429, metal_amount: 288, hasDur: true, rules: [ "bend_last", "bend_second_last" ], anvilFrom: "double_sheet",
        input: (name) => { return { item: `tfc:metal/tuyere/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/tuyere/${name}` } } },
    "shears": { heat_capacity: 5.714, metal_amount: 288, hasDur: true,
        input: (name) => { return { item: `tfc:metal/shears/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/shears/${name}` } } },
    "shield": { heat_capacity: 11.429, metal_amount: 288, hasDur: true, rules: [ "upset_last", "bend_second_last", "bend_third_last" ], anvilFrom: "double_sheet",
        input: (name) => { return { item: `tfc:metal/shield/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/shield/${name}` } } },

    "ingot": { heat_capacity: 2.857, metal_amount: 144, hasMold: true,
        input: (name) => { return { tag: `forge:ingots/${name}` } }, 
        output: (name) =>  { return { item: Item.of(`#forge:ingots/${name}`).getId() + "" } } },
    "double_ingot": { heat_capacity: 5.714, metal_amount: 288, 
        input: (name) => { return { tag: `forge:ingots/double/${name}` } }, 
        output: (name) => { return { item: `tfc:metal/double_ingot/${name}` } } },
    "sheet": { heat_capacity: 5.714, metal_amount: 144, rules: [ "hit_last", "hit_second_last", "hit_third_last" ], anvilFrom: "double_ingot",
        input: (name) => { return { tag: `forge:plates/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_plate` } } },
    "double_sheet": { heat_capacity: 11.429, metal_amount: 288, 
        input: (name) => { return { tag: `forge:plates/double/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_double_plate` } } },
    "rod": { heat_capacity: 1.429, metal_amount: 72, rules: [ "bend_last", "draw_second_last", "draw_third_last" ], anvilFrom: "ingot", outputCount: 2,
        input: (name) => { return { tag: `forge:rods/${name}` } }, 
        output: (name) => { return { item: `gtceu:${name}_rod` } } },
}

const Metals = {
    "bismuth": { forging_temp: 162, welding_temp: 216, melt_temp: 270, fluidName: "gtceu:bismuth", tier: 1, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, oreGen, partGen) },
    "brass": { forging_temp: 558, welding_temp: 744, melt_temp: 930, fluidName: "gtceu:brass", tier: 2, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen) },
    "gold": { forging_temp: 636, welding_temp: 848, melt_temp: 1060, fluidName: "gtceu:gold", tier: 1, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, oreGen, partGen) },
    "nickel": { forging_temp: 872, welding_temp: 1162, melt_temp: 1453, fluidName: "gtceu:nickel", tier: 1, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, oreGen, partGen) },
    "rose_gold": { forging_temp: 576, welding_temp: 768, melt_temp: 960, fluidName: "gtceu:rose_gold", tier: 1, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen) },
    "silver": { forging_temp: 577, welding_temp: 769, melt_temp: 961, fluidName: "gtceu:silver", tier: 1, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, oreGen, partGen) },
    "tin": { forging_temp: 138, welding_temp: 184, melt_temp: 230, fluidName: "gtceu:tin", tier: 1, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, oreGen, partGen) },
    "zinc": { forging_temp: 252, welding_temp: 336, melt_temp: 420, fluidName: "gtceu:zinc", tier: 1, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen) },
    "sterling_silver": { forging_temp: 570, welding_temp: 760, melt_temp: 950, fluidName: "gtceu:sterling_silver", tier: 1, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen) },
    "copper": { forging_temp: 648, welding_temp: 864, melt_temp: 1080, fluidName: "gtceu:copper", tier: 1, canBeUnmolded: true, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, oreGen, partGen, armorGen, gtToolGen, tfcToolGen, utilityGen) },
    "bismuth_bronze": { forging_temp: 591, welding_temp: 788, melt_temp: 985, fluidName: "gtceu:bismuth_bronze", tier: 2, canBeUnmolded: true, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen, armorGen, gtToolGen, tfcToolGen, utilityGen) },
    "bronze": { forging_temp: 570, welding_temp: 760, melt_temp: 950, fluidName: "gtceu:bronze", tier: 1, canBeUnmolded: true, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen, armorGen, gtToolGen, tfcToolGen, utilityGen) },
    "black_bronze": { forging_temp: 642, welding_temp: 856, melt_temp: 1070, fluidName: "gtceu:black_bronze", tier: 2, canBeUnmolded: true, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen, armorGen, gtToolGen, tfcToolGen, utilityGen) },
    "wrought_iron": { forging_temp: 921, welding_temp: 1228, melt_temp: 1535, fluidName: "gtceu:wrought_iron", tier: 3, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen, armorGen, gtToolGen, tfcToolGen, utilityGen) },
    "iron": { forging_temp: 921, welding_temp: 1228, melt_temp: 1535, fluidName: "gtceu:iron", tier: 3, props: [].concat(ingotGen, doubleIngotGen, dustGen, oreGen, /*gtToolGen,*/ /*partGen*/) },
    // "cast_iron": { forging_temp: 921, welding_temp: 1228, melt_temp: 1535, fluidName: "gtceu:iron", tier: 1, props: doubleIngotGen },
    "pig_iron": { forging_temp: 921, welding_temp: 1228, melt_temp: 1535, fluidName: "tfc:metal/pig_iron", tier: 3, props: ingotGen},
    "steel": { forging_temp: 924, welding_temp: 1232, melt_temp: 1540, fluidName: "gtceu:steel", tier: 4, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen, armorGen, gtToolGen, tfcToolGen, utilityGen) },
    "high_carbon_black_steel": { forging_temp: 924, melt_temp: 1540, welding_temp: 1232, fluidName: "tfc:metal/high_carbon_black_steel", tier: 5, props: ingotGen },
    "high_carbon_red_steel": { forging_temp: 924, melt_temp: 1540, welding_temp: 1232, fluidName: "tfc:metal/high_carbon_red_steel", tier: 5, props: ingotGen },
    "high_carbon_blue_steel": { forging_temp: 924, melt_temp: 1540, welding_temp: 1232, fluidName: "tfc:metal/high_carbon_blue_steel", tier: 4, props: ingotGen },
    "high_carbon_steel": { forging_temp: 924, melt_temp: 1540, welding_temp: 1232, fluidName: "tfc:metal/high_carbon_steel", tier: 3, props: ingotGen },
    "weak_steel": {  forging_temp: 924, welding_temp: 1232, melt_temp: 1540, fluidName: "tfc:metal/weak_steel", tier: 4, props: ingotGen },
    "weak_red_steel": { forging_temp: 924, welding_temp: 1232, melt_temp: 1540, fluidName: "tfc:metal/weak_red_steel", tier: 5, props: ingotGen },
    "weak_blue_steel": { forging_temp: 924, welding_temp: 1232, melt_temp: 1540, fluidName: "tfc:metal/weak_blue_steel", tier: 5, props: ingotGen },
    "black_steel": { forging_temp: 891, welding_temp: 1188, melt_temp: 1485, fluidName: "gtceu:black_steel", tier: 5, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen, armorGen, gtToolGen, tfcToolGen, utilityGen) },
    "red_steel": { forging_temp: 924, welding_temp: 1232, melt_temp: 1540, fluidName: "gtceu:red_steel", tier: 6, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen, armorGen, gtToolGen, tfcToolGen, utilityGen) },
    "blue_steel": { forging_temp: 924, welding_temp: 1232, melt_temp: 1540, fluidName: "gtceu:blue_steel", tier: 6, props: [].concat(ingotGen, doubleIngotGen, nuggetGen, dustGen, partGen, armorGen, gtToolGen, tfcToolGen, utilityGen) },
    "unknown": { forging_temp: 240, welding_temp: 320, melt_temp: 400, fluidName: "tfc:metal/unknown", tier: 1, props: ingotGen },
    "cassiterite": { forging_temp: 138, welding_temp: 184, melt_temp: 230, fluidName: "gtceu:tin", tier: 1, props: [].concat(dustGen, oreGen) },
    "garnierite": { forging_temp: 138, welding_temp: 184, melt_temp: 1453, fluidName: "gtceu:nickel", tier: 1, props: [].concat(dustGen, oreGen) },
    "hematite": { forging_temp: 921, welding_temp: 1228, melt_temp: 1535, fluidName: "gtceu:iron", tier: 3, props: [].concat(dustGen, oreGen) },
    "yellow_limonite": { forging_temp: 921, welding_temp: 1228, melt_temp: 1535, fluidName: "gtceu:iron", tier: 3, props: [].concat(dustGen, oreGen) },
    "magnetite": { forging_temp: 138, welding_temp: 184, melt_temp: 1535, fluidName: "gtceu:iron", tier: 3, props: [].concat(dustGen, oreGen) },
    "malachite": { forging_temp: 138, welding_temp: 184, melt_temp: 1080, fluidName: "gtceu:copper", tier: 1, props: [].concat(dustGen, oreGen) },
    "pyrite": { forging_temp: 921, welding_temp: 1228, melt_temp: 1535, fluidName: "gtceu:iron", tier: 3, props: [].concat(dustGen, oreGen) },
    "sphalerite": { forging_temp: 138, welding_temp: 184, melt_temp: 420, fluidName: "gtceu:zinc", tier: 1, props: [].concat(dustGen, oreGen) },
    "tetrahedrite": { forging_temp: 138, welding_temp: 184, melt_temp: 1080, fluidName: "gtceu:copper", tier: 1, props: [].concat(dustGen, oreGen) },
    "chalcopyrite" : { forging_temp: 648, welding_temp: 864, melt_temp: 1080, fluidName: "gtceu:copper", tier: 1, props: [].concat(dustGen, oreGen) },
    "cassiterite_sand" : { forging_temp: 138, welding_temp: 184, melt_temp: 230, fluidName: "gtceu:tin", tier: 1, props: [].concat(dustGen, oreGen) },
    "goethite" : { forging_temp: 921, welding_temp: 1228, melt_temp: 1535, fluidName: "gtceu:iron", tier: 3, props: [].concat(dustGen, oreGen) }
}

const removeAllTagsItems = [
    'tfc:ore/amethyst', 
    'tfc:ore/diamond', 
    'tfc:ore/lapis_lazuli', 
    'tfc:ore/emerald', 
    'tfc:ore/pyrite', 
    'tfc:ore/opal', 
    'tfc:ore/ruby', 
    'tfc:ore/sapphire', 
    'tfc:ore/topaz',
    
    'tfc:gem/amethyst', 
    'tfc:gem/diamond', 
    'tfc:gem/lapis_lazuli', 
    'tfc:gem/emerald', 
    'tfc:gem/pyrite', 
    'tfc:gem/opal', 
    'tfc:gem/ruby', 
    'tfc:gem/sapphire', 
    'tfc:gem/topaz',

    'tfc:ore/bituminous_coal',
    'tfc:ore/lignite'
]