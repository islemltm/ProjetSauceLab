const HomeElements = require("../../elements/Home")
class HomePage{
    get LgnBtn(){
        return $(HomeElements.LoginBtn)  
    }
    get Username(){
        return $(HomeElements.UserChamp)  
    }
    get Password(){
        return $(HomeElements.PassChamp)  
    }  
    get ErrorMsg(){
        return $(HomeElements.ErrMsg)
    }
}
module.exports= new HomePage()
