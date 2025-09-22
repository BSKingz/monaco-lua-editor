# cleardrawcache

Destroys every drawing object in the cache, invalidating references to the drawing objects.

```lua
function cleardrawcache(): ()
```

***

## Example

```lua
local Camera = game.Workspace.CurrentCamera
local Viewport = Camera.ViewportSize
local Position = Vector2.new(Viewport.X / 2, Viewport.Y / 2)

local circle = Drawing.new("Circle")
circle.Radius = 50
circle.Color = Color3.fromRGB(255, 0, 0)
circle.Filled = true
circle.NumSides = 1111
circle.Position = Position
circle.Transparency = 1
circle.Visible = true

task.defer(cleardrawcache)
print(circle.__OBJECT_EXISTS) -- Outpuut: true
task.wait()
print(circle.__OBJECT_EXISTS) -- Output: false
```
