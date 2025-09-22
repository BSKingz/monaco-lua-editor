# clonefunction

{% hint style="info" %}
The cloned function must have the same environment as the original.

Any sort of modification to the original shouldn't affect the clone. Meaning that stuff like hooking the original will leave the clone unaffected.
{% endhint %}

Creates and returns a new function that has the same behaviour as the passed function.

```lua
function clonefunction<A..., R...>(function_to_clone: (A...) -> R...): (A...) -> R...
```

## Parameter

* `func` - The function to clone.

***

## Example

```lua
local function DummyFunction()
    print("Hello")
end

local ClonedFunction = clonefunction(DummyFunction)

print(debug.info(ClonedFunction, "l")) -- Output: 1
print(debug.info(ClonedFunction, "n")) -- Output: DummyFunction
print(ClonedFunction == DummyFunction) -- Output: false
print(getfenv(ClonedFunction) == getfenv(DummyFunction)) -- Output: true
```
