# debug.setconstant

Sets the wanted constant at the specified index. An error will be returned if the index is invalid.

```lua
function debug.setconstant(func: (...any) -> (...any) | number, index: number, value: number | string | boolean | nil): ()
```

## Parameters

* `func` - The Lua function/level whose constant would be set.
* `index` - The position of the constant.
* `value` - New constant replacing the old one.

***

## Example

```lua
local function DummyFunction()
    print(game.Name)
end

debug.setconstant(DummyFunction, 4, "Players")

DummyFunction() -- Output: Players
-- Optimization Level: 1, Debug Level: 1
```
