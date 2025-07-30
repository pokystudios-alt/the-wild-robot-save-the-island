enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`ROZZUM_Front0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`ROZZUM_Front1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite.setPosition(126, 94)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.showLongText("There is some sort of plane piece on the ground...", DialogLayout.Top)
    game.showLongText("Go talk to fink!", DialogLayout.Top)
})
info.onCountdownEnd(function () {
    sprites.destroy(mySprite)
    game.gameOver(false)
    game.setGameOverMessage(false, "You Lose!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    game.setDialogTextColor(15)
    game.showLongText("The body is limp and unmoving...", DialogLayout.Top)
    game.gameOver(true)
    game.setGameOverMessage(true, "You Saved the Island!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    info.stopCountdown()
    effects.blizzard.endScreenEffect()
    tiles.setTileAt(tiles.getTileLocation(21, 15), assets.tile`myTile51`)
    tiles.setTileAt(tiles.getTileLocation(20, 15), assets.tile`myTile52`)
    tiles.setTileAt(tiles.getTileLocation(21, 16), assets.tile`myTile53`)
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.setDialogTextColor(11)
    game.showLongText("I won't let you hurt my friends-", DialogLayout.Top)
    game.setDialogTextColor(2)
    game.showLongText("COME WITH ME...", DialogLayout.Top)
    tiles.setTileAt(tiles.getTileLocation(21, 15), assets.tile`myTile54`)
    game.showLongText("COME WITH ME...", DialogLayout.Top)
    game.setDialogTextColor(4)
    game.showLongText("We did it.", DialogLayout.Top)
    game.setDialogTextColor(15)
    game.showLongText("Check if the robot is dead...", DialogLayout.Top)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TEXT TRIGGER 2`, function (sprite, location) {
    game.setDialogTextColor(11)
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.setDialogTextColor(4)
    game.showLongText("Thank goodness your here Roz...", DialogLayout.Top)
    game.showLongText("There was some sort of monster...", DialogLayout.Top)
    game.showLongText("He was saying something...", DialogLayout.Top)
    game.showLongText("All i could make out was heard... Roz...", DialogLayout.Top)
    game.showLongText("If you go to the robot graveyard I bet one of the heads might have seen something...", DialogLayout.Top)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.setDialogTextColor(10)
    game.showLongText("Hi-hi-hi-hi i-im ROZZ- unit... 345-...", DialogLayout.Top)
    game.showLongText("are-are you searching fo-r the o-o-other robot...", DialogLayout.Top)
    game.setDialogTextColor(11)
    game.showLongText("What do you mean?", DialogLayout.Top)
    game.setDialogTextColor(10)
    game.showLongText("Another ro-ro-robot stopped through here looking for a ROZZUM UN-IT 7134...", DialogLayout.Top)
    game.setDialogTextColor(15)
    game.showLongText("Find the robot...", DialogLayout.Top)
})
controller.combos.attachCombo("A+→", function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`ROZZUM_Front`)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`ROZZUM_Front`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.setDialogTextColor(2)
    game.showLongText("ARE YOU ROZZUM UNIT 7134?", DialogLayout.Top)
    game.setDialogTextColor(11)
    game.showLongText("...", DialogLayout.Top)
    game.setDialogTextColor(2)
    game.showLongText("COME WITH ME...", DialogLayout.Top)
    game.setDialogTextColor(11)
    game.showLongText("...", DialogLayout.Top)
    game.setDialogTextColor(2)
    game.showLongText("VERY WELL...", DialogLayout.Top)
    music.stopAllSounds()
    tiles.setCurrentTilemap(tilemap`level8`)
    effects.blizzard.startScreenEffect()
    music.play(music.createSong(assets.song`Boss battle`), music.PlaybackMode.LoopingInBackground)
    game.setDialogTextColor(15)
    game.showLongText("GET TO THE FOREST NOW!", DialogLayout.Top)
    game.showLongText("HINT: Choose the wrong path...", DialogLayout.Top)
    info.startCountdown(21)
})
controller.combos.attachCombo("A+←", function () {
	
})
controller.combos.attachCombo("A+B", function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let mySprite: Sprite = null
music.play(music.createSong(assets.song`theme`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(assets.image`ROZZUM_Front`, SpriteKind.Player)
mySprite.setPosition(75, 97)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
game.setDialogTextColor(15)
game.setDialogFrame(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
game.showLongText("Welcome to the island!", DialogLayout.Top)
game.showLongText("Press B to camouflage. ", DialogLayout.Top)
game.setDialogTextColor(11)
game.showLongText("Brightbill, do you hear that?", DialogLayout.Top)
game.setDialogTextColor(14)
game.showLongText("Hear what mama?", DialogLayout.Top)
game.setDialogTextColor(11)
game.showLongText("That...", DialogLayout.Top)
game.showLongText("I think there was a crash...", DialogLayout.Top)
game.showLongText("let me check it out...", DialogLayout.Top)
game.setDialogTextColor(15)
game.setDialogFrame(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
game.showLongText("Find what made the noise...", DialogLayout.Top)
game.showLongText("HINT: Check the forest...", DialogLayout.Top)
controller.moveSprite(mySprite)
scene.cameraShake(6, 500)
