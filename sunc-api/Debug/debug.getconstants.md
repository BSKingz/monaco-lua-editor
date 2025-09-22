# debug.getconstants

Returns the constants of the specified Lua function. Should error on C closures, since they have no constants.

```lua
function debug.getconstants(func: (...any) -> (...any) | number): { number | string | boolean | nil }
```

## Parameter

* `func` - The Lua function/level the constants would be obtained from.

***

## Example

```lua
local function DummyFunction()
    local DummyString = "foo bar"
    string.split(DummyString, " ")
end

local Constants = debug.getconstants(DummyFunction)
for ConstantIndex, Constant in Constants do
    print(`[{ConstantIndex}]: {Constant}`)
end

-- Output:
-- [1]: "string"
-- [2]: "split"
-- [4]: "foo bar"
-- [5]: " "
-- Optimization Level: 1, Debug Level: 1
```

```lua
print(debug.getconstants(print)) -- Should error due to being a C closure
```
