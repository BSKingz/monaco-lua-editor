# debug.getupvalue

Returns the upvalue at the specified index. An error should occur if the index is invalid.

```lua
function debug.getupvalue(func: (...any) -> (...any) | number, index: number): any
```

## Parameters

* `func` - The Lua function/level the upvalue would be obtained from.
* `index` - The position of the wanted upvalue.

***

## Examples

```lua
local UpFunction = function() print("Hello from up") end

local function DummyFunction()
    UpFunction()
end

local Upvalue = debug.getupvalue(DummyFunction, 1)
Upvalue() -- Output: Hello from up
```

```lua
local function DummyFunction() end

debug.getupvalue(DummyFunction, 0) -- Should error due to invalid index passage
```

```lua
debug.getupvalue(print, 1) -- Should error due to invalid index and C closure passage
```
