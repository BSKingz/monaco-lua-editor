# fireclickdetector

{% hint style="warning" %}
It's not recommended to implement this function in luau. Doing so will expose you to easy detections.
{% endhint %}

Triggers a specified event on a `ClickDetector`. The event parameter defaults to **MouseClick** if not defined. Not providing the distance will default to infinite.

```lua
function fireclickdetector(object: ClickDetector, distance: number?, event: string?): ()
```

Selectable Events: 'MouseClick', 'RightMouseClick', 'MouseHoverEnter', 'MouseHoverLeave'.

## Parameters

* `object` - The ClickDetector to trigger.
* `distance` - Distance to trigger the ClickDetector from.
* `event` - The chosen event to trigger the detector with.

***

## Examples

```lua
local ClickDetector = Instance.new("ClickDetector")

ClickDetector.MouseClick:Connect(function()
    print("Fired")
end)

fireclickdetector(ClickDetector, 32) -- This will not output
```

```lua
local ClickDetector = Instance.new("ClickDetector")

ClickDetector.MouseClick:Connect(function(player)
    print(`{player.Name} Fired M1`)
end)

ClickDetector.RightMouseClick:Connect(function(player)
    print(`{player.Name} Fired M2`)
end)

ClickDetector.MouseHoverEnter:Connect(function(player)
    print(`{player.Name} Fired HoverEnter`)
end)

ClickDetector.MouseHoverLeave:Connect(function(player)
    print(`{player} Fired HoverLeave`)
end)

fireclickdetector(ClickDetector, 0, "MouseClick") -- Output: Player Fired M1
fireclickdetector(ClickDetector, 0, "RightMouseClick") -- Output: Player Fired M2
fireclickdetector(ClickDetector, 0, "MouseHoverEnter") -- Output: Player Fired HoverEnter
fireclickdetector(ClickDetector, 0, "MouseHoverLeave") -- Output: Player Fired HoverLeave
```
