# getrawmetatable

Returns the metatable of **object**, bypassing the `__metatable` field.

```lua
function getrawmetatable(object: any): { [any]: any }
```

## Parameter

* `object` - The object to get the metatable of.

***

## Example

```lua
print(getrawmetatable(game).__index(game, "workspace")) -- Output: Workspace
```
