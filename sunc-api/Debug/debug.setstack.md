# debug.setstack

Sets a value in the stack at the specified index.

```lua
function debug.setstack(level: number, index: number, value: any): ()
```

## Parameters

* `level` - The call stack.
* `index` - The position of the values inside the stack frame.
* `value` - The new value to set at the specified position.

***

## Examples

```lua
error(debug.setstack(1, 1, function() -- Replace error with our function
    return function()
        print("Replaced")
    end
end))() -- Output: Replaced
```

```lua
local OuterValue = 10

local function InnerFunction()
    OuterValue += 9
    debug.setstack(2, 1, 100)
end 
InnerFunction()

print(OuterValue) -- Output: 100
```
