const router=require('express').Router()
const {getSchema}=require('../controller/schemas')



router.get('/:schema',getSchema)



module.exports=router