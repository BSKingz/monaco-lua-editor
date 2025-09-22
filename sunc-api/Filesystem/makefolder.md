# makefolder

Creates a folder at the specified path if it doesn't already exist.

```lua
function makefolder(path: string): ()
```

## Parameter

* `path` - The location where you want to create the folder.

***

## Example

```lua
makefolder("folder")
print(isfolder("folder")) -- Output: true
```
