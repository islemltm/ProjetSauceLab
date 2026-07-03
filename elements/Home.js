class Home{
    UserChamp= '-android uiautomator:new UiSelector().text("Username")'
    PassChamp= '-android uiautomator:new UiSelector().text("Password")'
    LoginBtn= '-android uiautomator:new UiSelector().text("LOGIN")'
    ErrMsg= '-android uiautomator:new UiSelector().text(\"Username and password do not match any user in this service.\")'   
}
module.exports= new Home()