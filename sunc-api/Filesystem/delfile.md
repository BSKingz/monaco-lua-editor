# delfile

Deletes the file at the specified path.

```lua
function delfile(path: string): ()
```

## Parameter

* `path` - Path to the file.

***

## Example

```lua
writefile("file5.txt", "Hello")
print(isfile("file5.txt")) -- Output: true
delfile("file5.txt")
print(isfile("file5.txt")) -- Output: false
```
