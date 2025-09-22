# getconnections

{% hint style="info" %}
Passing a C-Signal or a foreign signal into **getconnections** should return `Function` and `Thread` as nil into their connections, due to them not being accessible.
{% endhint %}

Returns the [connections ](https://penguins-organization-2.gitbook.io/sunc-docs/signals/getconnections/the-connection-object)of the specified [signal](https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptSignal).

```lua
function getconnections(signal: RBXScriptSignal): {Connection} | nil
```

## Parameters

* `signal` - The signal whose connections you want to retrieve.

***

## Examples

```lua
local DummyFolder = Instance.new("Folder")
DummyFolder.ChildAdded:Connect(function() return "Triggered" end)
local connection = getconnections(DummyFolder.ChildAdded)[1] -- First connection in the returned table

print(`{connection.Function()}, {type(connection.Thread)}`) -- Output: Triggered, thread
```

```lua
local CConnection = getconnections(game.Players.LocalPlayer.Idled)[1]
print(`{CConnection.Function}, {CConnection.Thread}`) -- Output: nil, nil
```
