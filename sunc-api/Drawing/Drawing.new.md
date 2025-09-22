# Drawing.new

Creates a new [drawing object](https://penguins-organization-2.gitbook.io/sunc-docs/drawing/drawing.new/drawing-objects) of the specified type. The possible types are: Line, Text, Image, Circle, Square, Quad, and Triangle.

```lua
function Drawing.new(type: string): Drawing
```

## Parameters

* `type` - The type of drawing object to create.

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
circle.NumSides = 32
circle.Position = Position
circle.Transparency = 0.7
circle.Visible = true

task.wait(0.6)
circle:Destroy()
```
