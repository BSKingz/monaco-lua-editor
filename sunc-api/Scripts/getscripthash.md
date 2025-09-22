# getscripthash

{% hint style="info" %}
Use the compressed and encrypted bytecode, don't decrypt and decompress it.

This function should return `nil` if the script has no bytecode. We encourage this behavior, as it's easier for people to check for `nil`, rather than each executor having its own output.
{% endhint %}

Returns a `SHA384` hash represented in hex of the module/script's bytecode.

## Parameters

* `script` - The script instance to get the hash of.

***

## Example

```lua
local ScriptHash = getscripthash(game.Players.LocalPlayer.Character.Animate)
print(ScriptHash) -- Should return a non-changing SHA384 hash in hex representation

print(getscripthash(Instance.new("LocalScript"))) -- Output: nil
```
