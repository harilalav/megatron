scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (megatron.vy == 0) {
        megatron.vy = -90
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function (sprite, location) {
    game.over(true, effects.hearts)
})
let megatron: Sprite = null
scene.setBackgroundColor(9)
megatron = sprites.create(assets.image`robot`, SpriteKind.Player)
controller.moveSprite(megatron, 50, 0)
tiles.setTilemap(tilemap`level1`)
megatron.ay = 100
scene.cameraFollowSprite(megatron)
