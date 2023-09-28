interface validInterface {
  id  : RegExp,
  password : RegExp
}

const valid : validInterface = {
  id : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,3}$/gi,
  password : /^.*(?=^.{8,16}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/gi,
}

export {valid}