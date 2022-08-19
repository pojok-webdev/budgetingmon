obj = {
    tableName:'',
    cols : [{col:'name',val:'haha'}]
}
create = obj => {
    return 'insert into '+obj.tableName+' '
    +'('+obj.cols.map(c=>{return c.key}).join()+')'
    +'values '
    +'("'+obj.cols.map(c=>{return c.val}).join('","')+'")'
}
read = obj => {
    return 'select '+obj.cols.join()+' '
    +'from '+obj.tableName+' '
    +'where '+obj.conditions.map(condition=>{
        return condition.key='"'+condition.val+'"'
    }).join()
}
module.exports = {
    create:create,
    read:read
}