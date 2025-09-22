# fireproximityprompt

{% hint style="warning" %}
It's not recommended to implement this function in luau. Doing so will expose you to easy detections.
{% endhint %}

Triggers a `ProximityPrompt` instantly, regardless of distance or duration.

```lua
function fireproximityprompt(object: ProximityPrompt): ()
```

## Parameter

* `object` - The ProximityPrompt to fire.

***

## Example

```lua
local DummyPart = Instance.new("Part", workspace)
local DummyProximityPrompt = Instance.new("ProximityPrompt")
DummyProximityPrompt.Parent = DummyPart

DummyProximityPrompt.Triggered:Connect(function()
    print("Triggered")
end)

fireproximityprompt(DummyProximityPrompt) -- Output: Triggered
```
