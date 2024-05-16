1. Update = post method + use the id of an existing object
2. Pug: != -> output unescaped HTML, e.g. <strong>ABC</strong> will result in:
   = -> <strong>ABC</strong>
   != -> bold ABC
3. req.params.id -> params are the bits preceded by : in the url, eg :id, :name etc.
   You can add multiple parameters by including an ampersand (&) between each one

TODO:

1. Create update get/post
2. Check if genre contains only alphanumeric chars even if there's a space
3. Try to add a custom error to validation res
4. Read into logging and setting the DEBUG variable
