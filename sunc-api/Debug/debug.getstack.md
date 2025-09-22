# debug.getstack

Returns all used values in the provided stack level.

```lua
function debug.getstack(level: number, index: number?): any | { any }
```

## Parameters

* `level` - The call stack.
* `index?` - The position of the values inside the stack frame.

***

## Examples

```lua
-- level 1
local Count = 0
local function RecursiveFunction() -- Entering a level deeper, meaning we can call using level 2 in this function
    Count += 1
    if Count > 6 then return end -- We'll stop at 6 to not retrieve useless information for our example
    local a = 29
    local b = true
    local c = "Example"
    a += 1
    b = false
    c..="s"
    print(debug.getstack(1, Count))
    RecursiveFunction()
end

RecursiveFunction()
-- Output:
-- 30
-- false
-- Examples
-- function: 0x...  <-- print function
-- function: 0x...  <-- getstack function
-- 1  <-- argument provided to getstack function
```

```lua
local function DummyFunction() return "Hello" end
local Var = 5
Var += 1

(function()
    print(debug.getstack(2)[1]()) -- Output: Hello
    print(debug.getstack(2)[2]) -- Output: 6
end)()
```
