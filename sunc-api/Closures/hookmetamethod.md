# hookmetamethod

This function takes any lua value that can have metatable and attempts to hook the specified metamethod of the lua value with the `hookfunction` function.

Function can be safely implemented in Lua if `hookfunction` is properly implemented in C code.

```lua
function hookmetamethod(object: table | Instance | userdata, metamethod_name: string, hook: (...any) -> (...any)): (...any) -> (...any)
```

## Parameter

* <kbd>object</kbd> - The object which has the metatable
* <kbd>methodmethod\_name</kbd> - The name of the metamethod to hook.
* <kbd>hook</kbd>  - The function that will be used as a hook

***

## Example

```lua
local Original; Original = hookmetamethod(game, "__index", function(...)
    local Key = select(2, ...)
    print(Key)
    return Original(...)
end)

local _ = game.PlaceId
hookmetamethod(game, "__index", Original) -- Restores game's __index

-- Output: PlaceId
```
