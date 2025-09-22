# isfolder

Determines if the specified path is a folder.

```lua
function isfolder(path: string): boolean
```

## Parameter

* `path` - The path to check.

***

## Example

```lua
writefile("file7.txt", "")
makefolder("folder2")
print(isfolder("file7.txt")) -- Output: false
print(isfolder("folder2")) -- Output: true
```
