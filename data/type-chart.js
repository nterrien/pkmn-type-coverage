// Gen 6-9 type chart    
typeTable = {
    "Normal": { "immunes": ["Ghost"], "resisted": ["Rock", "Steel"], "effective": [] },
    "Fighting": { "immunes": ["Ghost"], "resisted": ["Poison", "Flying", "Psychic", "Bug", "Fairy"], "effective": ["Normal", "Ice", "Rock", "Dark", "Steel"] },
    "Flying": { "immunes": [], "resisted": ["Electric", "Rock", "Steel"], "effective": ["Grass", "Fighting", "Bug"] },
    "Poison": { "immunes": ["Steel"], "resisted": ["Poison", "Ground", "Rock", "Ghost"], "effective": ["Grass", "Fairy"] },
    "Ground": { "immunes": ["Flying"], "resisted": ["Grass", "Bug"], "effective": ["Fire", "Electric", "Poison", "Rock", "Steel"] },
    "Rock": { "immunes": [], "resisted": ["Fighting", "Ground", "Steel"], "effective": ["Fire", "Ice", "Flying", "Bug"] },
    "Bug": { "immunes": [], "resisted": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"], "effective": ["Grass", "Psychic", "Dark"] },
    "Ghost": { "immunes": ["Normal"], "resisted": ["Dark"], "effective": ["Psychic", "Ghost"] },
    "Steel": { "immunes": [], "resisted": ["Fire", "Water", "Electric", "Steel"], "effective": ["Ice", "Rock", "Fairy"] },
    "Fire": { "immunes": [], "resisted": ["Fire", "Water", "Rock", "Dragon"], "effective": ["Grass", "Ice", "Bug", "Steel"] },
    "Water": { "immunes": [], "resisted": ["Water", "Grass", "Dragon"], "effective": ["Fire", "Ground", "Rock"] },
    "Grass": { "immunes": [], "resisted": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"], "effective": ["Water", "Ground", "Rock"] },
    "Electric": { "immunes": ["Ground"], "resisted": ["Electric", "Grass", "Dragon"], "effective": ["Water", "Flying"] },
    "Psychic": { "immunes": ["Dark"], "resisted": ["Psychic", "Steel"], "effective": ["Fighting", "Poison"] },
    "Ice": { "immunes": [], "resisted": ["Fire", "Water", "Ice", "Steel"], "effective": ["Grass", "Ground", "Flying", "Dragon"] },
    "Dragon": { "immunes": ["Fairy"], "resisted": ["Steel"], "effective": ["Dragon"] },
    "Dark": { "immunes": [], "resisted": ["Fighting", "Dark", "Fairy"], "effective": ["Psychic", "Ghost"] },
    "Fairy": { "immunes": [], "resisted": ["Fire", "Poison", "Steel"], "effective": ["Fighting", "Dragon", "Dark"] }
};

function effectiveness(typeA, typeD) {
    e = typeTable[typeA];
    if (e["immunes"].includes(typeD)) {
        return 0
    } else if (e["resisted"].includes(typeD)) {
        return 0.5
    } else if (e["effective"].includes(typeD)) {
        return 2
    } else {
        return 1
    }
}
