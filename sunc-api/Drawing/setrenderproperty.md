# setrenderproperty

Sets the value of a drawing property, functionally similar to `drawing[property] = value`.

```lua
function setrenderproperty(drawing: Drawing, property: string, value: any): ()
```

## Parameters

* `drawing` - The drawing's property to set.
* `property` - The property.
* `value` - The value to set the property to.

## Example

```lua
local circle = Drawing.new("Circle")
setrenderproperty(circle, "Radius", 50)
setrenderproperty(circle, "Visible", true)
print(circle.Radius) -- Output: 50
print(circle.Visible) -- Output: true
```
