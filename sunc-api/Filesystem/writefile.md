# writefile

Writes data to a specified file path.

```lua
function writefile(path: string, data: string): ()
```

## Parameters

* `path` - path to the file that will be wrote to.
* `data` - the data to be written into the file.

***

## Example

```lua
writefile("file.txt", "Hello world")
print(readfile("file.txt")) -- Output: Hello world
```
