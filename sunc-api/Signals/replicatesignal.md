# replicatesignal

{% hint style="info" %}
For an accurate result from the example, test the function in [our game](https://www.roblox.com/games/101590176937543/DONTPMOMEPLS).

Also note that some signals might have different namings. For all the current replicable signals, visit [this](https://rubis.numelon.com/view/?scrap=AIOzG1Di7NSLADKE)
{% endhint %}

If possible, replicates the signal to the server with the provided arguments. The arguments must also match accordingly to the signal itself. To know a signal's arguments, visit [this](https://robloxapi.github.io/ref/).

```lua
function replicatesignal(signal: RBXScriptSignal, ...: any?)
```

## Parameters

* `signal` - The signal to be fired/replicated.
* `...?` - The wanted arguments to pass into `signal`.

***

## Examples

```lua
local Path = workspace.replicatesigmal
replicatesignal(Path.ClickDetector.MouseActionReplicated, game.Players.LocalPlayer, 0)
task.wait(0.1)
print(game.Players.LocalPlayer:GetAttribute("MouseClickReplicated")) -- Output: true
```

```lua
local Path = game.Players.LocalPlayer.PlayerGui.ScreenGui.Frame
replicatesignal(Path.MouseWheelForward) -- Throws an arg error
replicatesignal(Path.MouseWheelForward, 121) -- Throws an arg error
replicatesignal(Path.MouseWheelForward, 121, 214)
task.wait(0.1)
print(game.Players.LocalPlayer:GetAttribute("MouseWheelForwardReplicated")) -- Output: true
```
