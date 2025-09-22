# appendfile

Appends data to the end of the file at the specified path, creating the file if it doesn't already exist.

```lua
function appendfile(path: string, contents: string): ()
```

## Parameters

* `path` - Path to the file.
* `contents` - The content to append.

***

## Example

```lua
writefile("file4.txt", "print(")
appendfile("file4.txt", "'Hello')")
print(readfile("file4.txt")) -- Output: print('Hello')
```
