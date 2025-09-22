# isreadonly

Will return true/false, depending if the table provided is read-only or not.

```lua
function isreadonly(table: { any }): boolean
```

## Parameter

* `table` - The table to check read-only state on.

***

## Example

```lua
print(isreadonly({})) -- Output: false
print(isreadonly(getrawmetatable(game))) -- Output: true
```
