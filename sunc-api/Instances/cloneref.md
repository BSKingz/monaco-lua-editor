# cloneref

Returns a copy of the Instance where the copy should not be equal to the original Instance it was cloned from.

```lua
function cloneref<T>(object: T & Instance): T
```

## Parameter

* `object` - The Instance to clone.

***

## Example

```lua
local ClonedPlayer = cloneref(game:GetService("Players").LocalPlayer)
local Player = game:GetService("Players").LocalPlayer
print(Player == ClonedPlayer) -- Output: false
```
