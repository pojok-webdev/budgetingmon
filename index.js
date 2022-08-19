const i = require('./initapp')
i.app.post('/create',(req,res)=>{
  params = req.body
  console.log(i.crud.create({
    tableName:'submissions',
    cols:[{key:"subject",val:params.subject}]
  }))
  i.con.doQuery(
    i.crud.create({
      tableName:'submissions',
      cols:[{key:"subject",val:params.subject}]
    }),result=>{
      res.send(result)
    }
  )
})
i.app.post('/dataprovider',(req,res)=>{
    params = req.body
    console.log("Params retrieved",params)
    i.con.doQuery(
      i.crud.read(params),result=>{
        res.send({data:result.map(obj=>{
          return params.cols.map(x=>{
            return obj[x]
          })
        })
      })
    })
  })
i.app.post('/specialqueryprovider',(req,res)=>{
  params = req.body
  i.con.doQuery(
    params.query,result=>{
      res.send({data:result.map(obj=>{
        return params.cols.map(x=>{
          return obj[x]
        })
      })})
    }
  )
})
i.app.get('/deletedsubmissions',(req,res)=>{
    res.render('tables/data',{
      data:{
        tableName:'deletedsubmissions',
        cols:['id','subject','budgeting_number','createuser','createdate'],
        conditions:'[{key:"1",val:"1"}]'
      }
    })
})
i.app.get('/deletedsubmissiondetails',(req,res)=>{
    res.render('tables/data',{
      data:{
        tableName:'deletedsubmission_details',
        cols:['id','itemname','price','createuser','createdate'],
        conditions:[{key:'1',val:'1'}]
      }
    })
})
i.app.get('/submissiononlies',(req,res)=>{
  res.render('tables/submissiononlies',{
    data:{
      tableName:'Submission Only',
      cols:['id','itemname','price','createuser','createdate'],
      conditions:[{key:'1',val:'1'}]
    }
  })
})
i.app.listen(i.setting.app.port,_=>{
    console.log('Listen to port ',i.setting.app.port)
})