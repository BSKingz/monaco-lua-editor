# setscriptable

{% hint style="warning" %}
This function exposes detection vectors, as game scripts can check whether they can also index those properties.
{% endhint %}

{% hint style="info" %}
This function is limited, meaning you won't be able to use it on all the hidden properties; use `gethiddenproperty` for those instead.
{% endhint %}

Sets a hidden property scriptable, which means you will be able to index the hidden properties as if they weren't hidden.

```lua
function setscriptable(object: Instance, property: string, state: boolean): boolean | nil
```

## Parameters

* `object` - The instance's property to set scriptable.
* `property` - The wanted property to set scriptable.
* `state` - Whether to turn it scriptable (true) or non-scriptable (false).

***

## Example

```lua
local a = Instance.new("Part")
setscriptable(a, "BottomParamA", true)
print(a.BottomParamA) -- Output: -0.5
setscriptable(a, "BottomParamA", false)
print(a.BottomParamA) -- Throws an error
```
