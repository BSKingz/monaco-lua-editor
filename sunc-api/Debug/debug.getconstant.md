# debug.getconstant

Returns the constant at the specified index. If there is no constant at the specified index, `nil` will be returned instead.

```lua
function debug.getconstant(func: (...any) -> (...any) | number, index: number): number | string | boolean | nil
```

## Parameters

* `func` - The Lua function/level the constant would be obtained from.
* `index` - Position of the wanted constant.

***

## Examples

```lua
local function DummyFunction()
    local DummyString = "foo bar"
    string.split(DummyString, " ")
end

local Result = debug.getconstant(DummyFunction, 2)
print(Result) -- Output: string

-- Optimization Level: 1, Debug Level: 1
```

```lua
local function DummyFunction()
    local DummyString = "foo bar"
    string.split(DummyString, " ")
end

local Result = debug.getconstant(DummyFunction, 3)
print(Result) -- Output: nil

-- Optimization Level: 1, Debug Level: 1
```

```lua
print(debug.getconstant(print)) -- Should error due to being a C closure
```
