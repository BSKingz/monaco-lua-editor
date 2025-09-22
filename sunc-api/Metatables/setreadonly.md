# setreadonly

Sets the read-only value to true or false, allowing to write inside read-only tables.

```lua
function setreadonly(table: { any }, state: boolean): ()
```

## Parameters

* `table` - The wanted table to set read-only to.
* `state` - Wanted state to set.

***

## Example

```lua
local Metatable = getrawmetatable(game)
Metatable.Example = "Hello" -- Throws an error
setreadonly(Metatable, false)
Metatable.Example = "Hello"
print(Metatable.Example) -- Output: Hello
setreadonly(Metatable, true)
```
