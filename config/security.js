module.exports = {
    sessionGrants: true, //false = GJP check is done every time; true = GJP check is done once per hour; Increases performance, decreases security.
    unregisteredInteractions: true, //false = Unregistered users aren't on leaderboards, can't upload levels, etc. true = Unregistered users can do everything.
    preactivateAccounts: true, //false = Accounts must be activated on the site. true = Accounts are activated automatically.

    /*
      Captcha
      Currently only works with hCaptcha.
    */
    captchaEnabled: false,
    captchaKey: "",
    captchaSecret: "",
}