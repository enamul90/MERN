export const home=async (req,res)=>{
    return res.json({
        status:"success",
        message:"Item created successfully"
    })
}

export const about=async (req,res)=>{
    return res.json({
        status:"success",
        message:"This is my about to create a todo"
    })
}