# newcclosure

{% hint style="warning" %}
Many executors are implementing this function using `coroutine` functions in Lua; these implementations won't pass sUNC checks.

The wrapped function should be yieldable (meaning that the function should be able to call `task.wait`, for example)
{% endhint %}

This function takes in a function and wraps it into a C closure.

When the returned function is called, the original Lua closure is called, and arguments are passed to the original closure, and then the original closure returned arguments are passed to the caller of the C closure.

```lua
function newcclosure<A..., R...>(function_to_wrap: (A...) -> R...): (A...) -> R...
```

## Parameter

* `function_to_wrap` - A function to be wrapped.

***

## Example

```lua
local DummyFunction = function(...)
    return ...
end

print(iscclosure(DummyFunction)) -- Output: false

local WrappedFunction = newcclosure(DummyFunction)

print(iscclosure(WrappedFunction)) -- Output: true

local FunctionResults = WrappedFunction("Hello")
print(FunctionResults) -- Output: Hello
```

```lua
local DummyYieldingFunction = newcclosure(function()
    print("Before")
    task.wait(1.5)
    print("After")
end)

DummyYieldingFunction()
-- Output:
-- Before
-- yield for 1.5 seconds
-- After
```
