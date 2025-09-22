# isfile

Determines if the specified path is a file.

```lua
function isfile(path: string): boolean
```

## Parameter

* `path` - The path to the file.

***

## Example

```lua
print(isfile("nonexistent.txt")) -- Output: false
writefile("file3.txt", "")
print(isfile("file3.txt")) -- Output: true
```
