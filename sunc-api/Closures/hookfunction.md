# hookfunction

Hooks a function with another wanted function, returning the original unhooked function.

{% hint style="info" %}
The hook shouldn't have more upvalues than the function you want to hook.

All possible hooking closure pairs should be supported throughout L, NC, C. (NC = newcclosure)
{% endhint %}

```lua
function hookfunction<A1..., R1..., A2..., R2...>(function_to_hook: (A1...) -> R1..., function_hook: (A2...) -> R2...): (A1...) -> R1...
```

## Parameters

* `function_to_hook` - The function that will be hooked
* `function_hook` - The function that will be used as a hook

***

## Example

```lua
local function DummyFunction()
    print("I am not hooked!")
end

local function DummyHook()
    print("I am hooked!")
end

DummyFunction() -- Output: I am not hooked!

local OldFunction = hookfunction(DummyFunction, DummyHook)

DummyFunction() -- Output: I am hooked!
OldFunction() -- Output: I am not hooked!
```
