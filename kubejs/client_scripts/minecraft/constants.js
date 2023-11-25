// priority: 199

const minecraftItemsToHide = [
    // Regular blocks
    /*
    'minecraft:dark_oak_planks', 
    'minecraft:mangrove_planks', 
    'minecraft:crimson_planks', 
    'minecraft:warped_planks', 
    'minecraft:stone', 
    'minecraft:granite', 
    'minecraft:polished_granite', 
    'minecraft:diorite', 
    'minecraft:polished_diorite', 
    'minecraft:andesite', 
    'minecraft:polished_andesite', 
    'minecraft:deepslate', 
    'minecraft:cobbled_deepslate', 
    'minecraft:polished_deepslate', 
    'minecraft:calcite', 
    'minecraft:tuff', 
    'minecraft:dripstone_block', 
    'minecraft:grass_block', 
    'minecraft:dirt', 
    'minecraft:coarse_dirt', 
    'minecraft:podzol', 
    'minecraft:rooted_dirt',
    'minecraft:crimson_nylium', 
    'minecraft:warped_nylium', 
    'minecraft:cobblestone', 
    'minecraft:oak_planks', 
    'minecraft:spruce_planks', 
    'minecraft:birch_planks', 
    'minecraft:jungle_planks', 
    'minecraft:acacia_planks', 
    'minecraft:cherry_planks',
    'minecraft:stripped_cherry_log', 
    'minecraft:stripped_dark_oak_log', 
    'minecraft:stripped_mangrove_log', 
    'minecraft:stripped_crimson_stem', 
    'minecraft:stripped_warped_stem', 
    'minecraft:stripped_oak_wood', 
    'minecraft:stripped_spruce_wood',
    'minecraft:stripped_birch_wood', 
    'minecraft:stripped_jungle_wood', 
    'minecraft:oak_sapling', 
    'minecraft:spruce_sapling', 
    'minecraft:birch_sapling', 
    'minecraft:jungle_sapling', 
    'minecraft:acacia_sapling', 
    'minecraft:cherry_sapling', 
    'minecraft:dark_oak_sapling', 
    'minecraft:mangrove_propagule', 
    'minecraft:suspicious_gravel', 
    'minecraft:budding_amethyst', 
    'minecraft:netherite_block', 
    'minecraft:oak_log', 
    'minecraft:spruce_log', 
    'minecraft:birch_log', 
    'minecraft:jungle_log', 
    'minecraft:acacia_log', 
    'minecraft:cherry_log', 
    'minecraft:dark_oak_log', 
    'minecraft:mangrove_log', 
    'minecraft:mangrove_roots', 
    'minecraft:crimson_stem', 
    'minecraft:warped_stem', 
    'minecraft:stripped_oak_log', 
    'minecraft:stripped_spruce_log', 
    'minecraft:stripped_birch_log', 
    'minecraft:stripped_jungle_log', 
    'minecraft:stripped_acacia_log',
    'minecraft:stripped_acacia_wood',
    'minecraft:stripped_cherry_wood', 
    'minecraft:stripped_dark_oak_wood',
    'minecraft:stripped_mangrove_wood', 
    'minecraft:stripped_crimson_hyphae', 
    'minecraft:stripped_warped_hyphae', 
    'minecraft:oak_wood', 
    'minecraft:spruce_wood', 
    'minecraft:birch_wood', 
    'minecraft:jungle_wood', 
    'minecraft:acacia_wood', 
    'minecraft:cherry_wood', 
    'minecraft:dark_oak_wood', 
    'minecraft:mangrove_wood', 
    'minecraft:crimson_hyphae', 
    'minecraft:warped_hyphae', 
    'minecraft:oak_leaves',
    'minecraft:spruce_leaves', 
    'minecraft:birch_leaves', 
    'minecraft:jungle_leaves', 
    'minecraft:acacia_leaves', 
    'minecraft:cherry_leaves', 
    'minecraft:dark_oak_leaves', 
    'minecraft:mangrove_leaves', 
    'minecraft:azalea_leaves', 
    'minecraft:flowering_azalea_leaves',
    'minecraft:warped_fungus', 
    'minecraft:crimson_fungus',
    'minecraft:dead_bush', 
    'minecraft:flowering_azalea', 
    'minecraft:azalea', 
    'minecraft:fern', 
    'minecraft:grass', 
    'minecraft:weeping_vines', 
    'minecraft:nether_sprouts', 
    'minecraft:spore_blossom', 
    'minecraft:pitcher_plant', 
    'minecraft:oxeye_daisy', 
    'minecraft:orange_tulip',
    'minecraft:red_tulip', 
    'minecraft:azure_bluet', 
    'minecraft:twisting_vines', 
    'minecraft:warped_roots', 
    'minecraft:brown_mushroom', 
    'minecraft:torchflower', 
    'minecraft:cornflower', 
    'minecraft:white_tulip', 
    'minecraft:allium', 
    'minecraft:blue_orchid', 
    'minecraft:sugar_cane', 
    'minecraft:crimson_roots', 
    'minecraft:red_mushroom', 
    'minecraft:wither_rose', 
    'minecraft:lily_of_the_valley', 
    'minecraft:pink_tulip', 
    'minecraft:poppy', 
    'minecraft:dandelion',
    'minecraft:oak_slab', 
    'minecraft:spruce_slab', 
    'minecraft:birch_slab', 
    'minecraft:jungle_slab', 
    'minecraft:acacia_slab', 
    'minecraft:cherry_slab', 
    'minecraft:dark_oak_slab', 
    'minecraft:mangrove_slab', 
    'minecraft:crimson_slab', 
    'minecraft:warped_slab', 
    'minecraft:stone_slab', 
    'minecraft:smooth_stone_slab', 
    'minecraft:petrified_oak_slab', 
    'minecraft:cobblestone_slab', 
    'minecraft:brick_slab', 
    'minecraft:stone_brick_slab', 
    'minecraft:nether_brick_slab', 
    'minecraft:purpur_slab', 
    'minecraft:prismarine_slab', 
    'minecraft:prismarine_brick_slab', 
    'minecraft:dark_prismarine_slab', 
    'minecraft:smooth_stone',*/
    
    //'minecraft:blast_furnace',
    //'minecraft:furnace',
    //'minecraft:furnace_minecart',

    'minecraft:netherite_scrap',
    'minecraft:netherite_ingot',
    'minecraft:netherite_block',
    'minecraft:smithing_table',
    'minecraft:netherite_block',
    'minecraft:coal_ore',
    'minecraft:deepslate_coal_ore',
    'minecraft:iron_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:redstone_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:emerald_ore',
    'minecraft:deepslate_emerald_ore',
    'minecraft:lapis_ore',
    'minecraft:deepslate_lapis_ore',
    'minecraft:diamond_ore',
    'minecraft:deepslate_diamond_ore',
    'minecraft:nether_gold_ore',
    'minecraft:nether_quartz_ore',
    'minecraft:ancient_debris',

    // Tools
    'minecraft:wooden_shovel',
    'minecraft:stone_shovel',
    'minecraft:golden_shovel',
    'minecraft:iron_shovel',
    'minecraft:diamond_shovel',
    'minecraft:netherite_shovel',
    'minecraft:wooden_hoe',
    'minecraft:stone_hoe',
    'minecraft:golden_hoe',
    'minecraft:iron_hoe',
    'minecraft:diamond_hoe',
    'minecraft:netherite_hoe',
    'minecraft:wooden_sword',
    'minecraft:stone_sword',
    'minecraft:golden_sword',
    'minecraft:iron_sword',
    'minecraft:diamond_sword',
    'minecraft:netherite_sword',
    'minecraft:wooden_pickaxe',
    'minecraft:stone_pickaxe',
    'minecraft:golden_pickaxe',
    'minecraft:iron_pickaxe',
    'minecraft:diamond_pickaxe',
    'minecraft:netherite_pickaxe',
    'minecraft:wooden_axe',
    'minecraft:stone_axe',
    'minecraft:golden_axe',
    'minecraft:iron_axe',
    'minecraft:diamond_axe',
    'minecraft:netherite_axe', 
    
    // Armor
    'minecraft:netherite_helmet',
    'minecraft:netherite_chestplate',
    'minecraft:netherite_leggings',
    'minecraft:netherite_boots',
    'minecraft:golden_helmet', 
    'minecraft:golden_chestplate', 
    'minecraft:golden_leggings', 
    'minecraft:golden_boots', 
    'minecraft:iron_helmet', 
    'minecraft:iron_chestplate', 
    'minecraft:iron_leggings', 
    'minecraft:iron_boots', 
    'minecraft:chainmail_helmet', 
    'minecraft:chainmail_chestplate', 
    'minecraft:chainmail_leggings', 
    'minecraft:chainmail_boots', 
    'minecraft:diamond_helmet', 
    'minecraft:diamond_chestplate', 
    'minecraft:diamond_leggings', 
    'minecraft:diamond_boots',
]