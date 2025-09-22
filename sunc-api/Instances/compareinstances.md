# compareinstances

his is primarily used for instances which have been [`cloneref`](https://penguins-organization-2.gitbook.io/sunc-docs/instances/cloneref)'d, where the normal equality check with `==` fails.

```lua
function compareinstances(object1: Instance, object2: Instance): boolean
```

***

### Parameters

* <kbd>object1</kbd>: The first [instance](https://create.roblox.com/docs/reference/engine/classes/Instance) to compare
* <kbd>object2</kbd>: The second [instance](https://create.roblox.com/docs/reference/engine/classes/Instance) to compare against

***

### Example

```lua
print(compareinstances(game, game))              -- true
print(compareinstances(game, workspace))         -- false
print(compareinstances(game, cloneref(game)))    -- true
print(game == cloneref(game))                    -- false
```
