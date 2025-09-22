# debug.getupvalues

Returns the upvalues of the specified function. `nil` will be returned if there is none.

```lua
function debug.getupvalues(func: (...any) -> (...any) | number): { any }
```

## Parameter

* `func` - The Lua function/level the upvalues would be obtained from.

***

## Examples

```lua
local Var1 = false
local Var2 = "Hi"
local function DummyFunction()
    Var1 = true
    Var2..=", hello"
end

for UpvalIndex, UpvalValue in pairs(debug.getupvalues(DummyFunction)) do
    print(UpvalIndex, UpvalValue)
end

-- Output:
-- 1 false
-- 2 Hi
```

```lua
local Var1 = false
local function DummyFunction()
    print(Var1)
end

print(next(debug.getupvalues(DummyFunction))) -- Output: nil
```

```lua
print(debug.getupvalues(print)) -- Should error due to `print` being a C closure
```
