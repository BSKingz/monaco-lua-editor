# iscclosure

Checks if a given function is a C closure.

```lua
function iscclosure(func: (...any) -> (...any)): boolean
```

## Parameter

* `func` - The function to check.

***

## Example

```lua
local function DummyLuaFunction()
    print("This is an executor Lua closure")
end

local DummyCFunction = newcclosure(function()
    print("This is an Executor C Closure")
end)

local DummyStandardCFunction = print
local DummyGlobalCFunction = getgc

print(iscclosure(DummyCFunction)) -- Output: true
print(iscclosure(DummyGlobalCFunction)) -- Output: true
print(iscclosure(DummyStandardCFunction)) -- Output: true
print(iscclosure(DummyLuaFunction)) -- Output: false
```
