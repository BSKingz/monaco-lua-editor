# debug.setupvalue

Replaces the upvalue at the specified index. An error should occur if the index is invalid.

```lua
function debug.setupvalue(func: (...any) -> (...any) | number, index: number, value: any): ()
```

## Parameters

* `func` - The Lua function/level whose upvalue would be set.
* `index` - The position of the wanted upvalue.
* `value` - New upvalue replacing the old one.

***

## Example

```lua
local Upvalue = 90

local function DummyFunction()
    Upvalue += 1
    print(Upvalue)
end

DummyFunction() -- Output: 91
debug.setupvalue(DummyFunction, 1, 99)
DummyFunction() -- Output: 100
```
