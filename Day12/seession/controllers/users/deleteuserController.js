const { UsersData } = require('../../modules/users')
const { TokeData } = require('../../modules/token');
const DeleteUser = async (req, res) => {
        try{

                let { username } = req.body;
                if (!username) return res.status(400).json({ message: "Username is required" });
                let user = await UsersData.findOneAndDelete({ username })
                //ممكن استخد م  findone and delete one   عشلان اتاكد بس الاول ان المستخدم موجود ولا 
                // بس طريقه try catch  بنستخدمها مع الfindoneadndelete  علشان يرجعلى الايرور كامل 
                await TokeData.findOneAndDelete({ username })
                
                if (!user) return res.status(404).json({ message: "User not found" });
                return res.status(200).json({ message: "User deleted successfully" });
        }catch(error){
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
        }
}
module.exports = { DeleteUser };






// بنتاكد من التوكن بتاع المستخدم ال هيحذف لو هو عامل لوجن ولا من اسكيما بتاعت التوكن
// const tokenuser=await TokeData.findOne({username})
// if(!tokenuser) return res.status(404).json({message:"Token not found"});
// await TokeData.deleteOne({username})




