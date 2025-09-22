# getthreadidentity

Gets the current thread's identity

```lua
function getthreadidentity(): number
```

***

## Example

```lua
task.defer(function() setthreadidentity(2); print(getthreadidentity()) end)
setthreadidentity(3)
print(getthreadidentity())

-- Output: 
-- 3
-- 2
```
