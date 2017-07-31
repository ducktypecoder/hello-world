## Step 4: Improved addNumbers

Improve that last function so that it converts strings into numbers:

In '/src/add-numbers':

```
module.exports = function addNumbers(num1, num2) { return Number(num1) + Number(num2); };
```

Should work, test it with ducktypecoder:

`$ ducktypecoder next`
