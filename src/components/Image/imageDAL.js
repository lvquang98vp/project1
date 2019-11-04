import * as dbUtil from '../../util/databaseUtil';
export const getImage = async()=>{
    const sql = "select * from images";
    const res = await dbUtil.query(sql);
    return res;
}