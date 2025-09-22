# isexecutorclosure

Checks if a given function is the executor's closure.

```lua
function isexecutorclosure(func: (...any) -> (...any)): boolean
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
    print("This is an executor C closure")
end)

local DummyStandardCFunction = print
local DummyGlobalCFunction = getgc

print(isexecutorclosure(DummyLuaFunction)) -- Output: true
print(isexecutorclosure(DummyCFunction)) -- Output: true
print(isexecutorclosure(DummyGlobalCFunction)) -- Output: true
print(isexecutorclosure(DummyStandardCFunction)) -- Output: false
```
