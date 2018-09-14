module.exports = function (app) {
    const homeController = new HomeController()
    
    app.get('/', homeController.getHome)

}



class HomeController {
    getHome(req,res) {

    }
}
