# getcustomasset

Returns a content URL `(e.g., rbxasset://)` that can be used with UI elements, sounds, meshes, and more. Internally, files are copied to the game's content directory.

```lua
function getcustomasset(path: string): string
```

## Parameter

* `path` - The path to the file.

***

## Example

```lua
-- Will load and play an mp3 sound in-game.
local Encoded = game:HttpGet("https://gitlab.com/sens3/nebunu/-/raw/main/encodedBytecode.txt?ref_type=heads")
writefile("ExampleSound.mp3", crypt.base64decode(Encoded)) -- Write bytes to file
local Retrieved = getcustomasset("ExampleSound.mp3")
local Sound = Instance.new("Sound")
Sound.Parent = workspace
Sound.SoundId = Retrieved
Sound.Volume = 0.35
Sound:Play()
```
