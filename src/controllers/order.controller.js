const OrderSchema = require('../models/Order')

const getAllOrder = async (req,res) => {
    try {
        const data = await OrderSchema.find()
         res.status(200).json({ok:true,order:data})
      } catch (error) {
        console.log(error);
          res.status(500).json({ok:false,order:error})
      }
}


const postOrder = async (req,res)=> {
    // console.log( req.body );
  
    try {
     const order = await OrderSchema(req.body)
     console.log(order);
      const data = await order.save()
      res.status(200).json({ok:true,data})
    } catch (error) {
        console.log(error);
         res.status(500).json({ok:false,order:error})
    }  
}


const  getOrderById = async (req,res) => {
    const { id } = req.params
    try {
     const idData = await OrderSchema.findById(id)
     res.status(200).json(idData)
    } catch (error) {
        res.status(500).json({ok:false,order:error})
    }
}



const updateOrder = async (req,res) => {
    const idOrder = req.params.id
    const newOrder = {...req.body}

    try {
      const updateOrder = await OrderSchema.findByIdAndUpdate(idOrder,newOrder,{new:true})

      res.status(200).json({ok:true,order:updateOrder})

    } catch (error) {   
        res.status(500).json({ok:false,order:error})
    }
   
}


const deleteOrder = async (req,res) => {
    const idOrder = req.params.id

   const order = await OrderSchema.findByIdAndDelete(idOrder)
    res.status(200).json({ok:true, order})
 
     try {
         
     } catch (error) {
         res.status(500).json({ok:false,order:error})
     }
 
}

module.exports = {
    getAllOrder,
    postOrder,
    getOrderById,
    updateOrder,
    deleteOrder
}