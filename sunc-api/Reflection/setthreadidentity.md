# setthreadidentity

Sets the current thread's identity to the wanted value

```lua
function setthreadidentity(id: number): ()
```

## Parameters

* `id` - The wanted identity to change to

***

## Example

```lua
setthreadidentity(2)
print(game.CoreGui) -- Throws an error
setthreadidentity(8)
print(pcall(Instance.new, "Player")) -- Output: true Player
```
