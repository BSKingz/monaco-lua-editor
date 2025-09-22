# setrawmetatable

Sets the metatable of **object** to the metatable provided, bypassing the `__metatable` field.

```lua
function setrawmetatable<T>(object: T, metatable: { any }): T
```

## Parameters

* `object` - The object's metatable to be set.
* `metatable` - The wanted metatable to set.

***

## Example

```lua
local DummyString = "Example"
local StringMetatable = setrawmetatable(DummyString, { __index = getgenv() })
print(StringMetatable) -- Output: Example
print(Metatable.getgenv) -- Output: function: 0x...
```
