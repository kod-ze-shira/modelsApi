const mongoose = require("mongoose")
const User= require("./user")
const Manager= require("./manager")
const Workspace= require("./workspace")

const team= mongoose.Schema({
    managerId:{
        type:mongoose.Schema.Types.ObjectId,ref:'manager',
    },
  
    workspaces:[{
      type:mongoose.Schema.Types.ObjectId,ref:'workspace'
    }],

    taemName:
    {
    type:String
    },
    
    userTeam:
    [{
      type:mongoose.Schema.Types.ObjectId,ref:'user'
    }]
    
    });

module.exports = mongoose.model('team', team)
