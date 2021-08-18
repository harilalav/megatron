def on_overlap_tile(sprite, location):
    game.over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_a_pressed():
    if megatron.vy == 0:
        megatron.vy = -70
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

megatron: Sprite = None
scene.set_background_color(9)
megatron = sprites.create(assets.image("""
    robot
"""), SpriteKind.player)
controller.move_sprite(megatron, 50, 0)
tiles.set_tilemap(tilemap("""
    level1
"""))
megatron.ay = 100
scene.camera_follow_sprite(megatron)