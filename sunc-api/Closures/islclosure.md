# islclosure

Checks if a given function is a L closure.

```lua
function islclosure(func: (...any) -> (...any)): boolean
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

print(islclosure(DummyLuaFunction)) -- Output: true
print(islclosure(DummyStandardCFunction)) -- Output: false
print(islclosure(DummyCFunction)) -- Output: false
```
