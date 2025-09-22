# gethui

{% hint style="info" %}
This is an implementation detail; as a regular scripter, you may ignore this! The container in which the elements sit in, should not be findable directly. For example, a descendant for loop through CoreGui shouldn't find the container. Although if found directly, the container's parent should be clonereffed.

If you're going for a different approach from the one above, make sure the container is able to be found in the registry.
{% endhint %}

Returns a hidden UI container that minimalizes most detection methods.

```lua
function gethui(): Instance
```

***

## Example

```lua
local UI = Instance.new("ScreenGui")
UI.Parent = gethui()
print(gethui().ScreenGui) -- Output: "ScreenGui"
```
