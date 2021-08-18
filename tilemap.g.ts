// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`320010000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010100000000000000000000000101010101010101010101010101010101000000000000000000000000000000000000010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000101010100000000000001010100000000000000000000000000000000000000000000000000000000000000000001010100000000000000000101010000000000000000000000000001010101010100010001010000000000000000000000000101010000000000000000000000000000000000000000000000000000000000000000000000010100000000000000030000010101010101010101010100000000000000000101010101000000000000000000000000000000010101010101010000000001010100000000000000000000000000000000000000000000000000000000000000000000000000000000000101000000000101010000000000000001010101010101000000000000000000000000000000000000000000000000000000010100000003010101000000000000000000000000000000000000000000000001010101010000000000000000000000000000010101010101010100000000000000000000000000000000000000000000000000000000000001010101000000000000000000000000000001010000010101010000000101010100000000000001010101010000000000000000000000000000000000000000000000000101020202020202020000000000000000020200020202020000000002020202000000000000000000000002020202020200010102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
22222222222222222222222222222222222222222222222222
2............222...............................222
2..............................................222
2...........22222222222222222..................222
2...............................................22
2.2222......222.................................22
2........222.............222222.2.22............22
2...................................22..........22
222222222........22222...............2222222....22
2.........................................22....22
2.......2222222...........................22....22
2.......................22222..............2222222
2..............................2222..............2
2..2222...2222......22222........................2
22...............................................2
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "portal":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.