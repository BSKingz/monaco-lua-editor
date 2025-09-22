# readfile

Retrieves the content of the file at the specified path.

```lua
function readfile(path: string): string
```

## Parameter

* `path` - path to the file that will be read.

***

## Example

```lua
writefile("file0.txt", "Hello")
print(readfile("file0.txt")) -- Output: Hello
```
