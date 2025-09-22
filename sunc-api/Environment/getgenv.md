# getgenv

Returns a table containing all executor functions, serving as the shared environment for all scripts executed by the executor.

```lua
function getgenv(): { any }
```

***

## Example

```lua
getgenv().test = "hello world"
print(test) -- Output: hello world
```
