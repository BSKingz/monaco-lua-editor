# Drawing Objects

The class which all drawing objects will inherit.

<table><thead><tr><th width="173" align="center">Property</th><th width="110" align="center">Type</th><th align="center">Description</th></tr></thead><tbody><tr><td align="center">Visible</td><td align="center">boolean</td><td align="center">Whether the drawing is visible. Defaults to <code>false</code>.</td></tr><tr><td align="center">ZIndex</td><td align="center">number</td><td align="center">Determines the order in which a Drawing renders relative to others.</td></tr><tr><td align="center">Transparency</td><td align="center">number</td><td align="center">The opacity of the drawing (1 - opaque, 0 - transparent).</td></tr><tr><td align="center">Color</td><td align="center">Color3</td><td align="center">The color of the drawing.</td></tr><tr><td align="center">__OBJECT_EXISTS</td><td align="center">boolean</td><td align="center">Whether the object exists.</td></tr><tr><td align="center">Destroy(): ()</td><td align="center">function</td><td align="center">Destroys the drawing.</td></tr></tbody></table>

***

## Line

Renders a line starting at `From` and ending at `To`.

| Property    | Type    | Description                     |
| ----------- | ------- | ------------------------------- |
| `From`      | Vector2 | The starting point of the line. |
| `To`        | Vector2 | The ending point of the line.   |
| `Thickness` | number  | The thickness of the line.      |

***

## Text

Renders text at `Position`.

| Property       | Type         | Description                                       |
| -------------- | ------------ | ------------------------------------------------- |
| `Text`         | string       | The text to render.                               |
| `TextBounds`   | 🔒 Vector2   | The size of the text. Cannot be set.              |
| `Font`         | Drawing.Font | The font to use.                                  |
| `Size`         | number       | The size of the text.                             |
| `Position`     | Vector2      | The position of the text.                         |
| `Center`       | boolean      | Whether the text should be centered horizontally. |
| `Outline`      | boolean      | Whether the text should be outlined.              |
| `OutlineColor` | Color3       | The color of the outline.                         |

***

## Image

Draws the image data to the screen. `Data` *must* be the raw image data.

| Property   | Type    | Description                                                                                                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `Data`     | string  | The raw image data of the file. You can use `readfile` or another method to read the raw bytecode of the image. |
| `Size`     | Vector2 | The size of the image.                                                                                          |
| `Position` | Vector2 | The position of the image.                                                                                      |
| `Rounding` | number  | The rounding of the image.                                                                                      |

***

## Circle

Draws a circle that is centered at `Position`.

| Property    | Type    | Description                                                   |
| ----------- | ------- | ------------------------------------------------------------- |
| `NumSides`  | number  | The sides number of the circle.                               |
| `Radius`    | number  | The radius of the circle.                                     |
| `Position`  | Vector2 | The center position of the circle.                            |
| `Thickness` | number  | If `Filled` is false, specifies the thickness of the outline. |
| `Filled`    | boolean | Whether the circle should be filled.                          |

***

## Square

Draws a rectangle starting at `Position` and ending at `Position` + `Size`.

| Property    | Type    | Description                                                   |
| ----------- | ------- | ------------------------------------------------------------- |
| `Size`      | Vector2 | The size of the square.                                       |
| `Position`  | Vector2 | The top-left corner position of the square.                   |
| `Thickness` | number  | If `Filled` is false, specifies the thickness of the outline. |
| `Filled`    | boolean | Whether the square should be filled.                          |

#### Quad

Draws a four-sided figure connecting to each of the four points.

| Property    | Type    | Description                                                   |
| ----------- | ------- | ------------------------------------------------------------- |
| `PointA`    | Vector2 | The first point.                                              |
| `PointB`    | Vector2 | The second point.                                             |
| `PointC`    | Vector2 | The third point.                                              |
| `PointD`    | Vector2 | The fourth point.                                             |
| `Thickness` | number  | If `Filled` is false, specifies the thickness of the outline. |
| `Filled`    | boolean | Whether the quad should be filled.                            |

***

## Triangle

Draws a triangle connecting to each of the three points.

| Property    | Type    | Description                                                   |
| ----------- | ------- | ------------------------------------------------------------- |
| `PointA`    | Vector2 | The first point.                                              |
| `PointB`    | Vector2 | The second point.                                             |
| `PointC`    | Vector2 | The third point.                                              |
| `Thickness` | number  | If `Filled` is false, specifies the thickness of the outline. |
| `Filled`    | boolean | Whether the triangle should be filled.                        |

***

## Example image

```lua
local Camera = game.Workspace.CurrentCamera
local Viewport = Camera.ViewportSize
local Position = Vector2.new(Viewport.X / 2, Viewport.Y / 2)
local image = Drawing.new("Image")
image.Data = readfile("your_image.png")
image.Size = Vector2.new(455, 155)
image.Visible = true
image.Position = Position

task.wait(2)
image:Destroy()
```

***

## Example \_\_OBJECT\_EXISTS

```lua
local Camera = game.Workspace.CurrentCamera
local Viewport = Camera.ViewportSize
local Position = Vector2.new(Viewport.X / 2, Viewport.Y / 2)

local circle = Drawing.new("Circle")
circle.Radius = 50
circle.Color = Color3.fromRGB(255, 0, 0)
circle.Filled = true
circle.NumSides = 150
circle.Position = Position
circle.Transparency = 1
circle.Visible = true

print(circle.__OBJECT_EXISTS) -- Output: true
circle:Destroy()
print(circle.__OBJECT_EXISTS) -- Output: false
```
