# firetouchinterest

{% hint style="info" %}
This is an implementation detail; as a regular scripter, you may ignore this!

It's not recommended to implement this function in luau. Doing so will expose you to easy detections. Additionally, when firing the touch interests, the function should yield, in order to allow the next one to fire with no problems.

Both numbers and booleans should be supported for the toggle (1 being true, 0 being false)
{% endhint %}

Triggers a `Touched` event on a `BasePart` with the other wanted part.

```lua
function firetouchinterest(part: BasePart, part2: BasePart, toggle: boolean | number): ()
```

## Parameter

* `part` - The part initiating the touch.
* `part2` - The part to be touched.
* `toggle` - Determines the touching event trigger.
  * `false` - Starts the **Touched** event. (Touch, internally).
  * `true` - Ends the **Touched** event. (Untouch, internally).

***

## Example

```lua
local DummyPart = Instance.new("Part")
DummyPart.CFrame = CFrame.new(0, -200, 0)
DummyPart.Anchored = true
DummyPart.Parent = workspace

DummyPart.Touched:Connect(function(arg1)
    print(arg1:IsDescendantOf(game.Players.LocalPlayer.Character))
end)

firetouchinterest(game.Players.LocalPlayer.Character.Head, DummyPart, false)
task.wait(0.5)
firetouchinterest(game.Players.LocalPlayer.Character.Head, DummyPart, true)
```
