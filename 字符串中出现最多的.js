let str = "asdfssaaasasasaaa"
let value = {}

for (let i = 0; i < str.length; i++) {
    if (value[str[i]]) {
        value[str[i]] = ++value[str[i]]
    }else{
        value[str[i]] = 1
    }
}
console.log(value)