# delfolder

Deletes the folder at the specified path.

```lua
function delfolder(path: string): ()
```

## Parameter

* `path` - Path to the folder you will delete.

***

## Example

```lua
makefolder("folder3")
print(isfolder("folder3")) -- Output: true
delfolder("folder3")
print(isfolder("folder3")) -- Output: false
```
