

const GetUserById=(req,res)=>{
    let id=req.params.id
    if(!id) return res.status(400).send('id is required')
    res.render('profile',{username:'Reem Mohamed', role:'student', tasks: [
        { title: 'Task 1', description: 'Description for Task 1' },
        { title: 'Task 2', description: 'Description for Task 2' },
        { title: 'Task 3', description: 'Description for Task 3' }
    ]})
}

module.exports={GetUserById}

