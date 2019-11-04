import * as dbImage from './imageDAL';
export const getImage = async(req,res) => {
    console.log("login");
    const image = await dbImage.getImage();
    res.send(image);
}