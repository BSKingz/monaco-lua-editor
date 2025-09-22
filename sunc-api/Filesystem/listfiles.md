# listfiles

Provides a list of files and folders within a specified directory.

```lua
function listfiles(path: string): { string }
```

## Parameter

* `path` - path to the directory.

***

## Example

```lua
writefile("file1.txt", "")
writefile("file2.lua", "")
task.wait()
for _, File in listfiles("") do
    if File == "file1.txt" then
        print(`Found: {File}`) -- Output: Found: file1.txt
    end
    if File == "file2.lua" then
        print(`Found: {File}`) -- Output: Found: file2.lua
    end
end
```
