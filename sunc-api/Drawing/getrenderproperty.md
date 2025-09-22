# getrenderproperty

Gets the value of a drawing property, functionally similar to `drawing[property]`.

```lua
function getrenderproperty(drawing: Drawing, property: string): any
```

## Parameters

* `drawing` - The drawing's property to get.
* `property` - The property.

***

## Example

```lua
local circle = Drawing.new("Circle")
circle.Radius = 50
print(getrenderproperty(circle, "Radius")) -- Output: 50
print(getrenderproperty(circle, "Visible")) -- Output: false
```
