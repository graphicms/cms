export function fieldsFromAll(all) {
  let string = ``;
  Object.keys(all).forEach(i => {
    string += i
    if(all[i].length > 0) {
      string += '{'
      all[i].forEach(ii => {
        let subfields = fieldsFromAll(ii);
        string += subfields
      })
      string += '}'
    }
    string += ','
  })
  string = string.replace(/(^,)|(,$)/g, "")
  return string
}